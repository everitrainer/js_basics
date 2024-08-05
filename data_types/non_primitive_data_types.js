// Creating an object with Indian values
let person = {
    name: 'Ravi',
    age: 28,
    city: 'Bangalore'
};

console.log(person.name); // Output: Ravi
console.log(person.age);  // Output: 28
console.log(person.city); // Output: Bangalore

// Function that greets a user
function greet(name) {
    return `Hello, ${name}! Welcome to India.`;
}

console.log(greet('Priya')); // Output: Hello, Priya! Welcome to India.

// Creating an array of Indian cities
let cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'];

console.log(cities[0]); // Output: Delhi
console.log(cities[2]); // Output: Kolkata

// Creating a Date object for Republic Day in India
let republicDay = new Date('2024-01-26');

console.log(republicDay.toDateString()); // Output: Fri Jan 26 2024

// Regular expression to match Indian phone numbers (simple example)
let phoneNumberPattern = /^[6-9]\d{9}$/;

// Test the pattern
let phoneNumber = '9876543210';
console.log(phoneNumberPattern.test(phoneNumber)); // Output: true


// More examples on Date

let currentDate = new Date();
console.log(currentDate); // Output: Current date and time

let independenceDay = new Date('1947-08-15');
console.log(independenceDay.toDateString()); // Output: Fri Aug 15 1947

let myBirthday = new Date(1990, 5, 15); // June 15, 1990 (Months are 0-indexed)
let options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log(myBirthday.toLocaleDateString('en-IN', options)); // Output: 15 June 1990

let today = new Date();
let futureDate = new Date(today);
futureDate.setDate(today.getDate() + 30); // 30 days from today
console.log(futureDate.toDateString()); // Output: Date 30 days from today

let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');
let timeDiff = endDate - startDate;
let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(`Days difference: ${daysDiff}`); // Output: Days difference: 365


// Match Indian Postal Codes:
let postalCodePattern = /^[1-9][0-9]{5}$/;
let postalCode = '110001';
console.log(postalCodePattern.test(postalCode)); // Output: true

// Validate Indian PAN Number:
let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
let panNumber = 'ABCDE1234F';
console.log(panPattern.test(panNumber)); // Output: true

// Extract Indian Mobile Numbers:
let text = 'Contact us at 9876543210 or 9123456789.';
let phonePattern = /\b[6-9]\d{9}\b/g;
let matches = text.match(phonePattern);
console.log(matches); // Output: [ '9876543210', '9123456789' ]

// Match Indian Dates(dd - mm - yyyy):
let datePattern = /^\d{2}-\d{2}-\d{4}$/;
let date = '15-08-1947';
console.log(datePattern.test(date)); // Output: true

// Replace Indian Area Codes:
let phoneNumbers = 'Delhi: 011-12345678, Mumbai: 022-87654321';
let newPhoneNumbers = phoneNumbers.replace(/(\d{3}-\d{8})/g, '********');
console.log(newPhoneNumbers); // Output: Delhi: ********, Mumbai: ********
