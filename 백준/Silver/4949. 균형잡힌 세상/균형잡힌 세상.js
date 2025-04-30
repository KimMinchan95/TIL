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

  input.pop();

  const map = {
    ')': '(',
    ']': '[',
  };

  const allMap = {
    ...map,
    '(': ')',
    '[': ']',
  };

  return input
    .map((str) => {
      const stack = [];

      for (let i = 0; i < str.length; i++) {
        const cur = str[i];
        if (!allMap[cur]) continue;

        if (!map[cur]) {
          stack.push(cur);
          continue;
        }

        const top = stack[stack.length - 1];
        if (top === map[cur]) {
          stack.pop();
        } else {
          return 'no';
        }
      }

      if (stack.length) return 'no';
      return 'yes';
    })
    .join('\n');
};

//! 정답 출력
console.log(answer());
