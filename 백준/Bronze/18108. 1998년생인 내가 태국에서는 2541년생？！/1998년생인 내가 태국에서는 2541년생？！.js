const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString();
console.log(inputRow - 543);