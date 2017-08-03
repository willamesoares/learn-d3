![header](http://www.clipular.com/c/5725285858410496.png?k=HevaqkhU7K3Svt856Pk00KgiAyY)

Although this repository was created for learning purposes, it can be easily used as a boilerplate for [D3.js](https://d3js.org/) projects.

One of the biggest advantages of this project setup is that it comes with the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) package, which  gives you a really simple live reloading. As you will be working mainly with visual output, it is a great thing to have things updated without you having to change to your browser and reload the page manually.

Also, loaders for Babel and Sass are already configured so you are able to take advantages of ES6 features and structure your stylesheets in a fashionable way as well :)

If you want to read more about this project structure and the concepts behind it, you can take a look at [this related post](http://willamesoares.com/d3/setting-up-d3js-with-babel-and-webpack.html).

## Setup

If you already have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) installed in your machine, you can simply run the commands listed in the steps below.

### 1. Install dependencies
```
$ npm install
```
Or using yarn
```
$ yarn install
```

### 2. Run server
```
$ npm start
```
Or using yarn
```
$ yarn start
```

Now you can open you browser and go to `http://localhost:4800/`. You should see the D3 version this project uses, which is provided by the snippet shown below (also available in `app.js`).

```js
import * as d3 from 'd3'

d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)
```
## Build

If you wanna generate the minified files for the project you can simply run the command below.

```
$ npm run build
```
Or using yarn
```
$ yarn run build
```

If everything goes alright, then you are ready to start some D3 hacking. Have fun! :)

## Useful resources
 - [Scott Murray D3 Tutorials](http://alignedleft.com/tutorials/d3/)
 - [25+ Resources to Learn D3.js from Scratch](https://blog.modeanalytics.com/learn-d3/)
