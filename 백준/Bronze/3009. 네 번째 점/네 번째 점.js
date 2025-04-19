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

  const xSet = new Set();
  const ySet = new Set();

  input.forEach((row) => {
    const [a, b] = row.split(' ').map(Number);

    if (xSet.has(a)) {
      xSet.delete(a);
    } else {
      xSet.add(a);
    }

    if (ySet.has(b)) {
      ySet.delete(b);
    } else {
      ySet.add(b);
    }
  });

  return [xSet.keys().next().value, ySet.keys().next().value].join(' ');
};

//! 정답 출력
console.log(answer());
