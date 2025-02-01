// Task 1 Product Price Management
// Set prices, add a new price, remove last price, & log updated prices to console
let prices = [30, 45, 60, 72, 3];
prices.push(55);
prices.pop();
console.log("Updated Price List:", prices);

// Task 2 Modifying Customer Orders
let order = [50, 73, 25 ,18, 33];
order[2] += 5;
const total = order.reduce ((sum, order) => sum + order, 0);
console.log(total);

// Task 3 Employee Peformance Tracking 

let employee = {
    name: "Kylo Ren",
    role: "Supreme Leader",
    performanceScore: 72,
    isActive: "Yes"
};
employee.performanceScore = 76;
employee.promotionEligible = false;




