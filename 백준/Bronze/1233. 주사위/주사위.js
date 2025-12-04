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

  const [S1, S2, S3] = input.split(' ').map(Number);

  const obj = {};

  for (let i = 1; i <= S1; i++) {
    for (let j = 1; j <= S2; j++) {
      for (let k = 1; k <= S3; k++) {
        const sum = i + j + k;
        if (obj[sum]) {
          obj[sum] += 1;
        } else {
          obj[sum] = 1;
        }
      }
    }
  }

  return Object.entries(obj).sort(([_, a], [__, b]) => b - a)[0][0];
};

//! 정답 출력
console.log(answer());
