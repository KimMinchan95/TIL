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

const [count, ...list] = inputCol;
const whiteBoard = Array.from({ length: 100 }).map(() =>
  Array.from({ length: 100 }).map(() => 0)
);

list.forEach((cur) => {
  const [x, y] = cur.split(' ').map(Number);

  for (let i = x; i < 10 + x; i++) {
    for (let j = y; j < 10 + y; j++) {
      whiteBoard[i][j] = 1;
    }
  }
});

console.log(
  whiteBoard.reduce((acc1, cur1) => {
    return acc1 + cur1.reduce((acc2, cur2) => acc2 + cur2, 0);
  }, 0)
);
