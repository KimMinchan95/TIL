const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Math.ceil(Number(input) / 4);
console.log("long ".repeat(num) + "int");