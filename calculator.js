const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (operation === "add") {
  console.log(`Result: ${num1 + num2}`);
} else if (operation === "sub") {
  console.log(`Result: ${num1 - num2}`);
} else if (operation === "mul") {
  console.log(`Result: ${num1 * num2}`);
} else if (operation === "div") {
  console.log(`Result: ${num1 / num2}`);
} else {
  console.log("Invalid operation! Use add, sub, mul, or div.");
}