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

const len = Math.max(...inputCol.map((cur) => cur.length));
let result = '';

for (let i = 0; i < len; i++) {
  for (let j = 0; j < inputCol.length; j++) {
    result += inputCol[j][i] ?? '';
  }
}

console.log(result);
