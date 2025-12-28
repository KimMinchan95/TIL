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

  const [N, M] = input.shift().split(' ').map(Number);

  const result = [];

  const map = Array.from({ length: N }, () => new Array(N).fill(0));
  // [다음 노드, 거리]
  for (let i = 0; i < N - 1; i++) {
    const [r1, r2, l] = input[i].split(' ').map(Number);
    const [s, e] = [r1 - 1, r2 - 1];
    map[s][e] = l;
    map[e][s] = l;
  }

  const dfs = (start, end, len, visited) => {
    if (visited[start]) {
      return;
    }
    visited[start] = true;

    if (start === end) {
      result.push(len);
      return;
    }

    for (let i = 0; i < map[start].length; i++) {
      if (map[start][i] === 0) continue;
      dfs(i, end, len + map[start][i], visited);
    }
  };

  for (let i = N - 1; i < N + M - 1; i++) {
    const [r1, r2] = input[i].split(' ').map(Number);
    dfs(r1 - 1, r2 - 1, 0, new Array(N).fill(false));
  }

  return result.join('\n');
};

//! 정답 출력
console.log(answer());
