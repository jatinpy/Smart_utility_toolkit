const crypto = require("crypto");
const fs = require("fs");

const diceNumber = crypto.randomInt(1, 7);

console.log(`Dice Rolled: ${diceNumber}`);

const fileName = "Dice_History.txt";
const data = `Dice Rolled: ${diceNumber}\n`;

fs.appendFileSync(fileName, data, "utf-8");

console.log("Successfully added!");