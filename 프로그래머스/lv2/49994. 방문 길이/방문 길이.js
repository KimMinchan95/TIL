const directions = {
    U: [0, -1],
    D: [0, 1],
    L: [-1, 0],
    R: [1, 0],
}

function solution(dirs) {
    const location = [0, 0];
    const route = new Set();
    
    for (const dir of dirs) {
        const [x, y] = location;
        const [dX, dY] = directions[dir];
        const [nX, nY] = [x + dX, y + dY];
        
        if (nX > 5 || nY > 5 || nX < -5 || nY < -5) continue;
        
        route.add("" + x + y + nX + nY);
        route.add("" + nX + nY + x + y);
        
        location[0] = nX;
        location[1] = nY;
    }
    
    return route.size / 2;
}