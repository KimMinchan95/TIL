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

const map = new Map([
  ['A+', 4.5],
  ['A0', 4.0],
  ['B+', 3.5],
  ['B0', 3.0],
  ['C+', 2.5],
  ['C0', 2.0],
  ['D+', 1.5],
  ['D0', 1.0],
  ['F', 0.0],
]);
const list = inputCol;

const { count, score } = list.reduce(
  (acc, cur) => {
    const [_, multiplyStr, grade] = cur.split(' ');
    const multiply = Number(multiplyStr);
    if (map.has(grade)) {
      const curScore = map.get(grade);
      acc.count += multiply;
      acc.score += curScore * multiply;
    }
    return acc;
  },
  {
    count: 0,
    score: 0,
  }
);

console.log(score / count);
