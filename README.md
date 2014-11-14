# cli-interact

Simple helper tools for interacting synchronously with user at command line. The interface is used with `process.stdin` and `process.stdout` in order to accept user input.

## Example

```js
var	query = require('cli-interact').getYesNo;
var answer = query('Is it true');
console.log('you answered:', answer);
```

```
$ node examples/getYesNoNone.js
Is it true (y/n)? j
Is it true (y/n)? y
you answered: true
```

## Installation

```
npm install cli-interact
```

## Usage

## Queries

Presently, there are three queries:

`getChar` gets a single character from some set of allowed characters.

`getIPversion` gets a single character, either '4' or '6'.

`getYesNo` prompts for 'y' or 'n', returns true/false. Can be configured to allow no response (returns `undefined`).

And a passthorugh `question` to access the underlying `readlineSync.question` method.

## Notes
Uses the [readline-sync](https://github.com/anseki/readline-sync) module. See it for more information.

### Platforms

The your Node and OS may not support interactively reading from stdin. The stdin interfaces are different by platforms. If in those platforms, an error is thrown by readlineSync.

```js
try {
  answer = readlineSync.question('What is your favorite food? :');
} catch (e) {
  console.error(e);
  process.exit(1);
}
```

## Release History
  * 2014-11-14			v0.1.0			Initial release.

