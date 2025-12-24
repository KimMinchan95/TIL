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

  const map = Array.from({ length: N }, () => new Array(M).fill(0));

  const queue = [];
  input.forEach((row, y) => {
    const numRow = row.split(' ').map(Number);

    for (let x = 0; x < M; x++) {
      if (numRow[x] === 1) {
        queue.push([y, x]);
      }
      map[y][x] = numRow[x];
    }
  });

  const DIR = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let head = 0;
  while (head < queue.length) {
    const [y, x] = queue[head++];

    for (const [dy, dx] of DIR) {
      const [ny, nx] = [y + dy, x + dx];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx] === 0) {
        queue.push([ny, nx]);
        map[ny][nx] = map[y][x] + 1;
      }
    }
  }

  let max = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (map[y][x] === 0) return -1;
      max = Math.max(max, map[y][x]);
    }
  }

  return max - 1;
};

//! 정답 출력
console.log(answer());
