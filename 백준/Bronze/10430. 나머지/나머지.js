const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const [A, B, C] = inputRow.map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);