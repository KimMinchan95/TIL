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

  const [N, M, V] = input.shift().split(' ').map(Number);

  const map = Array.from({ length: N }).map(() => Array(N).fill(false));

  input.forEach((str) => {
    const [start, end] = str.split(' ').map((string) => Number(string) - 1);
    map[start][end] = true;
    map[end][start] = true;
  });

  const dfsVisited = Array(N).fill(false);
  const dfsResult = [];

  const dfs = (V) => {
    dfsVisited[V] = true;
    dfsResult.push(V);
    for (let i = 0; i < N; i++) {
      if (!map[V][i] || dfsVisited[i]) continue;
      dfs(i);
    }
  };

  dfs(V - 1);

  const bfsVisited = Array(N).fill(false);
  const bfsResult = [];

  const bfs = (V) => {
    const queue = [V];
    bfsVisited[V] = true;
    bfsResult.push(V);

    while (!!queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < N; i++) {
        if (!map[cur][i] || bfsVisited[i]) continue;
        queue.push(i);
        bfsVisited[i] = true;
        bfsResult.push(i);
      }
    }
  };

  bfs(V - 1);

  return [
    dfsResult.map((node) => node + 1).join(' '),
    bfsResult.map((node) => node + 1).join(' '),
  ].join('\n');
};

//! 정답 출력
console.log(answer());
