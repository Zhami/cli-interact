//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').getIPversion;
var answer;

answer = query();

console.log('you answered:', answer);