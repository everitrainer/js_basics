// 1. for Loop
// Calculate the total GDP for 5 years with a growth rate of 10% annually
let initialGDP = 1000000; // Initial GDP in crores
let growthRate = 0.10; // 10% growth rate

for (let year = 1; year <= 5; year++) {
    initialGDP += initialGDP * growthRate;
    console.log(`GDP in Year ${year}: ₹${initialGDP.toFixed(2)} crores`);
}
// Output:
// GDP in Year 1: ₹1100000.00 crores
// GDP in Year 2: ₹1210000.00 crores
// GDP in Year 3: ₹1331000.00 crores
// GDP in Year 4: ₹1464100.00 crores
// GDP in Year 5: ₹1610510.00 crores

// 2. while Loop

// Calculate inflation until the rate reaches 5%
let inflationRate = 2; // Initial inflation rate
let targetRate = 5;

while (inflationRate < targetRate) {
    inflationRate += 0.5; // Increase inflation by 0.5% each year
    console.log(`Inflation Rate: ${inflationRate}%`);
}
// Output:
// Inflation Rate: 2.5%
// Inflation Rate: 3%
// Inflation Rate: 3.5%
// Inflation Rate: 4%
// Inflation Rate: 4.5%
// Inflation Rate: 5%

// 3. do...while Loop

// Calculate the cumulative tax amount until it exceeds ₹5000
let taxAmount = 0;
let annualTax = 1000; // Annual tax increment

do {
    taxAmount += annualTax;
    console.log(`Cumulative Tax Amount: ₹${taxAmount}`);
} while (taxAmount <= 5000);
// Output:
// Cumulative Tax Amount: ₹1000
// Cumulative Tax Amount: ₹2000
// Cumulative Tax Amount: ₹3000
// Cumulative Tax Amount: ₹4000
// Cumulative Tax Amount: ₹5000
// Cumulative Tax Amount: ₹6000

// 4. for...in Loop

// Object representing India's top 3 sectors by GDP contribution
let sectors = {
    'Agriculture': 17,
    'Industry': 29,
    'Services': 54
};

for (let sector in sectors) {
    console.log(`${sector}: ${sectors[sector]}% of GDP`);
}
// Output:
// Agriculture: 17% of GDP
// Industry: 29% of GDP
// Services: 54% of GDP


// 5. for...of Loop

// Array of major Indian economic reforms
let reforms = ['Liberalization', 'Privatization', 'Globalization'];

for (let reform of reforms) {
    console.log(`Economic Reform: ${reform}`);
}
// Output:
// Economic Reform: Liberalization
// Economic Reform: Privatization
// Economic Reform: Globalization
