const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [_, nums, k] = inputCol;
const foundedNum = Number(k);
console.log(
  nums
    .split(" ")
    .map(Number)
    .filter((num) => num === foundedNum).length
);
