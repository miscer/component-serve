var Builder = require('component-builder');

module.exports = function(opts) {
  return function(req, res, next) {
    var builder = new Builder(opts.root);

    if (opts.dev) builder.development();
    if (opts.plugins) opts.plugins.forEach(builder.use, builder);

    builder.addSourceURLs();
    builder.prefixUrls('./');
    builder.copyAssetsTo(opts.out);

    builder.build(function(err, obj) {
      if (err) return next(err);

      res.locals.js = obj.require + obj.js;
      res.locals.css = obj.css;
      
      next();
    });
  }
};
