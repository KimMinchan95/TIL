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

const arr = [25, 10, 5, 1];

console.log(
  [...list.map((cur) => Number(cur))]
    .reduce((acc, money) => {
      const curArr = [0, 0, 0, 0];

      arr.forEach((cur, idx) => {
        const rest = Math.floor(money / cur);
        money %= cur;
        curArr[idx] = rest;
      });

      acc.push(curArr.join(' '));
      return acc;
    }, [])
    .join('\n')
);
