// Arithmetic Operators
// Description: Perform mathematical operations.
console.log("Arithmetic Operators")
// Addition
let salaryAmit = 50000;
let salaryPriya = 60000;
let totalSalary = salaryAmit + salaryPriya;
console.log('Total Salary:', totalSalary); // Output: Total Salary: 110000

// Subtraction
let remainingBudget = 100000 - 30000;
console.log('Remaining Budget:', remainingBudget); // Output: Remaining Budget: 70000

// Multiplication
let pricePerTicket = 200;
let numberOfTickets = 5;
let totalCost = pricePerTicket * numberOfTickets;
console.log('Total Cost:', totalCost); // Output: Total Cost: 1000

// Division
let totalDistance = 600;
let numberOfDays = 3;
let distancePerDay = totalDistance / numberOfDays;
console.log('Distance Per Day:', distancePerDay); // Output: Distance Per Day: 200

// Modulus
let totalItems = 17;
let itemsPerBox = 5;
let remainingItems = totalItems % itemsPerBox;
console.log('Remaining Items:', remainingItems); // Output: Remaining Items: 2
console.log()

// Assignment Operators
// Description: Assign values to variables.
console.log("Assignment Operators")
// Simple Assignment
let city = 'Delhi';

// Addition Assignment
let population = 20000000;
population += 500000; // population = population + 500000
console.log('Updated Population:', population); // Output: Updated Population: 20500000

// Subtraction Assignment
let budget = 150000;
budget -= 50000; // budget = budget - 50000
console.log('Remaining Budget:', budget); // Output: Remaining Budget: 100000

// Multiplication Assignment
let price = 1000;
price *= 2; // price = price * 2
console.log('Doubled Price:', price); // Output: Doubled Price: 2000

// Division Assignment
let totalMarks = 400;
totalMarks /= 4; // totalMarks = totalMarks / 4
console.log('Average Marks:', totalMarks); // Output: Average Marks: 100
console.log(

)
// Comparison Operators
// Description: Compare two values and return true or false.
console.log("Comparison Operators")
// Equal to
let age = 30;
console.log('Is age 30?', age === 30); // Output: Is age 30? true

// Not equal to
let studentName = 'Amit';
console.log('Is student name not Priya?', studentName !== 'Priya'); // Output: Is student name not Priya? true

// Greater than
let maxTemperature = 35;
console.log('Is temperature greater than 30?', maxTemperature > 30); // Output: Is temperature greater than 30? true

// Less than or equal to
let minTemperature = 20;
console.log('Is temperature less than or equal to 20?', minTemperature <= 20); // Output: Is temperature less than or equal to 20? true

console.log()

// Logical Operators
// Description: Combine multiple boolean expressions.

console.log("Logical Operators")
// AND (&&)
let hasVoterID = true;
let isIndianCitizen = true;
console.log('Can vote?', hasVoterID && isIndianCitizen); // Output: Can vote? true

// OR (||)
let hasPassport = false;
let hasAadhaar = true;
console.log('Has identity proof?', hasPassport || hasAadhaar); // Output: Has identity proof? true

// NOT (!)
let isFestivalDay = false;
console.log('Is not a festival day?', !isFestivalDay); // Output: Is not a festival day? true
console.log()

// Bitwise Operators
// Description: Perform bit - level operations.

console.log("Bitwise Operators")

// AND (&)
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary
console.log('Bitwise AND:', a & b); // Output: Bitwise AND: 1 (0001 in binary)

// OR (|)
let c = 6;  // 0110 in binary
let d = 4;  // 0100 in binary
console.log('Bitwise OR:', c | d); // Output: Bitwise OR: 6 (0110 in binary)

// XOR (^)
let e = 9;  // 1001 in binary
let f = 5;  // 0101 in binary
console.log('Bitwise XOR:', e ^ f); // Output: Bitwise XOR: 12 (1100 in binary)

// NOT (~)
let g = 2;  // 0010 in binary
console.log('Bitwise NOT:', ~g); // Output: Bitwise NOT: -3 (1111...1101 in binary, depends on the system)

console.log()

// Conditional(Ternary) Operator
// Description: Shorthand for if-else statements.

console.log("Conditional(Ternary) Operator")

let age2 = 16;
let eligibility = age2 >= 18 ? 'Eligible to vote' : 'Not eligible to vote';
console.log(eligibility); // Output: Not eligible to vote

let day = 'Sunday';
let isWeekend = (day === 'Saturday' || day === 'Sunday') ? 'It\'s a weekend!' : 'It\'s a weekday.';
console.log(isWeekend); // Output: It's a weekend!

console.log()

// Type Operators
// Description: Check or convert data types.

console.log("Type Operators")

// typeof
let name = 'Ravi';
console.log('Type of name:', typeof name); // Output: Type of name: string

// instanceof
class Person { }
let ravi = new Person();
console.log('Is ravi an instance of Person?', ravi instanceof Person); // Output: Is ravi an instance of Person? true

// Array.isArray
let cities = ['Delhi', 'Mumbai'];
console.log('Is cities an array?', Array.isArray(cities)); // Output: Is cities an array? true

console.log()

// String Operators
// Description: Perform operations on strings.
console.log("String Operators")

// Concatenation
let firstName = 'Amit';
let lastName = 'Kumar';
let fullName = firstName + ' ' + lastName;
console.log('Full Name:', fullName); // Output: Full Name: Amit Kumar

// Template Literals
let city2 = 'Mumbai';
let message = `Welcome to ${city2}!`;
console.log(message); // Output: Welcome to Mumbai!

// String Length
let greeting = 'Namaste';
console.log('Length of greeting:', greeting.length); // Output: Length of greeting: 7


