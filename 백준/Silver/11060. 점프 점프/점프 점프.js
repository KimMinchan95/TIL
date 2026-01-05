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

  const N = Number(input.shift());
  const arr = input[0].split(' ').map(Number);

  const dp = new Array(N).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    if (dp[i] === Infinity) continue;
    const jump = arr[i];
    for (let j = i + 1; j <= i + jump; j++) {
      dp[j] = Math.min(dp[i] + 1, dp[j]);
    }
  }

  return dp[N - 1] === Infinity ? -1 : dp[N - 1];
};

//! 정답 출력
console.log(answer());
