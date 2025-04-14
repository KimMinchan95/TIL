const test = './question.txt';
const submit = '/dev/stdin';
const filePath = process.platform === 'linux' ? submit : test;

// ** 파일 읽는 방식들 ** //
// 한개
const input = require('fs').readFileSync(filePath).toString().trim();
// Row
const inputRow = require('fs').readFileSync(filePath).toString().split(' ');
// Column
const inputCol = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = inputCol.map(Number).sort((a, b) => a - b);

const all = Array.from({ length: 30 }).map((_, i) => i + 1);

console.log(
  all
    .reduce((acc, cur) => {
      if (!arr.some((num) => num === cur)) acc.push(cur);
      return acc;
    }, [])
    .join('\n')
);
