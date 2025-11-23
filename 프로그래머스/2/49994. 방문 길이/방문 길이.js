const DIR_DICT = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0]
}

const isValid = ([nx, ny]) => { 
    return !(nx < -5 || nx > 5 || ny < -5 || ny > 5);
}

function solution(dirs) {
    const set = new Set();
    
    let curDir = [0, 0];
    
    [...dirs].forEach(dir => {
        const [dx, dy] = DIR_DICT[dir];
        const [cx, cy] = curDir
        const [nx, ny] = [cx + dx, cy + dy];
        
        if (!isValid([nx, ny])) return;
        
        set.add(`${cx}${cy}->${nx}${ny}`);
        set.add(`${nx}${ny}->${cx}${cy}`);
        curDir = [nx, ny];
    })
    
    return set.size/2;
}