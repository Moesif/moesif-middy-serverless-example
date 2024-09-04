import moesif from 'moesif-aws-lambda';
import middy from '@middy/core';
import inputOutputLogger from '@middy/input-output-logger';
import 'dotenv/config';

const moesifOptions = {
  application_id: process.env.MOESIF_APPLICATION_ID,
  logBody: true
};

const hello = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  return response;
};

export const lambdaHandler = moesif(
  moesifOptions, 
  middy().use(inputOutputLogger()).handler(hello)
);