/**
 * Core dependencies.
 */

var http = require('http');

/**
 * Start/stop HTTP server around each test.
 *
 * Options:
 *
 * - port: Server port (default: 3003)
 * - timeout: Server timeout (default: 100)
 * - app: Request handler, could be `express()` etc.
 *
 * @param {Hydro} hydro
 * @api public
 */

module.exports = function(hydro) {
  var opts = hydro.get('httpServer') || {};
  var server = null;

  if (!opts.app) return;

  opts.port = opts.port || 3003;
  opts.timeout = opts.timeout || 100;

  hydro.on('pre:test', function(suite, done) {
    server = http.createServer(opts.app)
    server.timeout = opts.timeout;
    server.listen(opts.port, function() {
      done();
    });
  });

  hydro.on('post:test', function(test, done) {
    server.close(done);
  });
};
