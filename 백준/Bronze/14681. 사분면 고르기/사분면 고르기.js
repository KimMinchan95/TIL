const submit = "/dev/stdin";
const inputCol = require("fs").readFileSync(0).toString().trim().split("\n");
const [A, B] = inputCol.map(Number);
if (A > 0) {
  if (B > 0) console.log(1);
  if (B < 0) console.log(4);
}
if (A < 0) {
  if (B > 0) console.log(2);
  if (B < 0) console.log(3);
}
