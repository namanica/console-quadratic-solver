const readline = require("readline");
const solveQuadraticEquation = require("./solveQuadraticEquation");

const isValidNumber = (num) => !isNaN(num) && isFinite(num);

const askQuestion = (rl, question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const getNumberInput = async (rl, prompt, isCoefficientA = false) => {
  while (true) {
    const input = await askQuestion(rl, prompt);
    const number = parseFloat(input);

    if (isCoefficientA && number === 0) {
      console.log(
        "Error: 'a' cannot be zero because it is not a quadratic equation anymore."
      );
      continue;
    }

    if (isValidNumber(number)) {
      return number;
    } else {
      console.log(
        `Error: Expected a valid real number, got "${input}" instead.`
      );
    }
  }
};

const interactiveMode = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const a = await getNumberInput(rl, "a = ", true);
    const b = await getNumberInput(rl, "b = ");
    const c = await getNumberInput(rl, "c = ");

    solveQuadraticEquation(a, b, c);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
};

module.exports = interactiveMode;
