const input = require("fs").readFileSync("/dev/stdin");
const num = Number(input);
const result = Array.from({ length: num })
  .map((_, i) => i + 1)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result);