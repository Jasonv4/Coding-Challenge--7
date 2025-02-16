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