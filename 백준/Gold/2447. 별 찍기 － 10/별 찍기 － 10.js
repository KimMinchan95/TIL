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

  const result = [];

  const makeStar = (y, x, num) => {
    if (y % 3 === 1 && x % 3 === 1) {
      result.push(' ');
      return;
    }
    if (num === 1) {
      result.push('*');
      return;
    }

    makeStar(parseInt(y / 3), parseInt(x / 3), parseInt(num / 3));
  };

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      makeStar(y, x, n);
    }
    result.push('\n');
  }

  return result.join('');
};

//! 정답 출력
console.log(answer());
