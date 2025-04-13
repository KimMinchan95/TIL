const test = "./question.txt";
const submit = "/dev/stdin";
const filePath = process.platform === "linux" ? submit : test;
const inputCol = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const largest = inputCol.map(Number).reduce(
  (acc, cur, i) => {
    if (cur > acc.num) {
      return {
        idx: i + 1,
        num: cur,
      };
    }
    return acc;
  },
  {
    idx: 0,
    num: 0,
  }
);
console.log(`${largest.num}
${largest.idx}`);
