# Visado App

Visado App is a web application designed to simplify and streamline the visa application process for travelers. It aims to provide an easy-to-use platform for users to access relevant information about visa requirements and travel documentation.

## Authors
carolina-ross


## Demo

visado-app.vercel.app


## Tech Stack

**Client:** React

**Server:** 
`Node.js >= 16.14` [https://nodejs.org/en](https://nodejs.org/en)

`MongoDB` [https://www.mongodb.com/en/products/tools/compass](https://www.mongodb.com/en/products/tools/compass)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

API used is Visado List you can find it [https://rapidapi.com/hakr/api/visa-list/](https://rapidapi.com/hakr/api/visa-list/)  here and also the credentials to place them in your .env file.

`MONGODB_URI` String connection mongodb

`VISA_API_URL` use https://visa-list.p.rapidapi.com/public

`X_RAPIDAPI_KEY` Visa List Credential

`X_RAPIDAPI_HOST` Visa List Credential 

`PRIVATE_KEY_TOKEN` any key you want

`NEXT_PUBLIC_BASE_URL`  use http://localhost:3000


## Run Locally

Clone the project

```bash
  git clone https://github.com/carolina-ross/visado_capstone_rossello.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
