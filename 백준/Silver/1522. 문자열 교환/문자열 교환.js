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
  const input = fileRead(TYPES.SINGLE);
  const len = input.length;

  const aCount = input.match(/a/g)?.length || 0;
  if (!input.match(/b/g)?.length) return 0;

  const circle = input + input.slice(0, aCount - 1);

  let result = Infinity;

  for (let i = 0; i < len; i++) {
    result = Math.min(
      circle.slice(i, aCount + i).match(/b/g)?.length || 0,
      result
    );
  }
  return result;
};

//! 정답 출력
console.log(answer());
