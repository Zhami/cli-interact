//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').getYesNo;
var answer;

answer = query('Is it true', true);

if (answer === undefined) {
	console.log('you did not answer.');
} else {
	console.log('you answered:', answer);
}

