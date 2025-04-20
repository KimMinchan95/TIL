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
  if (type === TYPES.COL) return fileRead.toString().trim().split('\n');

  throw new Error('파일 읽는 방식 다시 확인해라');
};

const TYPES = {
  ONE: 'ONE',
  ROW: 'ROW',
  COL: 'COL',
};

//! 풀이
const answer = () => {
  //! 파일 읽기
  const input = fileRead(TYPES.COL);

  const [[count, M], list] = input.map((cur) => cur.split(' ').map(Number));

  const arr = [];

  for (let i = 0; i < count - 2; i++) {
    for (let j = i + 1; j < count - 1; j++) {
      for (let k = j + 1; k < count; k++) {
        const sum = list[i] + list[j] + list[k];
        if (sum > M) continue;
        arr.push(sum);
      }
    }
  }

  return arr.sort((a, b) => b - a)[0];
};

//! 정답 출력
console.log(answer());
