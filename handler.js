import moesif from 'moesif-aws-lambda';
import middy from '@middy/core';
import 'dotenv/config';

const moesifOptions = {
  application_id: process.env.MOESIF_APPLICATION_ID,
  logBody: true
};

const hello = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

export const lambdaHandler = middy().use(moesif(moesifOptions)).handler(hello);