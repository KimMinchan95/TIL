// 적록색약

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./example/red-green-colorant.txt').toString().trim().split('\n');

const tranformData = data => data.split(' ');

const makeVistedArr = (N) => {
    return Array.from({ length: N }, () => Array(N).fill(0));
}

const checkValidation = (location, N) => {
    const [x, y] = location;
    if (x < 0 || y < 0 || x >= N || y >= N) {
        return false;
    }
    return true;
}

const solution = () => {
    let [N, ...picture] = input.map(tranformData);
    N = Number(N[0]);
    picture = picture.map(cur => [...cur[0]]);

    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const visitedRGB = makeVistedArr(N);
    const visitedRG = makeVistedArr(N);

    let rgbCount = 0;
    let rgCount = 0;

    const bfs = (location, isRGB) => {
        const queue = [location];
        const [curX, curY] = location;
        const curColor = picture[curX][curY];

        while (queue.length) {
            const [x, y] = queue.shift();

            for (const [dX, dY] of direction) {
                const [nextX, nextY] = [x + dX, y + dY];

                if (checkValidation([nextX, nextY], N)) {
                    if (isRGB) {
                        if (!visitedRGB[nextX][nextY]) {
                            if (curColor === picture[nextX][nextY]) {
                                queue.push([nextX, nextY]);
                                visitedRGB[nextX][nextY] = 1;
                            }
                        }
                    }

                    if (!isRGB) {
                        if (!visitedRG[nextX][nextY]) {
                            if (
                                (curColor === 'R' || curColor === 'G') &&
                                (picture[nextX][nextY] === 'R' || picture[nextX][nextY] === 'G')
                            ) {
                                queue.push([nextX, nextY]);
                                visitedRG[nextX][nextY] = 1;
                            } else if (
                                curColor === 'B' && picture[nextX][nextY] === 'B'
                            ) {
                                queue.push([nextX, nextY]);
                                visitedRG[nextX][nextY] = 1;
                            }
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visitedRGB[i][j]) {
                rgbCount++;
                visitedRGB[i][j] = 1;
                bfs([i, j], true);
            }

            if (!visitedRG[i][j]) {
                rgCount++;
                visitedRG[i][j] = 1;
                bfs([i, j], false);
            }
        }
    }

    console.log(`${rgbCount} ${rgCount}`)
}

solution();