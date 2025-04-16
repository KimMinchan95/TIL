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

const [_, ...list] = inputCol;
console.log(
  list
    .map((cur) => cur.split(' '))
    .reduce((acc, cur) => {
      const [countStr, str] = cur;
      const count = Number(countStr);
      const repeatedStr = str
        .split('')
        .map((cur) => cur.repeat(count))
        .join('');
      acc.push(repeatedStr);
      return acc;
    }, [])
    .join('\n')
);
