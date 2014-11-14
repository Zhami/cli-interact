//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').question;
var answer;

answer = query('Tell me what do you want: ');

console.log('you answered:', answer);