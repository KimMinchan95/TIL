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

  const [M, N] = input.shift().split(' ').map(Number);
  const DictName = new Map(input.slice(0, M).map((cur, idx) => [cur, idx + 1]));
  const DictNumber = new Map(
    input.slice(0, M).map((cur, idx) => [idx + 1, cur])
  );

  return input
    .slice(M)
    .map((cur) => {
      const num = Number(cur);
      if (isNaN(num)) {
        return DictName.get(cur);
      }
      return DictNumber.get(num);
    })
    .join('\n');
};

//! 정답 출력
console.log(answer());
