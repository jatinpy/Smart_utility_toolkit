const fs = require("fs");

const fileName = "Kajal.txt";

try {
  // 1. Create File
  console.log("Creating File...");
  fs.writeFileSync(fileName, "Hello Node.js", "utf-8");
  console.log("File Created !");

  // 2. Read File
  console.log("Reading File");
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data);

  // 3. Update File (Append Content)
  console.log("File Updated !");
  fs.appendFileSync(fileName, "\nLearning FS Module", "utf-8");
  const updatedData = fs.readFileSync(fileName, "utf-8");
  console.log(updatedData);

  // 4. Delete File
  fs.unlinkSync(fileName);
  console.log("File Deleted");

} catch (error) {
  console.log("File operation failed:", error.message);
}