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

const numInputCol = inputCol.map((cur) => cur.split(' ').map(Number));

const { x, y, lg } = numInputCol.reduce(
  (rowAcc, curRow, x) => {
    const rowMax = Math.max(...curRow);
    if (rowAcc.lg > rowMax) {
      return rowAcc;
    }
    return {
      x: x + 1,
      y: curRow.indexOf(rowMax) + 1,
      lg: rowMax,
    };
  },
  {
    x: 0,
    y: 0,
    lg: 0,
  }
);
console.log(`${lg}
${x} ${y}`);
