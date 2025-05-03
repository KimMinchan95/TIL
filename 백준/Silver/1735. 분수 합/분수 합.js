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

  const [[m1, m2], [n1, n2]] = input.map((cur) => cur.split(' ').map(Number));

  const getGcd = (a, b) => {
    while (b > 0) {
      const r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  const gcd = getGcd(m2, n2);
  const lcm = (m2 * n2) / gcd;

  const numerator = (lcm / m2) * m1 + (lcm / n2) * n1;
  const resultLcm = getGcd(numerator, lcm);
  return `${numerator / resultLcm} ${lcm / resultLcm}`;
};

//! 정답 출력
console.log(answer());
