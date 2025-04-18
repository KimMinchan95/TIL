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

  let n = 0;
  let max = 0;
  while (max < num) {
    n++;
    max += n;
  }

  const sum = n + 1;
  const order = max - num + 1;
  return sum % 2 ? `${sum - order}/${order}` : `${order}/${sum - order}`;
};

console.log(answer());
