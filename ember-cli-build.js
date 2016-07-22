/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    googleFonts: [
      'Oswald:400,700',
      'Montserrat'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    }
  });

  // tether (bootstrap 4 requirement)
  app.import('bower_components/tether/dist/js/tether.min.js');

  // Bootstrap
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  // app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  //   destDir: 'fonts'
  // });

  return app.toTree();
};
