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
// ** 파일 읽는 방식 끝 **//

const [condition, ...list] = inputCol;
const [row, col] = condition.split(' ').map(Number);

const numList = list.map((num) => num.split(' ').map(Number));

const [first, second] = [numList.slice(0, row), numList.slice(row)];

console.log(
  first
    .reduce((acc, cur, idx) => {
      acc.push(
        cur.map((num, i) => (num + second[idx][i]).toString()).join(' ')
      );
      return acc;
    }, [])
    .join('\n')
);
