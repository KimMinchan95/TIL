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
  const copied = [...arr];

  copied.sort((a, b) => a - b);
  const obj = copied.reduce((acc, cur, i) => {
    if (!acc[cur]) {
      acc[cur] = [i];
    } else {
      acc[cur].push(i);
    }
    return acc;
  }, {});

  const result = arr.map((cur) => {
    const popped = obj[cur].shift();
    return popped;
  });
  return result.join(" ");
};

//! 정답 출력
console.log(answer());
