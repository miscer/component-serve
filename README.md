# component-serve

  Development server that rebuilds your components on every request.

## Installation

    npm install -g component-serve

## CLI usage

  In the app directory run

```
  # Running on localhost:3000
  $ component serve

  # Running on localhost:3030
  $ component serve -p 3030

  # Running on localhost:3000 and output at directory named `out`
  $ component serve -o out

  # Running on localhost:3000 and use component-styl builder plugin
  $ npm install component-styl --save
  $ component serve --use component-styl

```

## Programmatic usage

  It is possible to use component-serve as an Express middleware:

```javascript
  var cs = require('component-serve');

  app.use('/build', cs({
    root: process.cwd(),
    plugins: [ require('component-jade') ]
  }));
```
