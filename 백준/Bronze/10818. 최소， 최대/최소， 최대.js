const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [_, nums] = inputCol;
const arr = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(`${arr[0]} ${arr[arr.length - 1]}`);
