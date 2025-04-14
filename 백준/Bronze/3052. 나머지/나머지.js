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

const size = new Set(inputCol.map((cur) => Number(cur) % 42)).size;
console.log(size);
