const DIRECTIONS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
];

function solution(maps) {
    const mapYLen = maps.length;
    const mapXLen = maps[0].length;

    const isValidPosition = (y, x) => y >= 0 && y < mapYLen && x >= 0 && x < mapXLen;

    const bfs = (position, target) => {
        const visited = Array.from({ length: mapYLen }, () => Array(mapXLen).fill(false));
        const queue = [[...position, 0]];

        while (!!queue.length) {
            const [y, x, count] = queue.shift();

            if (!isValidPosition(y, x) || visited[y][x] || maps[y][x] === 'X') continue;
            if (maps[y][x] === target) return count;

            visited[y][x] = true;

            DIRECTIONS.forEach(([dY, dX]) => {
                const nY = y + dY;
                const nX = x + dX;
                queue.push([nY, nX, count + 1]);
            });
        }

        return -1;
    };

    let start;
    let lever;

    loop: for (let i = 0; i < mapYLen; i++) {
        for (let j = 0; j < mapXLen; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            if (maps[i][j] === 'L') lever = [i, j];
            if (!!start && !!lever) break loop;
        }
    }

    const leverToExit = bfs(lever, 'E');
    if (leverToExit === -1) return -1;

    const startToLever = bfs(start, 'L');
    if (startToLever === -1) return -1;

    return startToLever + leverToExit;
}