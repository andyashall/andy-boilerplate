# express-react-redux-webpack-boilerplate

## Install and Running
`git clone https://github.com/andyashall/express-react-redux-webpack-boilerplate`

1. `cd andy-boilerplate`
2. `npm i`
3. Add your MongoDB URL to the `mongo.config.js` file.
4. `npm start`
5. navigate to http://localhost:3000 in your browser of choice.

## Build for Production

`npm run build`


## Overview

### Package List

- `axios-^0.16.1`
- `babel-cli-^6.4.0`
- `bcryptjs-^2.4.3`
- `body-parser-^1.17.1`
- `compression-^1.6.2`
- `cookie-parser-^1.4.3`
- `express-^4.15.2`
- `mongodb-^2.2.26`
- `random-id-0.0.2`
- `react-^15.5.4`
- `react-cookie-^2.0.6`
- `react-dom-^15.5.4`
- `react-redux-^5.0.4`
- `react-router-^3.0.5` (change to v4)
- `redux-^3.6.0`
- `time-ago-^0.1.0`

### React by default
The project runs with React by default and hot replacement of changes to the modules.

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

To turn off CSS Modules remove it from the `webpack.config.js` file.