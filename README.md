# [React (Typescript) infinite scrolling list demo](https://deadlyfingers.github.io/ReactCreateApp-Typescript/) [![Build Status](https://travis-ci.org/deadlyfingers/ReactCreateApp-Typescript.svg?branch=master)](https://travis-ci.org/deadlyfingers/ReactCreateApp-Typescript)

This [React](https://reactjs.org/) project was created using [Create React App](https://github.com/facebook/create-react-app) optimised for [Typescript](https://www.typescriptlang.org/) development in [VSCode](https://code.visualstudio.com/). The sample app features an infinite scrolling list fetching paginated data from a publicly available [source](https://anilist.co/graphiql) using a [GraphQL](https://graphql.org/) query.

| Developer Environment                                | Status |
| ---------------------------------------------------- | ------ |
| Typescript                                           | Yes    |
| SCSS                                                 | Yes    |
| Linting                                              | Yes    |
| Tests                                                | Yes    |
| Run tests coverage                                   | Yes    |
| Debugging with VSCode support                        | Yes    |
| Debug tests with VSCode support                      | Yes    |
| CRA provides live reload and external device testing | Yes    |

There are a number of list view components available for React but I choose [react-list](https://www.npmjs.com/package/react-list) component as it supports a number of key features including recycling view cells which is important for responsive and fluid scrolling with 1000s of items.

| React-List Component features       | Status |
| ----------------------------------- | ------ |
| Pagination using infinite scrolling | Yes    |
| Recycled / virtualized elements     | Yes    |
| List view                           | Yes    |
| Responsive list view styles         | Todo   |
| Responsive grid view styles         | Todo   |

## Future plans

- Further abstract ListViewContainer component with tests
- Further abstract GraphQL query with tests
- Add detail view
- Implement [Redux](https://redux.js.org/introduction/getting-started) for app state management

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional scripts

### `yarn test:coverage`

Shows project source code test coverage.

### `yarn lint`

Lints project source code.

### `yarn deploy`

Triggers manual deployment to [GitHub Pages](https://pages.github.com/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
