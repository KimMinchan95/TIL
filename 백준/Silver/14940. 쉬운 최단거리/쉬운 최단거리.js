const TYPES = {
  SINGLE: "SINGLE",
  ROW: "ROW",
  COL: "COL",
};

// ** 파일 읽는 방식들 ** //
const fileRead = (type) => {
  // 로컬인지에 대한 설정
  const localPath = "./question.txt";
  const testPath = "/dev/stdin";
  const isTest = process.platform === "linux";
  const filePath = isTest ? testPath : localPath;

  const fileRead = require("fs").readFileSync(filePath);
  // 한개
  if (type === TYPES.SINGLE) return fileRead.toString().trim();
  // 한줄
  if (type === TYPES.ROW) return fileRead.toString().split(" ");
  // Column
  if (type === TYPES.COL) return fileRead.toString().trim().split("\n");

  throw new Error("파일 읽는 방식 다시 확인해라");
};

//! 풀이
const answer = () => {
  //! 파일 읽기
  const input = fileRead(TYPES.COL);

  const [n, m] = input.shift().split(" ").map(Number);

  const map = input.map((row) => row.split(" ").map(Number));

  let start = [];
  startLoop: for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        start = [i, j];
        break startLoop;
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const bfs = (start) => {
    const queue = [start];
    map[start[0]][start[1]] = 0;

    while (queue.length) {
      const [y, x] = queue.shift();

      directions.forEach(([dy, dx]) => {
        const ny = y + dy;
        const nx = x + dx;

        if (
          ny < 0 ||
          ny >= n ||
          nx < 0 ||
          nx >= m ||
          map[ny][nx] === 0 ||
          visited[ny][nx]
        )
          return;

        queue.push([ny, nx]);
        map[ny][nx] = map[y][x] + 1;
        visited[ny][nx] = true;
      });
    }
  };

  bfs(start);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1 && !visited[i][j]) map[i][j] = -1;
    }
  }

  return map.map((row) => row.join(" ")).join("\n");
};

//! 정답 출력
console.log(answer());
