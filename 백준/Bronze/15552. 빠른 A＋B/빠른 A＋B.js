const inputCol = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
const result = inputCol.slice(1).map((cur) =>
  cur
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
);

console.log(result.join("\n"));
