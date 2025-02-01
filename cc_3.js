// Task 1 Product Price Management

let prices = [30, 45, 60, 72, 3]; // Set prices
prices.push(55); // Add new price
prices.pop(); // Remove last price
console.log("Updated Price List:", prices); // Log updated price to console

// Task 2 Modifying Customer Orders
let order = [50, 73, 25 ,18, 33]; // Declare array of orders
order[2] += 5;
const total = order.reduce ((sum, order) => sum + order, 0); // Increased third order quantity by 5 and summed the total number
console.log("Total Order Quantity" + total); // Log total to console

// Task 3 Employee Peformance Tracking 
let employee = { // Declare object with employee information
    name: "Kylo Ren",
    role: "Supreme Leader",
    performanceScore: 72,
    isActive: "Yes"
}; 
employee.performanceScore = 76; // Updated performance score
employee.promotionEligible = false; // Add new proprty with boolean value
console.log(employee); // Log employee to console

// Task 4 Customer Feedback Records
let feedback = [ // Feedback array
    {customerName: "Mace Windu", feedbackText: "Great", rating: 5},
    {customerName: "Darth Maul", feedbackText: "Amazing", rating: 5},
    {customerName: "Yoda", feedbackText: "Good", rating: 4}
]; 
let newcustomer = {customerName: "Grogu", feedbacktext: "Okay", rating: 3 }; // Create new customer and add to feedback array
feedback.push(newcustomer); 
console.log("Feedback:", feedback); // Log feeback to console

// Task 5 Inventory Management System
let inventory = { // Declare object with properties
    itemName: "Blue Milk",
    stockCount: 10,
    price: 9
}
function calculateTotalValue() { // Caculate total value of inventory
    return inventory.stockCount * inventory.price;
}
console.log(calculateTotalValue()) // Log total value of inventory
