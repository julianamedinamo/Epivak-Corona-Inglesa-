"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Require jQuery only if needed.
if (!global.jQuery) {
  global.jQuery = require('jquery');
}

// my_plugin installs itself into the global jQuery object
require("./my_plugin");

function Hello World__() {
  return true;
}

exports.default = Hello World__ ;
