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

  const command = {
    stack: [],
    1: (num) => {
      command.stack.push(num);
    },
    2: () => {
      if (!command.stack.length) return -1;
      return command.stack.pop();
    },
    3: () => {
      return command.stack.length;
    },
    4: () => {
      if (!command.stack.length) return 1;
      return 0;
    },
    5: () => {
      if (command.stack.length) return command.stack[command.stack.length - 1];
      return -1;
    },
  };

  const answer = [];
  input.forEach((cur, i) => {
    const [a, b] = cur.split(' ');
    const result = command[a](b);
    if (result === undefined) return;
    answer.push(result);
  });

  return answer.join('\n');
};

//! 정답 출력
console.log(answer());
