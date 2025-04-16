const localPath = './question.txt';
const testPath = '/dev/stdin';
const isTest = process.platform === 'linux';
const filePath = isTest ? testPath : localPath;

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

const dial = Array.from({ length: 8 })
  .map((_, i) => {
    const double = [5, 7];
    const num = i * 3 + 65 + (i > 5 ? 1 : 0);
    return Array.from({ length: double.includes(i) ? 4 : 3 }).map((_, idx) =>
      String.fromCharCode(num + idx)
    );
  })
  .reduce((acc, cur, idx) => {
    cur.forEach((str) => {
      acc.set(str, idx + 3);
    });
    return acc;
  }, new Map());

console.log(
  [...input].reduce((acc, cur) => {
    return acc + dial.get(cur);
  }, 0)
);
