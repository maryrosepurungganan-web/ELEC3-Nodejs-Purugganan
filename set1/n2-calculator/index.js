// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N2 - Modular Calculator
// Date: November 27, 2026

const calculator = require("./operations");
const { formatResult } = require("./formatter");
const os = require("node:os");

// Receive command-line arguments.
const args = process.argv.slice(2);
const operation = args[0];
const firstNumber = Number(args[1]);
const secondNumber = Number(args[2]);

console.log("====================================");
console.log("         MODULAR CALCULATOR");
console.log("====================================");
console.log("Name: MARY ROSE A. PURUGGANAN");
console.log("Section: IV-BSIT C");
console.log("Activity: N2");
console.log("Platform: " + os.platform());
console.log("------------------------------------");

// Validate the operation.
if (!Object.hasOwn(calculator, operation)) {
    console.log("Error: Unknown operation.");
}

// Validate the numbers.
else if (
    args.length !== 3 ||
    args[1].trim() === "" ||
    args[2].trim() === "" ||
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber)
) {
    console.log("Error: Enter two valid numbers.");
}

// Calculate and display the result.
else {
    try {
        const answer = calculator[operation](
            firstNumber,
            secondNumber
        );

        console.log(
            formatResult(
                operation,
                firstNumber,
                secondNumber,
                answer
            )
        );
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

console.log("====================================");