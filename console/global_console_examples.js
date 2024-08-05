// Example using the global console:

console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened

const name = 'Rajesh Subramanian';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Rajesh Subramanian! Danger!