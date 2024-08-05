// Create unique symbols
const id = Symbol('id');
const name = Symbol('name');

// Create an object using symbols as property keys
let user = {
    [id]: 1,
    [name]: 'Amit'
};

// Accessing symbol properties
console.log(user[id]); // Output: 1
console.log(user[name]); // Output: Amit

// Symbol properties are not enumerable in for...in loops
for (let key in user) {
    console.log(key); // Output: (nothing, as symbols are not enumerable)
}

// Use Object.getOwnPropertySymbols to get symbol properties
console.log(Object.getOwnPropertySymbols(user));
// Output: [ Symbol(id), Symbol(name) ]

console.log(user[Object.getOwnPropertySymbols(user)[0]]);
// Output: 1 (accessing using the symbol key)
