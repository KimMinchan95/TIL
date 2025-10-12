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

  const [N, M] = input.shift().split(" ").map(Number);
  const list = input.map((cur) => cur.split(" ").map(Number)).reverse();

  const dir = [-1, 0, 1];

  const finish = [];

  const dfs = (lastDir, x, y, sum) => {
    if (x === -1 || x === M) {
      return;
    }
    sum += list[y][x];
    if (y === N - 1) {
      finish.push(sum);
      return;
    }
    dir.forEach((direction) => {
      if (lastDir === direction) return;
      dfs(direction, x + direction, y + 1, sum);
    });
  };

  for (let i = 0; i < M; i++) {
    dfs(-2, i, 0, 0);
  }

  return Math.min(...finish);
};

//! 정답 출력
console.log(answer());
