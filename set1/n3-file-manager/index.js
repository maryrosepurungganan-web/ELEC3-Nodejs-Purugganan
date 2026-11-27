// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N3 - File Manager
// Date: November 27, 2026

const fs = require("node:fs");
const path = require("node:path");

// Set the storage directory.
const directory = path.join(__dirname, "files");
fs.mkdirSync(directory, { recursive: true });

// Receive command-line arguments.
const [command, filename, ...words] = process.argv.slice(2);
const text = words.join(" ");

console.log("MARY ROSE A. PURUGGANAN");
console.log("N3 - File Manager");

try {
    if (!filename ||
        path.basename(filename) !== filename ||
        path.extname(filename).toLowerCase() !== ".txt") {
        throw new Error("Invalid text filename.");
    }

    const location = path.join(directory, filename);

    if (command === "create") {
        fs.writeFileSync(location, text, {
            encoding: "utf8",
            flag: "wx"
        });

        console.log("File created: " + filename);
    } else if (command === "read") {
        console.log(fs.readFileSync(location, "utf8"));
    } else {
        console.log("Unknown command.");
    }
} catch (error) {
    console.log("Error: " + error.message);
}