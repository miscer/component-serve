# component-serve

  Development server that rebuilds your components on every request with an URL that ends with / or .html. 

## Installation

    npm install -g component-serve

## Usage

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


