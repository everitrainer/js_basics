let employee1 = { "name": "Serena", "empId": 1 }

console.log(typeof employee1)

console.log(employee1["empId"])
console.log(employee1.empId)

function getCompanyName() {
    return "Everi"
}

console.log(getCompanyName())

const hobbies = ["swimming", "singin", "dancing"]
console.log(hobbies[2])

console.log(new Date())

const phoneNumber = new RegExp("^[0-9]{10}$");
console.log(phoneNumber.test(1234567999))
