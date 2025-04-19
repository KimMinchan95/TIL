// ** 파일 읽는 방식들 ** //
const fileRead = (type) => {
  // 로컬인지에 대한 설정
  const localPath = './question.txt';
  const testPath = '/dev/stdin';
  const isTest = process.platform === 'linux';
  const filePath = isTest ? testPath : localPath;

  const fileRead = require('fs').readFileSync(filePath);
  // 한개
  if (type === TYPES.ONE) return fileRead.toString().trim();
  // 한줄
  if (type === TYPES.ROW) return fileRead.toString().split(' ');
  // Column
  if (type === TYPES.MULTI) return fileRead.toString().trim().split('\n');

  throw new Error('파일 읽는 방식 다시 확인해라');
};

const TYPES = {
  ONE: 'ONE',
  ROW: 'ROW',
  MULTI: 'MULTI',
};

const input = fileRead(TYPES.MULTI);

//! 풀이
const answer = () => {
  const list = input.slice(0, -1).map(Number);

  return list
    .reduce((lines, num) => {
      const arr = [];
      let count = 0;
      for (let i = 1; i <= Math.ceil(num / 2); i++) {
        if (num % i) continue;
        arr.push(i);
        count += i;

        if (count > num) break;
      }

      return lines.concat(
        count === num ? `${num} = ${arr.join(' + ')}` : `${num} is NOT perfect.`
      );
    }, [])
    .join('\n');
};

//! 정답 출력력
console.log(answer());
