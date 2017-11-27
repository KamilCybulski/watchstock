# watchstock
Chart the Stock Market project for freeCodeCamp's backend certification, made with React, Redux and Firebase

## User stories: 
  1. I can view a graph displaying the recent trend lines for each added stock.
  2. I can add new stocks by their symbol name.
  3. I can remove stocks.
  4. I can see changes in real-time when any other user adds or removes a stock.

## Installation
  1. Clone the repository and run `npm install` to install dependencies.
  2. Create a new [firebase app](https://firebase.google.com/).
  3. In the project's root directory create a `config` folder and a `firebase-config.js` file in it.
  4. In your `firebase-config.js` file, export and object with your app's api key, project id and db url
     as properties. It should look like this:
     ```javascript
      export default {
        apiKey: 'my-firebase-api-key',
        projectId: 'my-projects-id',
        databaseURL: 'the-url-of-my-database',
      };
     ```
  5. Run `npm start`.

## Technologies used

Technology | Purpose 
--- | --- 
Npm | Package Manager
React | Frontend Library
Redux | Frontend State Management Library
Redux Saga | Redux middleware for asynchronous actions
Sass | CSS preprocessor
Firebase | Real-time database
Webpack | Bundler
Babel | Transpiler
ESLint | Linter
Jest | Test Framework
Enzyme | Testing Library for React

