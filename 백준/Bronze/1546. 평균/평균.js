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

const [_, list] = inputCol;
const arr = list
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(
  (arr.reduce((acc, cur) => acc + cur, 0) / arr.length / arr[0]) * 100
);
