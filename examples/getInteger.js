//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').getNumber;
var answer;

answer = query('Give me an int', true);		// restrict to integer

console.log('you answered:', answer);
console.log('the typeof of that is:', typeof answer)