const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const [a, b] = inputRow.map(Number);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
