function solution(n) {
    const tri = Array.from({ length: n }, (_, i) => Array(i + 1).fill(null));
    
    const down = [1, 0];
    const right = [0, 1];
    const up = [-1, -1];
    
    const order = [down, right, up];
    
    let curNum = 1;
    let dirIdx = 0;
    let y = -1;
    let x = 0;
    
    for (let i = n; i > 0; i--) {
        const [dy, dx] = order[dirIdx];
        
        for (let j = 0; j < i; j++) {
            y += dy;
            x += dx;
            
            tri[y][x] = curNum;
            
            curNum++;
        }
        
        dirIdx = (dirIdx + 1) % 3;
    }
    
    return tri.reduce((acc, arr) => {
        return acc.concat(arr);
    },[]);
}