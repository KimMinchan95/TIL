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
  const question = inputCol.slice(0, -1);

  return question
    .reduce((acc, cur) => {
      const [first, second] = cur.split(' ').map(Number);

      if (!(first % second)) {
        acc.push('multiple');
      } else if (!(second % first)) {
        acc.push('factor');
      } else {
        acc.push('neither');
      }
      return acc;
    }, [])
    .join('\n');
};

console.log(answer());
