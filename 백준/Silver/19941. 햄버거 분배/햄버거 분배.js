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

  const [N, K] = input.shift().split(' ').map(Number);
  const arr = input[0].split('');

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] === 'P') {
      const start = Math.max(0, i - K);
      const end = Math.min(N - 1, i + K);

      for (let j = start; j <= end; j++) {
        if (arr[j] === 'H') {
          arr[j] = 'E';
          count++;
          break;
        }
      }
    }
  }

  return count;
};

//! 정답 출력
console.log(answer());
