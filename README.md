# moesif-middy-serverless-example
This examples demonstrates how to use [Moesif AWS Lambda middleware for Node.js](https://www.moesif.com/docs/server-integration/aws-lambda-nodejs/) with [Middy](https://www.moesif.com/docs/server-integration/aws-lambda-nodejs/) and [Serverless Framework](https://serverless.com).

## Overview
This example builds and deploys a simple HTTP API to AWS using Serverless right from your terminal. The API has a single valid endpoint `greet/` that expects `POST` requests. A valid `POST` request body looks like the following:

```json
{
    "greetingsMessage": "Good evening!",
    "greeterName": "Alex"
}
```

The example uses the following Middy middlewares:

- [`http-security-headers`](https://middy.js.org/docs/middlewares/http-security-headers)
- [`http-json-body-parser`](https://middy.js.org/docs/middlewares/http-json-body-parser)
- [`validator`](https://middy.js.org/docs/middlewares/http-json-body-parser)
- [`http-error-handler`](https://middy.js.org/docs/middlewares/http-error-handler)


## Repository structure

```
.
├── handler.js
├── package.json
├── README.md
└── serverless.yml
```

The AWS Lambda function and the API logic lives inside `handler.js`. The `serverless.yml` file describes your  Serverless app's infrastructure. For more information, see [Serverless.yml Reference](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml).

## Before you begin
Before running this example, make sure you have performed the following steps:

- [Have an active Moesif account](https://moesif.com/wrap)
- [Have your Moesif Application ID](https://www.moesif.com/docs/server-integration/aws-lambda-nodejs/#get-your-moesif-application-id#get-your-moesif-application-id)
- [Set up Serverless with with your AWS account](https://www.serverless.com/framework/docs/getting-started)

### CommonJS and ECMAScript modules
This example uses [ECMAScript modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) to comply with the [latest 5.x version of Middy](https://middy.js.org/docs/upgrade/4-5/). 

If you want to run this example using CommonJS, use Middy version 4.x. Additionally, you must make the following adjustments:

1. Remove `"type": "module"` from the `package.json` file.
2. Change the `import` and `export` statements to CommonJS-style imports and exports.

## How to run the example
1. [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and enter its directory:
    ```sh
    cd moesif-middy-serverless-example
    ```
2. Specify your Moesif Application ID in the `.env` file:
    ```env
     MOESIF_APPLICATION_ID=YOUR_MOESIF_APPLICATION_ID
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Then deploy with Serverless:
    ```sh
    serverless deploy
    ```

    For a successful deployment, the `deploy` command generates an output similar to the following:

    ```
    Deploying "moesif-middy-serverless" to stage "dev" (us-east-1)

    ✔ Service deployed to stack moesif-middy-serverless-dev (69s)

    endpoint: POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/greet
    functions:
    greetingsHandler: moesif-middy-serverless-dev-greetingsHandler (3.7 MB)
    ```
5. Send requests to the API endpoint. In [your Moesif Web Portal](https://moesif.com/wrap), you should see API traffic details show up.

## How to Get Help
If you face any issues running this example, reach out to our [support team](mailto:support@moesif.com) or open an issue.
