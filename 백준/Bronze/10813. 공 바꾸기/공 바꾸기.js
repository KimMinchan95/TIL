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

const splitted = inputCol.map((v) => v.split(' ').map(Number));
const [[basketCount], ...changeList] = splitted;
const arr = Array.from({ length: basketCount }).map((_, i) => i + 1);

changeList.forEach(([a, b]) => {
  const [c, d] = [arr[a - 1], arr[b - 1]];
  arr[b - 1] = c;
  arr[a - 1] = d;
});

console.log(arr.join(' '));
