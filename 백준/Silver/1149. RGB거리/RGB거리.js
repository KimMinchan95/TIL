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

  const len = Number(input.shift());

  const houseList = input.map((cur) => cur.split(' ').map(Number));

  for (let i = 1; i < len; i++) {
    houseList[i][0] += Math.min(houseList[i - 1][1], houseList[i - 1][2]);
    houseList[i][1] += Math.min(houseList[i - 1][0], houseList[i - 1][2]);
    houseList[i][2] += Math.min(houseList[i - 1][0], houseList[i - 1][1]);
  }

  return Math.min(...houseList[len - 1]);
};

//! 정답 출력
console.log(answer());
