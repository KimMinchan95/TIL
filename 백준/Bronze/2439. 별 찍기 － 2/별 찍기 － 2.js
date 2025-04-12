const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;

// ** 파일 읽는 방식들 ** //
// 한개
const input = require("fs").readFileSync(filePath).toString().trim();
// Row
const inputRow = require("fs").readFileSync(filePath).toString().split(" ");
// Column
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const result = Array.from({ length: Number(input) }).map((_, i) =>
  "*".repeat(i + 1).padStart(Number(input))
);
console.log(result.join("\n"));
