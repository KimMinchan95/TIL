const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
console.log(inputRow.map(Number).reduce((acc, cur) => acc + cur, 0));