const fs = require("fs");
const solveQuadraticEquation = require("./solveQuadraticEquation");

const nonInteractiveMode = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`Error: file ${filePath} does not exist`);
      process.exit(1);
    }

    const fileContent = fs.readFileSync(filePath, "utf8").trim();
    const coefficients = fileContent.split(" ").map(Number);

    if (coefficients.length !== 3 || coefficients.some(isNaN)) {
      console.log("Error: invalid file format");
      process.exit(1);
    }

    const [a, b, c] = coefficients;

    if (a === 0) {
      console.log(
        "Error: 'a' cannot be zero because it is not a quadratic equation anymore."
      );
      process.exit(1);
    }

    solveQuadraticEquation(a, b, c);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = nonInteractiveMode;
