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
  const input = fileRead(TYPES.SINGLE);

  const [N, M] = input.split(' ').map(Number);
  const result = [];

  const visited = Array(N + 1).fill(false);

  const dfs = (depth, arr) => {
    if (depth === M) {
      result.push(arr);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(depth + 1, [...arr, i]);
      visited[i] = false;
    }
  };

  dfs(0, []);

  return result.map((cur) => cur.join(' ')).join('\n');
};

//! 정답 출력
console.log(answer());
