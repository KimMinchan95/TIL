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

  const [question, ...board] = input;
  const [a, b] = question.split(' ').map(Number);

  const checkList = Array.from({ length: a - 7 }).reduce((acc, _, y) => {
    return acc.concat(Array.from({ length: b - 7 }).map((_, x) => [y, x]));
  }, []);

  return checkList
    .reduce((acc, [y, x]) => {
      const startColor = board[y][x];

      let sCount = 0;
      let dCount = 0;

      for (let i = y; i < 8 + y; i++) {
        for (let j = x; j < 8 + x; j++) {
          const color = (i - y + j) % 2;
          if (color) {
            if (board[i][j] === startColor) sCount++;
            if (board[i][j] !== startColor) dCount++;
            continue;
          }
          if (board[i][j] === startColor) dCount++;
          if (board[i][j] !== startColor) sCount++;
        }
      }
      acc.push(sCount, dCount);

      return acc;
    }, [])
    .sort((a, b) => a - b)[0];
};

//! 정답 출력
console.log(answer());
