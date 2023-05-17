function solution(maps) {
    const result = [];
    
    const map = maps.map(arr => [...arr]);
    
    const landY = map.length;
    const landX = map[0].length;
    
    const getIsland = (y, x) => {
        if (y >= landY || y < 0 || x >= landX || x < 0 || map[y][x] === 'X') return 0;
    
        const current = parseInt(map[y][x]);
        map[y][x] = 'X';
        return current + getIsland(y - 1, x) + getIsland(y + 1, x) + getIsland(y, x - 1) + getIsland(y, x + 1);
    }
    
    for (let y = 0; y < landY; y++) {
        for (let x = 0; x < landX; x++) {
            if (map[y][x] !== 'X') {
                result.push(getIsland(y, x));
            }
        }
    }
    
    return result.length ? result.sort((a, b) => a - b) : [-1];
}