require('dotenv').config();
const moesif = require('moesif-aws-lambda');
//const middy = require('@middy/core');

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

exports.hello = moesif(moesifOptions, hello);