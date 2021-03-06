/**
 * @author    nodes-galactic
 * @copyright Copyright (c) 2015, nodes-galactic
 * @license	  The MIT License {@link http://opensource.org/licenses/MIT}
 */
'use strict';

/**
 * Module dependencies.
 */
var pkg     = require('./package.json');
var config  = require('./src/config/config');
var express = require('./src/config/express');
var mongodb = require('./src/config/mongoose');

// Initialize mongoose
mongodb(function startServer() {
    // Initialize express
    var app = express.init();

    // Start up the server on the port specified in the config after we connected to mongodb
    app.listen(config.server.port, function () {
    });
});

