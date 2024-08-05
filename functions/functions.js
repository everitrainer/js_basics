// 1. function declaration

function add(a, b) {
    return a + b
}

let res1 = add(5, 6)
console.log(res1)
console.log("------------")
// 2. Function Expression (Anonymous)
const sub = function (a, b) {
    return a - b;
}

let res2 = add(15, 6)
console.log(res2)
console.log("------------")

// 3. Arrow function
const multiply = (a, b) => { return a * b } // (a,b) => {return a + b} 
// const multiply = (a, b) => a * b 
let res3 = multiply(15, 6)
console.log(res3)
console.log("------------")

// 4.  Function Expression (Named)

const divide = function divide(a, b) {
    return a / b;
}
let res4 = divide(15, 5)
console.log(res4)
console.log("------------")

// 5. Method Definition
let employee1 = {
    "name": "Serena",
    "empId": 1,
    "address": "Mangaluru",
    getAddress: function () {
        console.log(employee1.address)
    },
    getName: () => {
        console.log(employee1.name)
    },
    getEmpId: function getEmpId() {
        console.log(employee1.empId)
    },
}

employee1.getAddress()
employee1.getName()
employee1.getEmpId()

console.log("------------")

// 6. Constructor function
function Employee(name, id, address) {
    this.name = name;
    this.id = id;
    this.address = address;
}



let emp2 = new Employee("Nidhi", 2, "Udupi");
emp2.getAddress = function () { return this.address }
// console.log(emp2);
console.log(emp2.getAddress());
// console.log(employee1)
console.log("------------");
// 7. IIFE
(function (firstname, lastname) {
    console.log(firstname, lastname)
    // console.log("IIFE")
}
)("Riya", "D Almeida");
console.log("------------");

// 8 Generator function

function* get() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const gen1 = get();
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)

// 9. Prototype
Employee.prototype.getAddress = function () { return this.address }

let emp3 = new Employee("Sriya", 4, "Udupi");
// emp3.getAddress = function () { return this.address }
console.log(emp3.getAddress())
let emp4 = new Employee("Nidhi", 3, "Mangaluru");
// emp4.getAddress = function () { return this.address }
console.log(emp4.getAddress()) 