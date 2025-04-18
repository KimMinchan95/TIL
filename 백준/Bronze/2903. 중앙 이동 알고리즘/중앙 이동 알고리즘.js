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

const num = Number(input);

const answerArr = [2];
for (let i = 1; i <= num; i++) {
  answerArr.push(answerArr[i - 1] * 2 - 1);
}
console.log(answerArr[answerArr.length - 1] ** 2);
