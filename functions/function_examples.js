// Function Declaration
function add(a, b) {
    return a + b;
}
console.log('Addition:', add(5, 3)); // Output: 8

// Function Expression (Anonymous)
const multiply = function (a, b) {
    return a * b;
};
console.log('Multiplication:', multiply(4, 2)); // Output: 8

// Arrow Functions
const square = (x) => x * x;
console.log('Square:', square(5)); // Output: 25

// Function Expression (Named)
const divide = function divide(a, b) {
    return a / b;
};
console.log('Division:', divide(10, 2)); // Output: 5

// Method Definition (Within an Object)
const mathOperations = {
    add: function (a, b) {
        return a + b;
    }
};
console.log('Object Method Add:', mathOperations.add(7, 8)); // Output: 15

// Function as a Constructor
function Player(name, runs) {
    this.name = name;
    this.runs = runs;
    this.describe = function () {
        return `${this.name} has scored ${this.runs} runs.`;
    };
}
const player = new Player('Virat Kohli', 5000);
console.log(player.describe()); // Output: Virat Kohli has scored 5000 runs.

// Immediately Invoked Function Expression (IIFE)
(function (runs) {
    console.log('IIFE Result:', runs * 2);
})(10); // Output: IIFE Result: 20

// Generator Function
function* countUp() {
    let count = 1;
    while (true) {
        yield count++;
    }
}
const counter = countUp();
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2

// Object Prototype Method
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.describe = function () {
    return `This ${this.make} moves at ${this.speed} km/h.`;
};
const car = new Car('Tata', 100);
console.log(car.describe()); // Output: This Tata moves at 100 km/h.
