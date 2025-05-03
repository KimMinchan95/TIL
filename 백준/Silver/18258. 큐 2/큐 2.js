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

  const queue = [];
  const result = [];
  let front = 0;
  let back = 0;

  const dict = {
    push: (num) => {
      queue.push(num);
      back++;
    },
    pop: () => {
      if (front === back) {
        return -1;
      }
      const cur = queue[front];
      front++;
      return cur;
    },
    size: () => {
      return back - front;
    },
    empty: () => {
      return back - front ? 0 : 1;
    },
    front: () => {
      if (front === back) {
        return -1;
      }
      const cur = queue[front];
      return cur;
    },
    back: () => {
      if (front === back) {
        return -1;
      }
      const cur = queue[back - 1];
      return cur;
    },
  };

  for (let i = 0; i < input.length; i++) {
    const [str, num] = input[i].split(' ');

    const cur = dict[str](num);

    result.push(cur);
  }

  return result.filter((cur) => cur !== undefined).join('\n');
};

//! 정답 출력
console.log(answer());
