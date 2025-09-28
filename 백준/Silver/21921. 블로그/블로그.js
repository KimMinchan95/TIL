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

  const [N, X] = input.shift().split(" ").map(Number);
  const arr = input[0].split(" ").map(Number);

  const list = [arr.slice(0, X).reduce((acc, cur) => acc + cur, 0)];

  for (let i = 1; i < N - X + 1; i++) {
    list[i] = list[i - 1] - arr[i - 1] + arr[i + X - 1];
  }
  list.sort((a, b) => b - a);

  if (list[0] === 0) return "SAD";
  return `${list[0]}\n${list.filter((cur) => cur === list[0]).length}`;
};

//! 정답 출력
console.log(answer());
