//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').getChoiceByChar;
var answer;

answer = query('frequency', ['daily', 'weekly', 'monthly']);

console.log('you answered:', answer);