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
  .split(process.platform === 'linux' ? '\n' : '\r\n');

console.log(
  Array.from({ length: 26 })
    .map((_, i) => i + 97)
    .map((cur) => input.indexOf(String.fromCharCode(cur)))
    .join(' ')
);
