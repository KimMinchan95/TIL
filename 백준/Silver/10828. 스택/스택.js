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

  const stack = [];
  let pointer = 0;
  const output = [];

  for (let i = 1; i < input.length; i++) {
    const [o, num] = input[i].split(' ');

    if (o === 'push') {
      stack[pointer++] = Number(num);
    } else if (o === 'pop') {
      if (pointer === 0) {
        output.push('-1');
      } else {
        output.push(String(stack[--pointer]));
      }
    } else if (o === 'size') {
      output.push(String(pointer));
    } else if (o === 'empty') {
      output.push(pointer === 0 ? '1' : '0');
    } else if (o === 'top') {
      if (pointer === 0) {
        output.push('-1');
      } else {
        output.push(String(stack[pointer - 1]));
      }
    }
  }

  console.log(output.join('\n'));
};

//! 정답 출력
answer();
