# GARDEN PARTY
Frontend developed by Gabbie Piraino; project developed with ![Steven Balasta](https://github.com/sbal13), ![Ian Hollander](https://github.com/ihollander), and ![Vishal Patel](https://github.com/vishalpatel2890)

** Work in Progress **

## Built With
- Python
- Ruby
- Javascript

- AWS Dynamo DB
- AWS Lambda
- Rails
- React
- HTML5 and CSS3

## Prerequisites

You will need `node` or `yarn` installed on your computer in order to run this app.

In order to run this app, first clone the server repo down onto your local machine and follow the instructions in the readme to spin up the server. Then clone this repo down onto your local machine and navigate to that directory. Then install the necessary dependencies with either:

- npm install
- yarn install

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
