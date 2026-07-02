const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "data/menu.json");
let raw = fs.readFileSync(file, "utf-8");
// Remove BOM
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
// Validate JSON
const parsed = JSON.parse(raw);
// Write back cleanly
fs.writeFileSync(file, JSON.stringify(parsed, null, 2), { encoding: "utf8", flag: "w" });
console.log("menu.json fixed. Categories:", Object.keys(parsed).join(", "));
