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

  input.shift();

  const tri = input.reduce((acc, cur) => {
    acc.push(cur.split(' ').map(Number));
    return acc;
  }, []);

  for (let i = tri.length - 1; i >= 1; i--) {
    const curLine = tri[i];
    for (let j = 0; j < curLine.length - 1; j++) {
      const max = Math.max(curLine[j], curLine[j + 1]);
      tri[i - 1][j] += max;
    }
  }

  return tri[0][0];
};

//! 정답 출력
console.log(answer());
