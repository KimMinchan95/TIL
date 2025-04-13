const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [q, nums] = inputCol;
const [_, k] = q.split(" ").map(Number);
console.log(
  nums
    .split(" ")
    .map(Number)
    .filter((num) => num < k)
    .join(" ")
);
