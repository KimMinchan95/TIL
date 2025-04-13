const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const splited = inputCol.map((v) => v.split(" ").map(Number));
const [[basketCount], ...basketList] = splited;
const result = Array.from({ length: basketCount }).map(() => 0);

basketList.forEach(([from, to, basketNum]) => {
  for (let i = from - 1; i < to; i++) {
    result[i] = basketNum;
  }
});

console.log(result.join(" "));
