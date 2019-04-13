const path = require("path");

global.appRoot = path.resolve(__dirname);

require('autotest/nightwatch.js');