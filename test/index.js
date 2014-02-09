var serve = require('../index.js');
var express = require('express');
var request = require('supertest');

describe('component-serve', function() {

  var app;

  beforeEach(function() {
    app = express();

    app.use(serve({
      root: __dirname + '/component',
      plugins: [],
      dev: true,
      noRequire: false
    }));
  });

  it('compiles javascript files', function(done) {
    request(app)
      .get('/build.js')
      .expect(200)
      .expect(/contents of component index\.js/)
      .expect(/contents of component foobar\.js/)
      .expect(/contents of foo-bar index\.js/)
      .end(done);
  });

  it('compiles css files', function(done) {
    request(app)
      .get('/build.css')
      .expect(200)
      .expect(/#foo/)
      .expect(/foo\/image\.png/)
      .end(done);
  });

  it('copies assets', function(done) {
    function compile(done) {
      request(app).get('/build.js').end(done);
    }

    function test(done) {
      request(app)
        .get('/foo/image.png')
        .expect(200)
        .expect('Content-Type', /png/)
        .end(done);
    }

    compile(function(err) {
      if (err) done(err);
      else test(done);
    });
  });

});
