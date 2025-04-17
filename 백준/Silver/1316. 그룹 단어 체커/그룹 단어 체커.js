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
console.log(
  list.reduce((count, word) => {
    const isGroup = [...word].reduce(
      (acc, cur, i) => {
        const before = word[i - 1];
        const notGroup = acc.map.has(cur) && before !== cur;
        if (notGroup)
          return {
            map: acc.map,
            group: 0,
          };
        if (!acc.map.has(cur) || !i) {
          acc.map.set(cur, '');
        }
        return acc;
      },
      { map: new Map(), group: 1 }
    ).group;
    return count + isGroup;
  }, 0)
);
