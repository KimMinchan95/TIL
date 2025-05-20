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

  const recursion = (s, l, r, count) => {
    if (l >= r) return [1, count];
    else if (s[l] != s[r]) return [0, count];
    else return recursion(s, l + 1, r - 1, ++count);
  };

  const result = input.reduce((acc, cur) => {
    acc.push(recursion(cur, 0, cur.length - 1, 1));
    return acc;
  }, []);

  return result.map((cur) => cur.join(' ')).join('\n');
};

//! 정답 출력
console.log(answer());
