## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI. 

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

NOTE: The github GraphQl API has a limit of 10 results for the Topics queries. As far as I could tell, anyway. I mean, that's what said when it complained when I tried to get 100. But mentioning it just in case. 

This project uses:
* ReactJS with TS - create-react-app - React is fast and easy for a small app like this; create-react-app makes setup even easier. TS has static type checking which helps make sure you're getting what you think you're getting.
* JEST + React Testing Library - Came built in with create-react-app and it's fairly easy to use
* StyledComponents - makes it easier to style, especially for an app this small.
* Apollo for GraphQL queries - makes working with GraphQL a lot easier
* eslint + prettier for making sure things are looking good and there are not errors that sneaked through
* netlify to host the app because they really make it so easy and it makes it easier to check out this cool little app!

This project has a fairly simple UI but it's responsive which means you can check it out on your phone or table too!

A general overview of the code structure:
* `components`, `mocks`, `queries`, and `styles` all live in their own respective folders
* inside `components` there is a folder for each component
* each component also has its own tests, found under the `__tests__` dir. Personally, I find that this makes it easier to keep track of tests.
* I don't usually separate out the styled components unless there's really quite a lot of them. I would then keep them in their component folder too.
* I like having some universal styles, like colors and spacing/grids, in the styles folder. This way, if we ever need to make reband-y sweeping changes, it's a lot easier and faster. 


### How to run app & test

[See the app in action](github-topic-explorer.netlify.app/) 

To test, you will need to:
1. `git clone git@github.com:atomictangerine/github-topic-explorer.git` into your favorite working directory. You can also use the HHTPS link if that's how you prefer to github.  OR If you have a zip of the project, unzip it and then open it and move it to your favorite working directory.
2. `cd github-topic-explorer` Cd into the project folder
3. `npm i` install all the project's dependencies.
4. `npm run test` to run all the tests! or `npm run test -- --coverage` to see the test code coverage
5. `npm run lint` or `npm run format` to run either the linter or prettier. [NOTE: My terminal was doing funky things and eslint wouldn't work sometimes on a new terminal window. If this happens to you make sure that you are using the latest node version `nvm use v14`. I didn't want to spend to much time on this and this work around worked.]


### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

* Refactoring:
- I tried to be as strict with my types as I could, but I think there's a little room to tighten that up. Especially in the tests.

* Additional Features:
- I would go back and just make sure that prettier and eslint are working nice together. Right now, they kind of contradict each other a little. I would devote a little more time to those configs and settings
- Having some e2e tests or some integration testing would make sure that nothing goes awry. Or point out if things are already awry.
- I think it would be nice to go back and maybe tweak the visuals a bit. Like adding a shadow or some other visual way of telling which card you hovered on
- It might be nice to be able to sort your results. I guess it doesn't really matter when you only get 10 things but maybe if we had more data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run format`

Runs prettier

### `npm run lint`

Runs eslint on the code.