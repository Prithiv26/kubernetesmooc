const crypto = require("crypto");

// Generate the hash only once
const hash = crypto.randomBytes(32).toString("hex");

function printHash() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${hash}`);
}

printHash();

setInterval(printHash, 5000);
