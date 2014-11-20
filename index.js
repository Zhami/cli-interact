//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var readlineSync = require('readline-sync');

function getChar (promptText, allowedCharsAsString) {
	var answer;

	promptText += ' (' + allowedCharsAsString.split('').join('/') + ')? ';
	while (true) {
		answer = readlineSync.question(promptText);
		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else {
			if (answer.length && (allowedCharsAsString.indexOf(answer) >= 0)) {
				break;
			}
		}
	}
	return answer;
}

function getInteger (promptText) {
	var answer;
	var value;

	promptText += ': ';
	while (true) {
		answer = readlineSync.question(promptText);

		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
		} else {
			value = parseInt(answer, 10);
			if (value.toString() === answer) {
				break;
			}
		}
	}
	return value;
}

function getIPversion () {
	return getChar('IP Version', '46');
}

function getNumber (promptText, flagIntOnly) {
	var answer;
	var value;

	promptText += ': ';
	while (true) {
		answer = readlineSync.question(promptText);

		if (answer === "\u0003") {
			// Ctl-C
			process.exit();
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
	var queryText = title + ' (y/n)? '
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
	, getIPversion		: getIPversion
	, getNumber			: getNumber
	, getYesNo			: getYesNo
	, question			: question
};

