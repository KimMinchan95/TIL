const submit = "/dev/stdin";
const input = require("fs").readFileSync(submit);
const num = Number(input);
Array.from({ length: 9 }).map((_, i) =>
  console.log(`${num} * ${i + 1} = ${num * (i + 1)}`)
);
