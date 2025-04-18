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

// !풀이
const answer = () => {
  const num = Number(input);

  let count = 1;
  let last = 1;
  while (last < num) {
    last = last + count * 6;
    count++;
  }

  return count;
};

console.log(answer());
