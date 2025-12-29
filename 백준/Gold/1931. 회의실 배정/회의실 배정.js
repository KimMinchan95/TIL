const TYPES = {
  SINGLE: 'SINGLE',
  ROW: 'ROW',
  COL: 'COL',
};

// ** 파일 읽는 방식들 ** //
const fileRead = (type) => {
  // 로컬인지에 대한 설정
  const localPath = './question.txt';
  const testPath = '/dev/stdin';
  const isTest = process.platform === 'linux';
  const filePath = isTest ? testPath : localPath;

  const fileRead = require('fs').readFileSync(filePath);
  // 한개
  if (type === TYPES.SINGLE) return fileRead.toString().trim();
  // 한줄
  if (type === TYPES.ROW) return fileRead.toString().split(' ');
  // Column
  if (type === TYPES.COL) return fileRead.toString().trim().split('\n');

  throw new Error('파일 읽는 방식 다시 확인해라');
};

//! 풀이
const answer = () => {
  //! 파일 읽기
  const input = fileRead(TYPES.COL);

  input.shift();

  const list = input.map((cur) => cur.split(' ').map(Number));

  list.sort((a, b) => {
    const [a1, a2] = a;
    const [b1, b2] = b;

    if (a2 === b2) return a1 - b1;
    return a2 - b2;
  });

  let result = 0;
  let lastEnd = 0;

  list.forEach((cur) => {
    if (cur[0] >= lastEnd) {
      result++;
      lastEnd = cur[1];
    }
  });

  return result;
};

//! 정답 출력
console.log(answer());
