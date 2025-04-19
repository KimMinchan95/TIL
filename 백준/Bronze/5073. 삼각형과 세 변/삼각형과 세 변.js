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

  return input
    .slice(0, -1)
    .reduce((acc, cur) => {
      const list = cur
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);

      if (list[0] >= list[1] + list[2]) return acc.concat('Invalid');

      const set = new Set(list);

      if (set.size === 1) return acc.concat('Equilateral');
      if (set.size === 2) return acc.concat('Isosceles');
      return acc.concat('Scalene');
    }, [])
    .join('\n');
};

//! 정답 출력
console.log(answer());
