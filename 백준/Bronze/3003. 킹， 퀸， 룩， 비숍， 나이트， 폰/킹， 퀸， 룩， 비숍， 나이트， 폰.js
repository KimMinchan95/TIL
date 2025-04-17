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

const arr = [1, 1, 2, 2, 2, 8];
console.log(
  input
    .split(' ')
    .reduce((acc, cur, i) => {
      acc.push(arr[i] - cur);
      return acc;
    }, [])
    .join(' ')
);
