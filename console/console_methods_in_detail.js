// Basic Logging
console.log('This is a simple log message.');

// String Formatting with Placeholders
console.log('Hello %s, welcome to %s!', 'Amit', 'Mumbai');
// Output: Hello Amit, welcome to Mumbai!

// Number Formatting
console.log('The answer is %d', 42);
// Output: The answer is 42

// JSON Formatting
const obj = { name: 'Priya', age: 30 };
console.log('User info: %j', obj);
// Output: User info: {"name":"Priya","age":30}

// Object Inspection
const user = { name: 'Ravi', age: 35, location: 'Delhi' };
console.log('User object:', user);
// Output: User object: { name: 'Ravi', age: 35, location: 'Delhi' }

// Array Logging
const array = [1, 2, 3, 4, 5];
console.log('Array elements:', array);
// Output: Array elements: [ 1, 2, 3, 4, 5 ]

// Multiple Arguments
console.log('Multiple arguments:', 'Sita', 28, { location: 'Chennai' });
// Output: Multiple arguments: Sita 28 { location: 'Chennai' }

// String Interpolation with Template Literals
const name = 'Rahul';
const place = 'Bangalore';
console.log(`Hello ${name}, welcome to ${place}!`);
// Output: Hello Rahul, welcome to Bangalore!

// Styling Output (in supported terminals, e.g., using chalk)
// const chalk = require('chalk'); // TODO install chalk and use
// console.log(chalk.blue('Hello world!'));
// Output: (Hello world! in blue text, if the terminal supports colors)

// Logging Errors
const error = new Error('Something went wrong!');
console.log('Error:', error);
// Output: Error: Error: Something went wrong!

// Logging Warnings
console.warn('This is a warning message.');
// Output: This is a warning message. (often styled in yellow in some terminals)

// Logging Information
console.info('This is an informational message.');
// Output: This is an informational message. (often styled in blue in some terminals)

// Logging Debug Messages
console.debug('This is a debug message.');
// Output: This is a debug message. (behavior may vary based on environment)

// Conditional Logging
const debug = true;
if (debug) {
    console.log('Debug mode is enabled.');
}
// Output: Debug mode is enabled.

// Grouping Logs
console.group('User Details');
console.log('Name: Neha');
console.log('Age: 32');
console.groupEnd();
// Output:
// User Details
//   Name: Neha
//   Age: 32
// console.clear();
// Table Output
const users = [
    { name: 'Vikas', age: 29 },
    { name: 'Meera', age: 27 }
];
console.table(users);
// Output: (Formatted table of users array)

// Assert: Logs a message if the assertion is false
let userAge = 22;
console.assert(userAge >= 18, 'User must be at least 18 years old');
// If userAge is less than 18, it logs: "User must be at least 18 years old"


console.time('PerformanceTest');
// Simulate some code execution
for (let i = 0; i < 500000; i++) {
    // Some computational task
}
console.timeLog('PerformanceTest');
// Logs the elapsed time up to this point

// Simulate some code execution
for (let i = 0; i < 1000000; i++) {
    // Some computational task
}
console.timeEnd('PerformanceTest');
// Logs the total elapsed time for 'PerformanceTest'
