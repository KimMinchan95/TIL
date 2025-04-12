const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const result = inputCol.slice(1).map((cur, i) => {
  const [a, b] = cur.split(" ").map(Number);
  return `Case #${i + 1}: ${a} + ${b} = ${a + b}`;
});

console.log(result.join("\n"));
