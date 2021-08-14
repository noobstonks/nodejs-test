console.log("hello world")

const os = require ("os");
const randomNumberDice = require("./randomNumber.js");

console.log("free memory: ",os.freemem());
console.log(randomNumberDice());

const fs = require ("fs");
const sabrina = require('./person.json');

console.log(sabrina);

// const isi = fs.readFileSync("./text.txt", "utf-8"); (sudah jalan)

// console.log(isi); (sudah jalan)

// fs.writeFileSync("./test.txt", "i love binar"); (sudah jalan)




