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

  const [q, ...list] = input;
  const [N, M] = q.split(' ').map(Number);

  const graph = Array.from({ length: N }, () => []);

  list.forEach((cur) => {
    const [s, e] = cur.split(' ').map(Number);
    graph[s - 1].push(e - 1);
    graph[e - 1].push(s - 1);
  });

  let result = 0;
  const visited = new Array(N).fill(false);

  const dfs = (start) => {
    const stack = [start];
    visited[start] = true;

    while (stack.length) {
      const cur = stack.pop();

      for (const next of graph[cur]) {
        if (visited[next]) continue;
        visited[next] = true;
        stack.push(next);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    dfs(i);
    result++;
  }

  return result;
};

//! 정답 출력
console.log(answer());
