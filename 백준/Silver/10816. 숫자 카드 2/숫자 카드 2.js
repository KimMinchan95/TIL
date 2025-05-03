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

  const [N, NList, M, MList] = input;
  const map = NList.split(' ').reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.set(cur, acc.get(cur) + 1);
    } else {
      acc.set(cur, 1);
    }
    return acc;
  }, new Map());

  return MList.split(' ')
    .map((cur) => {
      if (map.has(cur)) {
        return map.get(cur);
      }
      return 0;
    })
    .join(' ');
};

//! 정답 출력
console.log(answer());
