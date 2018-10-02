# Step by step configuration of my React project template

This template is largely based upon `Building Applications with React and Redux in ES6`

## System setup 

```
$ node -v
v8.11.4
```

Install `yarn`
```
$ brew install yarn
```

## Initialize the project

Initialize the project
```
$ yarn init
yarn init v1.9.4
question name (simple-react-project-template):
question version (1.0.0): 0.1.0
question description: Simple React app that
question entry point (index.js):
question repository url:
question author (Egbert Pot <Egbert.Pot@rabobank.nl>): Egbert Pot <egbert@egbertpot.nl>
question license (MIT): BSD
question private:
success Saved package.json
✨  Done in 39.21s.
```

## Install `webpack`

Install `webpack`, `webpack-dev-middleware` and `webpack-hot-middleware`
```
$ yarn add webpack webpack-dev-middleware webpack-hot-middleware --dev
```

## Install `webpack` plugins

`HardSourceWebpackPlugin` is a plugin for webpack to provide an intermediate caching step for modules. In order to see results, you'll need to run webpack twice with this plugin: the first build will take the normal amount of time. The second build will be signficantly faster.

The `html-webpack-plugin` plugins, is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. 

```
$ yarn add html-webpack-plugin hard-source-webpack-plugin --dev
```

Install Babel
```
$ yarn add @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react babel-eslint babel-loader --dev
```

Install React

You have to install `react` at this point, otherwise the `react-hot-loader` plugin doesn't work. 
```
$ yarn add react
```

Now configure babel
```
$ code packages.json
```
...by adding this conde snippet to `packages.json`
```json
  "babel": {
    "env": {
      "development": {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        "plugins": [
          "react-hot-loader/babel"
        ]
      }
    }
  }
```

Setup directory-structure
```
$ mkdir -p src/actions src/components src/constants src/reducers src/store src/styles src/types src/utils tools
```

## Getting started with simple `index.js` file

Create a simple `index.js` file that logs something to the console
```
$ echo 'console.log("Hi there");' > src/index.js
```

## Create webserver script

```
$ mkdir tools
$ touch tools/srcServer.js
```

The server uses a few more dev dependencies
```
$ yarn add browser-sync @babel/node react-hot-loader --dev
```

## Start the webserver

```
$ yarn start
```

### Install `eslint`

```
$ yarn add eslint eslint-plugin-import eslint-plugin-import eslint-plugin-react eslint-watch babel-eslint --dev
```

Add two `lint`-entries in the scripts section of `package.json` 
```json
{
  "name": "simple-react-project-template",
  (....)
  "scripts": {
    "start": "babel-node tools/srcServer.js",
    "lint": "esw webpack.config.* src tools --color",
    "lint:watch": "npm run lint -- --watch"
  },
  "main": "index.js",
  (....)
```

Add the `eslint` configuration to `packages.json`

```json
  "babel": {
    (...)
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:react/recommended"
    ],
    "plugins": [
      "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jquery": true,
      "jest": true
    },
    "globals": {}
  }
}
```

Test if `eslint` works
```
$ yarn lint
  ✖  1:1  Unexpected console statement  no-console

✖ 1 error (20:54:15)


error Command failed with exit code 1.
```

This is a perfect error message, because we're using an `console.log` statement in `index.js`.

Let the linting start, every time we start the app. 

```
$ yarn add concurrently --dev
```

Update the `scripts` section of `package.json`

```json
{
  "name": "simple-react-project-template",
  (...)
  "scripts": {
    "start": "concurrently -k -r -s first \"npm run open:src\" \"npm run lint:watch\"",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "esw webpack.config.* src tools --color",
    "lint:watch": "npm run lint -- --watch"
  },
  "main": "index.js",
  (...)
```

Let's test if linting starts when you start the app

```
$ yarn start
```


# Phase 2: Install `react` and `redux`

```
$ yarn add react react-dom react-redux react-router-dom redux connected-react-router object-assign
```

Install all kind of loader dependencies so that `webpack` can compile the project.
```
$ yarn add file-loader style-loader postcss-loader css-loader sass-loader url-loader json-loader node-sass autoprefixer --dev
```
