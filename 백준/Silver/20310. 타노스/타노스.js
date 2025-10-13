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

  const zeroCount = input.match(/0/g)?.length ?? 0;
  const oneCount = input.match(/1/g)?.length ?? 0;

  let result = input;
  let zeroRemove = zeroCount / 2;
  let oneRemove = oneCount / 2;

  while (oneRemove > 0) {
    result = result.replace(/1/, "");
    oneRemove--;
  }
  result = result.split("").reverse().join("");
  while (zeroRemove > 0) {
    result = result.replace(/0/, "");
    zeroRemove--;
  }

  return result.split("").reverse().join("");
};

//! 정답 출력
console.log(answer());
