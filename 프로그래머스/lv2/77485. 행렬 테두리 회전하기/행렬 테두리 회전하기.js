function solution(rows, columns, queries) {
    const cube = Array.from(Array(rows), (_, idx) => Array(columns).fill().map((_, i) => idx * columns + i + 1));
    
    return queries.reduce((acc, cur) => {
        const [y1, x1, y2, x2] = cur.map(el => el - 1);
        
        const arr = [];
        
        for (let i = x1; i < x2; i++) arr.push(cube[y1][i]);
        for (let i = y1; i < y2; i++) arr.push(cube[i][x2]);
        for (let i = x2; i > x1; i--) arr.push(cube[y2][i]);
        for (let i = y2; i > y1; i--) arr.push(cube[i][x1]);
        
        acc.push(Math.min(...arr));
        arr.unshift(arr.pop());
        arr.reverse();
        
        for (let i = x1; i < x2; i++) cube[y1][i] = arr.pop();
        for (let i = y1; i < y2; i++) cube[i][x2] = arr.pop();
        for (let i = x2; i > x1; i--) cube[y2][i] = arr.pop();
        for (let i = y2; i > y1; i--) cube[i][x1] = arr.pop();
            
        return acc;
    }, []);
}