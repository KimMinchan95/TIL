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
  input.shift();

  const arr = input[0].split(" ").map(Number);

  let result = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    const leftMax = Math.max(...arr.slice(0, i));
    const rightMax = Math.max(...arr.slice(i + 1));

    const curHeight = Math.min(leftMax, rightMax);

    if (curHeight > arr[i]) {
      result += curHeight - arr[i];
    }
  }
  return result;
};

//! 정답 출력
console.log(answer());
