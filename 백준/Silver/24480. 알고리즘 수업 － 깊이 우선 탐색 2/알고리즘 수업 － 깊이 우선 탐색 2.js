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

  const [N, M, R] = input.shift().split(' ').map(Number);

  const graph = Array.from({ length: N }).map(() => []);

  input.forEach((str) => {
    const [start, end] = str.split(' ').map((v) => Number(v) - 1);
    graph[start].push(end);
    graph[end].push(start);
  });

  graph.forEach((arr) => arr.sort((a, b) => b - a));

  const visited = Array(N).fill(0);

  let num = 0;
  const dfs = (position) => {
    num++;
    visited[position] = num;

    graph[position].forEach((cur) => {
      if (visited[cur]) return;
      dfs(cur);
    });
  };

  dfs(R - 1);

  return visited.join('\n');
};

//! 정답 출력
console.log(answer());
