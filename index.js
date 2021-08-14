console.log("hello world")

const os = require ("os");
const randomNumberDice = require("./randomNumber.js");

console.log("free memory: ",os.freemem());
console.log(randomNumberDice());

const fs = require ("fs");
const isi = fs.readFileSync("./text.txt", "utf-8");

console.log(isi);

fs.writeFileSync("./test.txt", "i love binar");





