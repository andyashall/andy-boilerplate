# Andy's Boilerplate

## Install and Running
`git clone https://github.com/andyashall/andy-boilerplate.git`

1. `cd andy-boilerplate`
2. `npm install`
3. Add you MongoDB URL to the mongo.config.js file.
4. `npm start`
5. navigate to http://localhost:3000 in your browser of choice.


## Overview

### React by default
The project runs with React by default and hot replacement of changes to the modules.

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

To turn off CSS Modules remove it from the `webpack.config.js` file.

### Package List

1. Axios
2. Babel
3. Bycryptjs
4. Bodyparser
5. Cookie-parser
6. Express
7. MongoDB
8. Random-id
9. React
10. React-redux
11. React-router
12. React-cookie
13. Redux
14. Timeago