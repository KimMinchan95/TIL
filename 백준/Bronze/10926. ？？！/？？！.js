const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const [id] = inputRow;
console.log(`${id.trimEnd()}??!`);