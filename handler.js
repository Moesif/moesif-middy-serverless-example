import moesif from "moesif-aws-lambda";
import middy from "@middy/core";
import httpSecurityHeaders from "@middy/http-security-headers";
import validator from "@middy/validator";
import { transpileSchema } from "@middy/validator/transpile";
import jsonBodyParser from "@middy/http-json-body-parser";

import "dotenv/config";
import httpErrorHandler from "@middy/http-error-handler";

const moesifOptions = {
  application_id: process.env.MOESIF_APPLICATION_ID,
  logBody: true,
};

const greetingsHandler = async (event, context) => {
  const { greetingsMessage, greeterName } = event.body;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Greetings details received successfully!",
      greetingsDetails: {
        greetingsMessage: greetingsMessage,
        greeter: greeterName,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return response;
};

/** 
 * The `validator` middleware uses this schema to validate the event body. 
 * For example, the following is a valid request:
 * 
 * {
 *   "greetingsMessage": "Good evening!",
 *   "greeterName": "Alex"
 * }
 **/
const schema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        greetingsMessage: {
          type: "string",
        },
        greeterName: {
          type: "string",
        },
      },
      required: ["greetingsMessage", "greeterName"],
    },
  },
};

// Wrap the final handler from Middy with `moesif`.
export const lambdaHandler = moesif(
  moesifOptions,
  middy()
    .use(httpSecurityHeaders())
    .use(jsonBodyParser())
    .use(validator({ eventSchema: transpileSchema(schema) }))
    .use(httpErrorHandler())
    .handler(greetingsHandler)
);
