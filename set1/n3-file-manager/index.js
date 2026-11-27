
// Full Name: MARY ROSE A. PURUGGANAN
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N3 - File Manager with fs and path
// Date: November 27, 2026

const fs = require("node:fs");
const path = require("node:path");

// Set the directory for storing files.
const directory = path.join(__dirname, "files");

// Retrieve command-line arguments.
const [command, filename, ...words] = process.argv.slice(2);
const text = words.join(" ");

console.log("====================================");
console.log("          TEXT FILE MANAGER");
console.log("====================================");
console.log("Name: MARY ROSE A. PURUGGANAN");
console.log("Section: IV-BSIT C");
console.log("Activity: N3");
console.log("------------------------------------");

// Display all files and their information.
function listFiles() {
    const entries = fs.readdirSync(directory, {
        withFileTypes: true
    });

    const files = entries.filter(entry => entry.isFile());

    console.log("Total files: " + files.length);

    for (const file of files) {
        const location = path.join(directory, file.name);

        console.log("------------------------------------");
        console.log("Full Path: " + location);
        console.log("File Name: " + path.basename(location));
        console.log("Extension: " + path.extname(location));
        console.log("Contents:");
        console.log(fs.readFileSync(location, "utf8"));
    }
}

// Execute the selected file operation.
function manageFile() {
    const allowed = [
        "create",
        "read",
        "update",
        "delete",
        "list"
    ];

    if (!allowed.includes(command)) {
        console.log("Error: Unknown command.");
        return;
    }

    if (command === "list") {
        listFiles();
        return;
    }

    // Validate the filename.
    if (
        !filename ||
        path.basename(filename) !== filename ||
        path.extname(filename).toLowerCase() !== ".txt"
    ) {
        console.log("Error: Enter a valid .txt filename.");
        return;
    }

    const location = path.join(directory, filename);

    switch (command) {
        case "create":
            fs.writeFileSync(location, text, {
                encoding: "utf8",
                flag: "wx"
            });

            console.log("Created successfully: " + filename);
            break;

        case "read":
            console.log("Reading: " + filename);
            console.log(fs.readFileSync(location, "utf8"));
            break;

        case "update":
            if (!fs.existsSync(location)) {
                console.log("Error: File not found.");
                return;
            }

            fs.appendFileSync(location, "\n" + text, "utf8");
            console.log("Updated successfully: " + filename);
            break;

        case "delete":
            fs.unlinkSync(location);
            console.log("Deleted successfully: " + filename);
            break;
    }
}

// Handle possible file operation errors.
try {
    fs.mkdirSync(directory, { recursive: true });
    manageFile();
} catch (error) {
    if (error.code === "ENOENT") {
        console.log("Error: File not found.");
    } else if (error.code === "EEXIST") {
        console.log("Error: File already exists.");
    } else {
        console.log("Error: " + error.message);
    }
}

console.log("====================================");
