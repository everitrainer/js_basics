const neoEmp2 = { name: "Aravind", id: 2 };

// console.assert(neoEmp2.salary, "Salary not defined"); // Assertion failed: Salary not defined

// console.table(neoEmp2);

const emp5 = { name2: "Bhagat", id2: 6 }
let id2, name2;


({ id2, name2 } = emp5)

// console.log(id2, name2)

setTimeout(() => {
    console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
    console.log("2", "can be as bad as one");
}, 10);

// 2 Job Queue ~ Microtask Queue
Promise.resolve("hi").then((data) => console.log("2", data));

// 3
console.log("3", "is a crowd");

