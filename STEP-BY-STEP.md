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














Now configure babel
```
$ vi .bablerc
```
...with this configuration
```json
{
    "presets": [
      "@babel/preset-react",
      ["@babel/preset-env", {
        "useBuiltIns": "entry",
        "targets": {
          "browsers": ["last 2 versions"],
          "uglify": true
        }
      }]
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      "styled-jsx/babel"
    ]
  }
```


Install `react` `react-dom` `redux`, `react-redux`, `redux-saga`, `prop-types`, `@reach/router`
```
$ yarn add react react-dom redux react-redux redux-saga prop-types @reach/router
```

Install `eslint` related packages
```
$ yarn add eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev
```

```
$ vi .eslintrc.js
```

```js
module.exports = {
  extends: 'airbnb/base',
  parser: 'babel-eslint',
  plugins: [ 'react' ],
  rules: {
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: [ '**/*.test.js', './webpack.*js' ]
    }],
    'import/no-named-as-default': [0],
    'indent': ["error", 2, { "MemberExpression": 1, 'SwitchCase': 1 }],
    'max-len': 'off',
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/prefer-stateless-function': 'off',
    'react/require-extension': 'off'
  },
  env: {
    browser: true,
    mocha: true,
  },
};
```
