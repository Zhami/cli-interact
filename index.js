//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var readlineSync = require('readline-sync');

function getChar (promptText, allowedCharsAsString, flagAllowNoAnswer) {
	var answer;

	promptText += ' (' + allowedCharsAsString.split('').join('/') + ')? ';
	while (true) {
		answer = readlineSync.question(promptText);
		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else if (flagAllowNoAnswer && (answer === '')) {
			break;
		} else {
			if (answer.length && (allowedCharsAsString.indexOf(answer) >= 0)) {
				break;
			}
		}
	}
	return answer;
}

function getChoice (title, choices, opts) {
	var answer;
	var flagAllowNoAnswer;
	var flagReturnNumeric;
	var i;
	var numChoices = choices.length;
	var parts = ['Select ', title, ' ('];
	var queryText;
	var str;
	var temp;
	var value;

	if (opts) {
		if (opts.allowNoAnswer) {
			flagAllowNoAnswer = true;
		}
		if (opts.returnNumeric) {
			flagReturnNumeric = true;
		}
	}

	for (i = 1; i <= numChoices; i += 1) {	// display 1 based to user
		parts.push(i);
		parts.push('=');
		parts.push(choices[i - 1]);			// choices array is 0-based
		parts.push('; '); 
	}
	parts.pop();	// get rid of trailing ';'
	parts.push(') ?');

	queryText = parts.join('');

	while (true) {
		answer = readlineSync.question(queryText);
		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else if (flagAllowNoAnswer && (answer === '')) {
			return answer;
		} else {
			value = parseInt(answer, 10);
			if ((value >= 1) && (value <= numChoices)) {
				if (flagReturnNumeric) {
					return value;
				} else {
					return choices[value - 1];		// user input is 1-based; choices array is 0-based
				}
			}
		}
	}
}


function getChoiceByChar (title, choices, flagAllowNoAnswer) {
	var answer;
	var i;
	var numChoices = choices.length;
	var parts = ['Select ', title, ' ('];
	var queryText;
	var str;
	var value;

	for (i = 1; i <= numChoices; i += 1) {	// display 1 based to user
		parts.push(i);
		parts.push('=');
		parts.push(choices[i - 1]);			// choices array is 0-based
		parts.push('; '); 
	}
	parts.pop();	// get rid of trailing ';'
	parts.push(') ?');

	queryText = parts.join('');

	while (true) {
		answer = readlineSync.question(queryText);
		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else if (flagAllowNoAnswer && (answer === '')) {
			return answer;
		} else {
			value = parseInt(answer, 10);
			if ((value >= 1) && (value <= numChoices)) {
				return choices[value - 1];		// user input is 1-based; choices array is 0-based
			}
		}
	}
}

function getInteger (promptText) {				// convenience method
	return getNumber(promptText, true);
}

function getIPversion (flagAllowNoAnswer) {
	return getChar('IP Version', '46', flagAllowNoAnswer);
}

function getNumber (promptText, opts) {
	var answer;
	var flagIntOnly;
	var flagAllowNoAnswer;
	var value;

	// for historical compatibility
	if (opts === true) {
		flagIntOnly = true;
	} else if (opts) {
		// better be an object;
		flagIntOnly = opts.requireInteger;
		flagAllowNoAnswer = opts.allowNoAnswer
	}

	while (true) {
		answer = readlineSync.question(promptText);

		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else if (flagAllowNoAnswer && (answer === '')) {
			break;
		} else {
			if (flagIntOnly) {
				value = parseInt(answer, 10);
				if (value.toString() === answer) {
					break;
				}
			} else {
				value = parseFloat(answer);
				if (!isNaN(value) && isFinite(answer)) {
					break;
				}
			}
		}
	}
	return value;
}

function getYesNo (title, flagAllowNoAnswer) {
	var answer;
	var queryText = title + ' (y/n)? ';
	while (true) {
		answer = readlineSync.question(queryText);
		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else {
			answer = answer.toLowerCase();
			if (answer === 'y') {
				answer = true;
				break;
			} else if (answer === 'n') {
				answer = false;
				break;
			} else if (flagAllowNoAnswer && (answer === '')) {
				answer = undefined;
				break;
			}
		}
	}
	return answer;
}

function question (prompt, options) {
	return readlineSync.question(prompt, options);
}

//===========================
// exports
//===========================

exports = module.exports = {
	getChar				: getChar
	, getChoice			: getChoice
	, getChoiceByChar	: getChoiceByChar
	, getInteger		: getInteger
	, getIPversion		: getIPversion
	, getNumber			: getNumber
	, getYesNo			: getYesNo
	, question			: question
};

