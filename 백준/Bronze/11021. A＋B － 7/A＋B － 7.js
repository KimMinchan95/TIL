const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const result = inputCol.slice(1).map(
  (cur, i) =>
    `Case #${i + 1}: ${cur
      .split(" ")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0)}`
);

console.log(result.join("\n"));
