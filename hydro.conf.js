/**
 * Simple HTTP handler.
 *
 * @param {Request} req
 * @param {Response} res
 */

function app(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('OK');
}

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-http-server',
    formatter: 'hydro-simple',
    plugins: [
      require('./')
    ],
    httpServer: {
      app: app,
    },
    globals: {
      app: app,
      assert: require('assert')
    },
    tests: [
      'test/*.js'
    ]
  });
};
