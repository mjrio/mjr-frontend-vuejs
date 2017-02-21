# VueJS - WebPack
<img src="./images/vue-file.png" width="400px" /><br>
<small>by Peter Cosemans</small>

<br>
<small>
Copyright (c) 2017 Euricom nv.
</small>

<style type="text/css">
.reveal p {
    text-align: center;
    margin: 20px 0;
    line-height: 1.0;
}
.reveal pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
}
</style>

---

# Vue Component Spec

> The *.vue files syntax

----

## .vue file

```html
<template lang="html">
  <div class="example">
    <h1>{{ title }}</h1>
    <other-component/>
</template>
```
```html
<script>
import otherComponent from 'component/otherComponent'
export default {
    data () {
        return {
            title: 'Hello world!'
        }
    }
}
</script>
```
```html
<style lang="sass" scoped>
$font-stack: Helvetica;
$primary-color: #333;
.example {
    font: 100% $font-stack;
    color: $primary-color;
</style>
```

---

# Setup

> Lets build with WebPack, ES6+ and .vue files

https://vue-loader.vuejs.org/en/

----

## Vue App and component

Create our vue app (notice ES modules & render function)

```js
// main.js
import Vue from 'vue'
import App from './app.vue'
new Vue({
    el: '#app',
    render: h => h(App),
})
```

The app (root) component

```html
<template>
  <div id="app">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title: 'Vue with WebPack'
    }
  }
}
</script>
```

----

## WebPack & Npm Modules

Now we install VueJS via npm (or better yarn)

```bash
$ yarn add vue
```

To process .vue files we need the vue-loader

```bash
$ yarn add vue-loader vue-template-compiler --dev
```

And configure it

```js
// webpack.config.js
module: {
    rules: [
        ...
        { test: /\.vue$/, loader: 'vue-loader' },
    ],
},
plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            // this is required for VueJS
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
    }),
],
```

---

# ESLint your vue files

> Don't forget your linting

----

## Setup

Install

```bash
npm install --save-dev eslint-plugin-vue eslint-config-vue
```

Config .eslintrc

```json
{
    extends: ["vue", /* your usual extends */ ],
    plugins: ["vue"],
}
```

Setup script: package.json

```json
"scripts": {
    "lint": "eslint 'app/**/*.{js,vue}'"
},
```

----

## Setup - VSCode

settings.json

```json
// linting vue files
"files.associations": {
    "*.vue": "vue"
},
"eslint.options": {
    "extensions": [".js", ".vue"]
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
],

```

Add following plugins

- Vetur: octref.vetur
- VueHelper: oysun.vuehelper


---

# Components

> Just a collection of .vue files

----

## .vue Component

./components/message.vue

```html
<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello from messsage'
        }
    },
}
</script>
```

This is not required anymore

```js
var Message = Vue.extend({
...
})
Vue.component('message', Message)
```

----

## Use of components

app.vue

```html
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <message></message>
  </div>
</template>

<script>
import Message from './components/message.vue'
export default {
  components: {
    // list the components used in this component
    Message,
  },
  data () {
    return {
        title: 'Vue with WebPack'
    }
  }
}
</script>
```

---

# Styling

> Power to your styles

----

## Styling in .vue file

```html
<!-- message.vue -->
<template>
</template>

<script>
</script>

<style>
h1 {
    color: red
}
</style>
```

Notice that the style is applied to the full application

----

## Scoped styling

```html
<!-- message.vue -->
<style scoped>
h1 {
    color: red
}
</style>
```

Notice that not the styling is now only applied to the `Message` component

> CSS Modules are also supported
> https://vue-loader.vuejs.org/en/features/css-modules.html

----

## Less

Less loader and dependencies

```bash
npm install less-loader less --save-dev
```

Specify less as language

```less
<!-- message.vue -->
<style lang="less">
@import "~bootstrap/dist/css/bootstrap.css";
@import (reference) "../variable.less"
@alert-color: red
h1 {
    color: @alert-color
}
</style>
```

Now you can use:

- Variables
- Import other files
- And all other nifty less features

<small>
[Learn LESS in 10 Minutes](http://tutorialzine.com/2015/07/learn-less-in-10-minutes-or-less/)
</small>

---

# Loading data
> Get the data from the backend

VueJS doen't include a http module. Provide one yourself

----

## Using fetch

```js
fetch('api/users')
    .then(checkStatus)
    .then(res => res.json())
    .then(users => {
        console.log(users)
    })
    .catch(err => {
        console.log(err)
    })

function checkStatus(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}
```

> [Can I Use - Fetch](http://caniuse.com/#search=fetch)

----

## Using Axios

```bash
$ npm install axios
```

```js
import axios from 'axios'

axios.get('/user?ID=12345')
    .then(res => {
        console.log(res.data);
    })
    .catch(res => {
        console.log(res.status, res.statusText);
    });
```

---

# Production

> Optimize your build

----

## Webpack Extract CSS

```bash
npm install extract-text-webpack-plugin@2.x --save-dev
```

```js
// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // other options...
```
```js
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    less: ExtractTextPlugin.extract({
                        loader: 'css-loader!less-loader',
                        fallbackLoader: 'vue-style-loader',
                    }),
                },
            },
        },
    ]
  },
```
```js
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
```

----

## Optimize

Use Webpack’s DefinePlugin to indicate a production environment, so that warning blocks can be automatically dropped by UglifyJS during minification.

```js
var webpack = require('webpack')
module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
```

---

# Resources

- [vue-loader](https://vue-loader.vuejs.org/en/)

- [Vue tooling for VSCode](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

- [ES / TypeScript decorator for class-style Vue](https://github.com/vuejs/vue-class-component)
