// Task 1 Function Declaration 
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
console.log(`Total Invoice: $${total.toFixed(2)}`);
} // Function that calculates invoice amount
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"


//Task 2 Function expression
function calculateHourlyWage(salary, hoursPerWeek) {
    const hourlyWage = (salary / (hoursPerWeek * 52)) ;
console.log(`Total Invoice: $${hourlyWage.toFixed(2)}`); 
} // Function that calcualtes hourly wage 
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"


//Task 3 Arrow Function
let calculateLoyaltyDiscount = (amount, years) => {
    let discountRate
    if (years >= 5) { discountRate = 0.15;}
    else if (years >= 3) { discountRate = 0.10;}
    else if (years < 3) { discountRate = 0.05;}
    discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`
} // Arrow function that applies a discount based on time
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"


//Task 4 Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost; if (location === "USA") { baseCost = 5 + (0.5 * weight);}
    else if (location === "Canada") {baseCost = 10 + (0.7 * weight);
        if (expedited) {baseCost +=10;}
     } 
     return `Shipping Cost: $${baseCost.toFixed(2)}`
} // Function to calculate shipping costs
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"


//Task 5 Returning Values
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`
} // Function that returns total interest 
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"


//Task 6 Higher-Order Functions
let transactions = [1000, 3000, 5000, 7000, 9000]
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction); 
} // Function that filters transactions above $1000
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)) 
// Expected output [3000, 5000, 7000, 9000]


//Task 7 Budget Tracker 
function createBudgetTracker() {
    let balance = 0; return function(expense) {
        balance += expense; 
        return `Current Balance: -$${balance}`;
    }
} // Function that returns other function 
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"


//Task 8 Recursion in Javascript
function calculateGrowth(years, revenue) {
    if (years < 10) {return calculateGrowth(years + 1 , revenue * 1.05)}
    return `Projected Revenue Growth: $${revenue.toFixed(2)}`
} // Recursive function that projects revenue growth
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
