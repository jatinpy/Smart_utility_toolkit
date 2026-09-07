// Import custom modules
const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

// Use the logger module to log a starting message
logger("Running App: Testing Custom Modules");

// Array of test numbers to verify isEven functionality
const testNumbers = [4, 7, 10, 15, 22];

// Iterate through the array using a standard for loop
for (let i = 0; i < testNumbers.length; i++) {
  const num = testNumbers[i];
  
  if (isEven(num)) {
    console.log(`${num} is an Even number`);
  } else {
    console.log(`${num} is an Odd number`);
  }
}