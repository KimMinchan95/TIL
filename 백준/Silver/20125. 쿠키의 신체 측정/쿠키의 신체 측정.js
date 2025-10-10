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

const findLastIndexCompat = (arr, predicate) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) return i;
  }
  return -1;
};

//! 풀이
const answer = () => {
  //! 파일 읽기
  const input = fileRead(TYPES.COL);

  const N = Number(input.shift());

  let heart = [];

  loop1: for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (input[row][col] === "*") {
        heart = [row + 1, col];
        break loop1;
      }
    }
  }

  const leftArm = Math.abs(input[heart[0]].indexOf("*") - heart[1]);
  const rightArm = input[heart[0]].lastIndexOf("*") - heart[1];

  const bodyEnd = findLastIndexCompat(input, (cur) => cur[heart[1]] === "*");
  const leftLegEnd = findLastIndexCompat(
    input,
    (cur) => cur[heart[1] - 1] === "*"
  );
  const rightLegEnd = findLastIndexCompat(
    input,
    (cur) => cur[heart[1] + 1] === "*"
  );

  return `${heart[0] + 1} ${heart[1] + 1}\n${leftArm} ${rightArm} ${
    bodyEnd - heart[0]
  } ${leftLegEnd - bodyEnd} ${rightLegEnd - bodyEnd}`;
};

//! 정답 출력
console.log(answer());
