// 백준 - 미로 탐색

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const solution = () => {
    getSolution = (N, M, Maze) => {
        const queue = [];
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        
        const makeResult = () => {
            let result = 0;
            queue.push([0, 0, 1]);

            while (queue.length) {
                const [x, y, count] = queue.shift();

                if (x === N && y === M) {
                    result = count;
                    break;
                }

                if (Maze[x][y]) {
                    Maze[x][y] = 0;

                    directions.forEach(direction => {
                        const [dX, dY] = direction;

                        const nextX = x + dX;
                        const nextY = y + dY;

                        if (nextX < 0 || nextY < 0 || nextX > N || nextY > M || !Maze[nextX][nextY]) {
                            return;
                        }

                        queue.push([nextX, nextY, count + 1]);
                    })
                }
            }

            return result;
        }

        return makeResult();
    }

    const [N, M] = input[0].split(' ');
    const maze = [];

    for (let i = 0; i < input.length; i++) {
        if (!i) continue;
        maze.push([...input[i]].map(Number));
    }

    console.log(getSolution(Number(N - 1), Number(M - 1), maze));
}

solution();