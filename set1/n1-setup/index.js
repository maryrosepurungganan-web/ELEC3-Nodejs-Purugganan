// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Activity: N1 - Project Setup and Package Management
// Date: November 27, 2026

const dayjs = require("dayjs");

// Store student information.
const studentName = "MARY ROSE A. PURUGGANAN";
const section = "IV-BSIT C";
const currentDate = dayjs();

console.log("====================================");
console.log("     MY NODE.JS LEARNING PROJECT");
console.log("====================================");
console.log("Student: " + studentName);
console.log("Section: " + section);
console.log("Course: ELEC 3 - Node.js");
console.log("Activity: N1");
console.log("Date: " + currentDate.format("MMMM DD, YYYY"));
console.log("Time: " + currentDate.format("hh:mm:ss A"));
console.log("Node.js setup completed successfully!");
console.log("====================================");