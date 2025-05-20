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
  const input = fileRead(TYPES.SINGLE);

  const n = Number(input);

  let count = 0;
  const result = [];

  const moveTower = (n, from, other, to) => {
    if (!n) return;

    moveTower(n - 1, from, to, other);
    result.push([from, to]);
    count += 1;

    moveTower(n - 1, other, from, to);
  };

  moveTower(n, 1, 2, 3);
  return [count].concat(result.map((cur) => cur.join(' '))).join('\n');
};

//! 정답 출력
console.log(answer());
