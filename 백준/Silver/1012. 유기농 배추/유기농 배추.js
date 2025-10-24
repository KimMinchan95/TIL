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

  const maps = input.reduce((acc, cur) => {
    const numberedCur = cur.split(' ').map(Number);
    if (numberedCur.length === 3) {
      const [M, N, K] = numberedCur;
      const map = Array.from({ length: N }, () => Array(M).fill(0));
      acc.push(map);
    } else {
      const [X, Y] = numberedCur;
      acc[acc.length - 1][Y][X] = 1;
    }
    return acc;
  }, []);

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const bfs = (map) => {
    let count = 0;

    const yLen = map.length;
    const xLen = map[0].length;

    for (let y = 0; y < yLen; y++) {
      for (let x = 0; x < xLen; x++) {
        if (map[y][x] === 1) {
          const queue = [[y, x]];
          map[y][x] = 0;
          while (queue.length) {
            const dequeue = queue.shift();
            const [y, x] = dequeue;

            direction.forEach(([dy, dx]) => {
              const [ny, nx] = [y + dy, x + dx];
              if (
                ny >= 0 &&
                ny < yLen &&
                nx >= 0 &&
                nx < xLen &&
                map[ny][nx] === 1
              ) {
                queue.push([ny, nx]);
                map[ny][nx] = 0;
              }
            });
          }
          count++;
        }
      }
    }

    return count;
  };

  return maps.map(bfs).join('\n');
};

//! 정답 출력
console.log(answer());
