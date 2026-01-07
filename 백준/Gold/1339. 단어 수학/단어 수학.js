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

  const [q, ...list] = input;
  const n = Number(q);

  const map = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < list[i].length; j++) {
      const pos = Math.pow(10, list[i].length - j - 1);
      const letter = list[i][j];
      map.set(letter, (map.get(letter) ?? 0) + pos);
    }
  }

  const arr = [];
  map.forEach((value, key) => {
    arr.push(value);
  });

  arr.sort((a, b) => b - a);

  return arr.reduce((acc, cur, i) => {
    return acc + cur * (9 - i);
  }, 0);
};

//! 정답 출력
console.log(answer());
