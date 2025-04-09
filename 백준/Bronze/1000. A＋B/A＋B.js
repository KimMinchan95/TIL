const submit = "/dev/stdin";

const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const [a, b] = inputRow;

console.log(parseInt(a) + parseInt(b));