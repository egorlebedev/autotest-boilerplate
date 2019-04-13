const path = require("path");

require(path.join(__dirname, "/config.js"));

module.exports = require('autotest/nightwatch.conf');
