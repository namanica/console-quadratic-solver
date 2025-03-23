const interactiveMode = require("./modules/interactiveMode");
const nonInteractiveMode = require("./modules/nonInteractiveMode");

if (process.argv.length === 2) {
  interactiveMode();
} else if (process.argv.length === 3) {
  nonInteractiveMode(process.argv[2]);
} else {
  console.error("Use this command: node main.js [filename](optional)");
}
