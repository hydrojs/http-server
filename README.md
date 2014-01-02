[![NPM
version](https://badge.fury.io/js/hydro-http-server.png)](http://badge.fury.io/js/hydro-http-server)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-http-server.png)](http://travis-ci.org/hydrojs/hydro-http-server)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-http-server/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-http-server?branch=master)

# hydro-http-server

## Synopsis

Launch and stop HTTP Server before/after each tests.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-http-server'],
  httpServer: {
    app: function(req, res){}, // request handler, could be express, connect etc.
    port: 3003, // server port, default: 3003, optional
    timeout: 100 // server timeout, default: 100, optional
  }
});
```

## Installation

#### npm:

```bash
npm install hydro-http-server
```

## Tests

```bash
$ npm test
```

## License

The MIT License (see LICENSE)
