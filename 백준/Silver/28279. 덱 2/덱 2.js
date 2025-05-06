const TYPES = {
  SINGLE: 'SINGLE',
  ROW: 'ROW',
  COL: 'COL',
};

// ** 파일 읽는 방식들 ** //
const fileRead = (type) => {
  // 로컬인지에 대한 설정
  const localPath = './question.txt';
  const testPath = '/dev/stdin';
  const isTest = process.platform === 'linux';
  const filePath = isTest ? testPath : localPath;

  const fileRead = require('fs').readFileSync(filePath);
  // 한개
  if (type === TYPES.SINGLE) return fileRead.toString().trim();
  // 한줄
  if (type === TYPES.ROW) return fileRead.toString().split(' ');
  // Column
  if (type === TYPES.COL) return fileRead.toString().trim().split('\n');

  throw new Error('파일 읽는 방식 다시 확인해라');
};

//! 풀이
const answer = () => {
  //! 파일 읽기
  const input = fileRead(TYPES.COL);

  input.shift();

  const arr = [];
  let head = 0;
  let tail = 0;
  const order = {
    1: (x) => {
      arr[--head] = x;
    },
    2: (x) => {
      arr[tail++] = x;
    },
    3: () => {
      if (head === tail) return -1;
      return arr[head++];
    },
    4: () => {
      if (head === tail) return -1;
      return arr[--tail];
    },
    5: () => {
      return tail - head;
    },
    6: () => {
      return tail === head ? 1 : 0;
    },
    7: () => {
      return head === tail ? -1 : arr[head];
    },
    8: () => {
      return head === tail ? -1 : arr[tail - 1];
    },
  };

  return input
    .map((cur) => {
      const [ord, num] = cur.split(' ');

      return order[ord](num);
    })
    .filter((result) => result !== undefined)
    .join('\n');
};

//! 정답 출력
console.log(answer());
