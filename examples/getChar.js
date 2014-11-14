//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	query = require('../index.js').getChar;
var answer;

answer = query('Tell me one of', 'abcdef');

console.log('you answered:', answer);