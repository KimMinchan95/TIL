const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const [A, B] = inputRow.map(Number);
if (A < B) console.log('<');
if (A > B) console.log('>');
if (A === B) console.log('==');