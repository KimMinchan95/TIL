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

  const [N, K] = input.shift().split(" ").map(Number);

  const list = input.map((str) => {
    const info = str.split(" ").map(Number);
    const num = info.shift();
    return [num, info];
  });

  const sortedList = list.sort(([_, aList], [__, bList]) => {
    if (aList[0] !== bList[0]) return bList[0] - aList[0];
    if (aList[1] !== bList[1]) return bList[1] - aList[1];
    return bList[2] - aList[2];
  });

  let flag = 0;
  let rank = 0;

  const obj = {};

  for (let i = 0; i < sortedList.length; i++) {
    const [num, info] = sortedList[i];
    const [_, prevInfo] = sortedList[i - 1] || [];

    const isSame = JSON.stringify(info) === JSON.stringify(prevInfo);

    rank++;

    if (isSame) {
      flag++;
    }

    obj[num] = rank - (isSame ? flag : 0);

    if (!isSame) {
      flag = 0;
    }
  }

  return obj[K];
};

//! 정답 출력
console.log(answer());
