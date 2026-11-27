// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N2 - Modular Calculator
// Date: November 27, 2026

// Mathematical operations.
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return x / y;
}

function average(x, y) {
    return (x + y) / 2;
}

// Export functions for other modules.
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};