console.log("hello world")

const os = require ("os");
const randomNumberDice = require("./randomNumber.js");

console.log("free memory: ",os.freemem());
console.log(randomNumberDice());


