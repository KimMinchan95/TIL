const submit = "/dev/stdin";
const input = require("fs").readFileSync(submit).toString();
const num = Number(input);
if (!(num % 4) && (num % 100 || !(num % 400))) {
  console.log(1);
  return;
}
console.log(0);