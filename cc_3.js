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

let employee = {
    name: "Kylo Ren",
    role: "Supreme Leader",
    performanceScore: 72,
    isActive: "Yes"
}; 

// Declare object with employee information
employee.performanceScore = 76; // Updated performance score
employee.promotionEligible = false; // Add new proprty with boolean value
console.log(employee); // Log employee to console

// Task 4 Customer Feedback Records

let feedback = [ // Feedback array
    {customerName: "Mace Windu", feedbackText: "Great", rating: 5},
    {customerName: "Darth Maul", feedbackText: "Amazing", rating: 5},
    {customerName: "Yoda", feedbackText: "Good", rating: 4}
]; 

// Create new customer and add to feedback array
let newcustomer = {customerName: "Grogu", feedbacktext: "Okay", rating: 3 };
feedback.push(newcustomer); 

// Log feeback to console
console.log("Feedback:", feedback);

// Task 5 Inventory Management System

let inventory = {
    itemName: "Blue Milk",
    stockCount: 10,
    price: 9
}

function calculateTotalValue() {
    return inventory.stockCount * inventory.price;
}
console.log(calculateTotalValue())
