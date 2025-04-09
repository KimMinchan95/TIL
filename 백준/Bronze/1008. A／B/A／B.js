const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
console.log(inputRow[0] / inputRow[1]);