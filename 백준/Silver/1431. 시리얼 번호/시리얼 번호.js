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

  const [N, ...list] = input;

  const changeToSumNum = (str) => {
    return [...str].reduce((acc, cur) => {
      const num = Number(cur);
      if (!isNaN(num)) return acc + num;
      return acc;
    }, 0);
  };

  list.sort((A, B) => {
    if (A.length !== B.length) return A.length - B.length;
    const sumA = changeToSumNum(A);
    const sumB = changeToSumNum(B);
    if (sumA !== sumB) return sumA - sumB;
    return A.localeCompare(B);
  });

  return list.join('\n');
};

//! 정답 출력
console.log(answer());
