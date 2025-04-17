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

const num = Number(input);
const totalLength = num * 2 - 1;
console.log(
  Array.from({ length: totalLength })
    .reduce((acc, _, i) => {
      const cur = Math.abs(i + 1 - num);
      const starCount = totalLength - cur * 2;
      acc.push(' '.repeat(cur) + '*'.repeat(starCount));
      return acc;
    }, [])
    .join('\n')
);
