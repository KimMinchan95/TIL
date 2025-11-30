function solution(n, k, cmd) {
    const deleted = [];
    
    const up = Array.from({ length: n + 1 }, (_, i) => i - 1);
    const down = Array.from( { length: n + 1 }, (_, i) => i + 1);
    
    k++
    
    cmd.forEach(cm => {
        const [order, num] = cm.split(' ');
        
        if (order === 'C') {
            deleted.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            k = n < down[k] ? up[k] : down[k];
        }
        
        if (order === 'Z') {
            const restored = deleted.pop();
            down[up[restored]] = restored;
            up[down[restored]] = restored;
        }
        
        if (order === 'U') {
            for (let i = 0; i < num; i++) {
                k = up[k];
            }
        }
        
        if (order === 'D') {
            for (let i = 0; i < num; i++) {
                k = down[k];
            }
        }
    });
    
    const result = new Array(n).fill('O');
    deleted.forEach(del => {
        result[del - 1] = 'X';
    })
    
    return result.join('');
}