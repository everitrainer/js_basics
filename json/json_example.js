let data = '[{ "name": "RR" },{ "name": "Bentley" },{ "name": "Audi" }]';
let cars = JSON.parse(data)
console.log(cars[2].name)

let cars_json = [{ "name": "RR" }, { "name": "Bentley" }, { "name": "Audi" }]
let dataToBeSent = JSON.stringify(cars_json);
console.log(typeof cars_json)
console.log(typeof dataToBeSent)

