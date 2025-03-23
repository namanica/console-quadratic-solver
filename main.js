const interactiveMode = require("./interactiveMode");
const nonInteractiveMode = require("./nonInteractiveMode");

if (process.argv.length === 2) {
  interactiveMode();
} else if (process.argv.length === 3) {
  nonInteractiveMode(process.argv[2]);
} else {
  console.error("Use this command: node main.js [filename](optional)");
}
