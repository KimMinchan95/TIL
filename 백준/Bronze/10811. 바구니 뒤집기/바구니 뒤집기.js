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

const [[count], ...list] = inputCol.map((cur) => cur.split(' ').map(Number));
const arr = Array.from({ length: count }).map((_, i) => i + 1);

console.log(
  list
    .reduce((acc, [a, b]) => {
      return acc
        .slice(0, a - 1)
        .concat(acc.slice(a - 1, b).reverse(), acc.slice(b));
    }, arr)
    .join(' ')
);
