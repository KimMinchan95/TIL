const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");

const [a, b] = inputRow.map(Number);
const B = b - 45;
const A = B < 0 ? a - 1 : a;
console.log(A < 0 ? A + 24 : A, B < 0 ? B + 60 : B);