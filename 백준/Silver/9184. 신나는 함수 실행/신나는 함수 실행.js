const { getActiveResourcesInfo } = require('process');

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

  input.pop();

  const memo = {};
  for (let i = 0; i <= 20; i++) {
    memo[i] = Array.from({ length: 21 }, () => Array(21).fill(null));
  }

  const w = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
    if (memo[a][b][c]) return memo[a][b][c];
    if (a < b && b < c)
      memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    memo[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);

    return memo[a][b][c];
  };

  return input
    .reduce((acc, cur) => {
      const [a, b, c] = cur.split(' ');
      return acc.concat([`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`]);
    }, [])
    .join('\n');
};

//! 정답 출력
console.log(answer());
