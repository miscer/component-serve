var express = require('express');
var Temp = require('temporary/lib/dir');
var builder = require('./builder.js');

module.exports = function(opts) {
  var router = express();

  opts.dev = 'dev' in opts ? opts.dev : true;
  opts.out = new Temp().path;

  router.use(express.static(opts.out));

  var rebuild = builder(opts);

  router.get('/build.js', rebuild, function(req, res) {
    res.type('js');
    res.send(res.locals.js);
  });

  router.get('/build.css', rebuild, function(req, res) {
    res.type('css');
    res.send(res.locals.css);
  });

  return router;
};
