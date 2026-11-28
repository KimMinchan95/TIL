function solution(maps) {
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const maxY = maps.length - 1;
    const maxX = maps[0].length - 1;

    maps[0][0] = 0;
    const queue = [[0, 0, 1]];
    let head = 0;
    
    while (head < queue.length) {
        const [y, x, cnt] = queue[head++];
        
        if (y === maxY && x === maxX) {
            return cnt;
        }
        
        for (const [dy, dx] of dir) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny <= maxY && nx <= maxX && ny >= 0 && nx >= 0 && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, cnt + 1]);
            }
        }
    }
    
    return -1;
}