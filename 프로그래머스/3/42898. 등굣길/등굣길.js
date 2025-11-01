function solution(m, n, puddles) {
    const map = Array.from(({ length: n }), () => Array(m).fill(0));
    map[0][0] = 1;
    
    const edit = 1000000007;
    
    puddles.forEach(([x, y]) => map[y-1][x-1] = -1);
    
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            const start = x === 0 && y === 0;
            if (start || map[y][x] === -1) continue;
            
            const up = map?.[y - 1]?.[x];
            const left = map?.[y]?.[x - 1];
            
            map[y][x] = (up > 0 ? up : 0) + (left > 0 ? left : 0) % edit;
        }
    }
    
    return map[n - 1][m - 1] % edit;
}