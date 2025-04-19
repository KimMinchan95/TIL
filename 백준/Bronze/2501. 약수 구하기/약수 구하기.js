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
  let result = 0;
  let count = 0;
  const [N, K] = input.split(' ').map(Number);

  for (let i = 1; i <= N; i++) {
    if (N % i) continue;
    count++;
    if (count === K) {
      result = i;
      break;
    }
  }

  return result;
};

console.log(answer());
