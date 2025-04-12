const inputCol = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const result = Number(inputCol[0]);
const money = inputCol
  .slice(2)
  .map(
    (row) =>
      row
        .split(" ")
        .map(Number)
        .reduce((acc, cur) => acc * cur),
    1
  )
  .reduce((acc, cur) => acc + cur, 0);
console.log(result === money ? "Yes" : "No");
