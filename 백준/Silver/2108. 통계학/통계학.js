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

  const len = input.shift();
  const numList = input.map(Number).sort((a, b) => a - b);

  const result = [];

  // 산술 평균
  result.push(Math.round(numList.reduce((acc, cur) => acc + cur, 0) / len));

  // 중앙값
  result.push(numList[Math.floor(len / 2)]);

  // 최빈값
  const obj = numList.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const sorted = Object.entries(obj).sort(([a, b], [c, d]) => {
    if (b === d) {
      return a - c;
    }
    return d - b;
  });
  result.push(
    sorted.length > 1 && sorted[0][1] === sorted[1][1]
      ? Number(sorted[1][0])
      : Number(sorted[0][0])
  );

  // 범위
  result.push(Math.max(...numList) - Math.min(...numList));

  return result.join('\n');
};

//! 정답 출력
console.log(answer());
