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

  const N = Number(input.shift());
  const M = Number(input.shift());
  const list = input[0].split(" ").map(Number);

  let left = 1;
  let right = N;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let last = 0;
    for (let pos of list) {
      if (pos - mid > last) break;
      last = pos + mid;
    }

    if (last < N) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

//! 정답 출력
console.log(answer());
