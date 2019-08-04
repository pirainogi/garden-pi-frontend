# GARDEN PI
Frontend developed by [Gabbie Piraino](https://github.com/pirainogi); project developed with [Steven Balasta](https://github.com/sbal13), [Ian Hollander](https://github.com/ihollander), and [Vishal Patel](https://github.com/vishalpatel2890)

** Work in Progress **

## Built With
* Python
* Ruby
* Javascript

* AWS DynamoDB
* AWS Lambda
* Rails
* React
* HTML5
* CSS3

Please find the Rails database at [Garden-Pi-API](https://github.com/garden-pi/garden-pi-api). **You will need to create an API key with the Trefle API in order to seed your data.**

Please find the Lambda package at [Garden-Pi-Lambda](https://github.com/garden-pi/garden-pi-lambda)

Please find the Pi package at [Garden-Pi-Device](https://github.com/garden-pi/garden-pi-device)

Please find the AWS IOT at [Garden-Pi-IOT](https://github.com/garden-pi/garden-pi-aws-iot)

## Prerequisites

You will need `node` or `yarn` installed on your computer in order to run this app.

In order to run this app, first clone the server repo down onto your local machine and follow the instructions in the readme to spin up the server. Then clone this repo down onto your local machine and navigate to that directory. Then install the necessary dependencies with either:

- `npm install`
- `yarn install`

Then you can start running the program with `npm start`.

## NPM Packages
- Redux
- React-DOM
- React-Router-DOM

# Features
- New clients can create new accounts that are authenticated and authorized
- Users are authenticated with `bcrypt` and `JWT` upon login  
- Users can edit and update their profile information, or delete their account
- Users can create and delete plants
- Users can group their plants
- Actions instruct users on the care and management of their plants

# Component Hierarchy

App
- Home
- Login (Login Form)
- Signup (Signup Form)
- Profile (User Info, Plant Info [Plants])
- Edit Profile (User Info Form)
- User Default (Plant Carousel, Plant Specs [Plant Detail, Icons])
- My Plants (Plant Group Carousel, Plant Groups [Plant Group Specs, Plant Icons])
- Create Plant (Create Plant Form)
- Remove Plant Modal
- About
- Header
- Footer


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Hamburger Icon created by [Icons8](https://icons8.com/icon/12371/menu")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
