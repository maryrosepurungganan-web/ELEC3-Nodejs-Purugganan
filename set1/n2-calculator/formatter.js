// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N2 - Modular Calculator
// Date: November 27, 2026

// Format the calculation results.
function formatResult(operation, x, y, answer) {
    switch (operation) {
        case "add":
            return `${x} + ${y} = ${answer}`;

        case "subtract":
            return `${x} - ${y} = ${answer}`;

        case "multiply":
            return `${x} * ${y} = ${answer}`;

        case "divide":
            return `${x} / ${y} = ${answer}`;

        case "average":
            return `Average of ${x} and ${y} = ${answer}`;
    }
}

module.exports = { formatResult };