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
  .split(process.platform === 'linux' ? '\n' : '\r\n');

const [_, ...list] = inputCol;
console.log(
  list
    .reduce((acc, cur) => {
      acc.push(cur[0] + cur[cur.length - 1]);
      return acc;
    }, [])
    .join('\n')
);
