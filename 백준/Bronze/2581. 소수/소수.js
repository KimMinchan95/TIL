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

  const [M, N] = input.map(Number);

  const arr = Array.from({ length: N - M + 1 })
    .map((_, i) => i + M)
    .filter((num) => {
      if (num === 1) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i) continue;
        return false;
      }
      return true;
    });

  return arr.length
    ? `${arr.reduce((acc, cur) => acc + cur)}\n${arr[0]}`
    : '-1';
};

//! 정답 출력
console.log(answer());
