// Task 1 Function Declaration 
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
console.log(`Total Invoice: $${total.toFixed(2)}`);
} // Function that calculates invoice amount
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"