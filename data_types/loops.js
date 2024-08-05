let employees = [{ "name": "Serena", "empId": 1 },
{ "name": "Sriya", "empId": 2 },
{ "name": "Nidhi", "empId": 3 },
{ "name": "Riya", "empId": 4 }]

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name)
}
console.log("-------")
let j = 0;
while (j < employees.length) {
    console.log(employees[j].name)
    j++;
}
console.log("-------")
let k = 0;
if (employees.length > 0) {
    do {
        console.log(employees[k].name)
        k++
    } while (k < employees.length);
}
console.log("-------")

for (let l = 0; l < employees.length; l++) {
    for (let item in employees[l]) {
        console.log(employees[l][item])
    }
}


console.log("-------")
for (let emp of employees) {
    console.log(emp.name)
}
const value = "addddd"
switch (value) {
    case "add":
        console.log("add called")
        break
    case "sub":
        console.log("sub called")
        break;
    default:
        console.log("no match")
}