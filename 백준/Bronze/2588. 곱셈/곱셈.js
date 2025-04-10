const submit = "/dev/stdin";
const inputCol = require("fs").readFileSync(submit).toString().split("\n");
const [a, b] = inputCol;
console.log(Number(a) * Number(b[2]));
console.log(Number(a) * Number(b[1]));
console.log(Number(a) * Number(b[0]));
console.log(Number(a) * Number(b));