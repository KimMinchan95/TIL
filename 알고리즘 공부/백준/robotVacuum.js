const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./example/robotVacuum.txt').toString().trim().split('\n');

const tranformData = data => data.split(' ').map(Number);

const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const solution = () => {
    const [areaSize, inital, ...area] = input.map(tranformData);
    const [N, M] = areaSize;
    
    let count = 0;
    const getCleaning = (location) => {
        const queue = [];
        
        queue.push(location);

        outer: while (queue.length) {
            let [r, c, d] = queue.shift();

            if (!area[r][c]) {
                count++
                area[r][c] = 2;
            }

            // 한 방향씩 돌면서 확인
            for (let i = 0; i < 4; i++) {
                d = d - 1 < 0 ? 3 : d - 1;
                const [dR, dC] = direction[d];
                const [nextR, nextC] = [r + dR, c + dC];

                if (!area[nextR][nextC]) {
                    queue.push([nextR, nextC, d]);
                    continue outer;
                }
            }

            // 네 방향 모두 청소되어있는 경우
            // 뒤 방향
            const [bR, bC] = direction[(d + 2) % 4];
            const [backR, backC] = [r + bR, c + bC];

            // 뒤가 벽일 경우 멈추기
            if (backC <= 0 || backC >= M || backR <= 0 || backR >= N || area[backR][backC] === 1) {
                break;
            }

            queue.push([backR, backC, d])
        }
    }
    getCleaning(inital);


    console.log(count);
}

solution();