var http = require('http');

test('starting a server', function(done) {
  http.get('http://localhost:3003', function(res) {
    assert(res.statusCode === 200);
    done();
  });
});
