/**
 * An application configuration.
 *
 * @author    nodes-galactic
 * @copyright Copyright (c) 2015, nodes-galactic
 * @license	  The MIT License {@link http://opensource.org/licenses/MIT}
 */
'use strict';

var config = {};

config.environment = process.env.NODE_ENV || 'development';

// Upload files in memory
config.uploadFilesInMemory = false;

// Populate the DB with sample data
config.seedDB = true;

// Server settings
config.server = {
    host: '0.0.0.0',
    port: process.env.NODE_PORT || 3000
};

// API route settings
config.api = {
    prepend: 'api',
    version: 'v1'
};

// MongoDB settings
config.mongodb = {
    dbURI: 'mongodb://127.0.0.1:27017/sandbox-api'
};

// Export configuration object
module.exports = config;
