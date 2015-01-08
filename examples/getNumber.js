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

answer = query('Case 1: You MAY give me a number: ', {
	allowNoAnswer		: true
});
if (answer !== '') {
	console.log('No answer.');
} else {
	console.log('Thank you for: ', answer);
}

console.log();
answer = query('Case 2: You MUST give me a number: ');

console.log('you answered:', answer);
console.log('the typeof of that is:', typeof answer);

console.log();
answer = query('Case 3: You MUST give me an integer: ', true);
console.log('Thank you for: ', answer);

console.log();
answer = query('Case 4: You MAY give me an answer. If you do, it MUST be an integer', {
	allowNoAnswer		: true
	, requireInteger	: true
});
if (answer !== '') {
	console.log('No answer.');
} else {
	console.log('Thank you for: ', answer);
}

