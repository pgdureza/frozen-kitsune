Random project using react + apollo

## Setup

run `yarn install` to install all client dependencies <br>
run `cd server && yarn install` to install all server dependencies

## Available Scripts

In the project directory, you can run:

### `yarn server`

Runs the graphQL server. <br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test:unit`

Launches the test runner in the interactive watch mode.<br>
Project is currently using jest + enzyme

### `yarn test:unit:coverage`

Launches the test runner and returns coverage test

### `yarn test:unit:integration`

Launches the cypress test runner and generates report in `cypress/screenshots` and `cypress/videos`<br>
NOTE: This requires that local graphQL server and webapp is running

### `yarn test:unit:integration:open`

Launches cypress in open state
