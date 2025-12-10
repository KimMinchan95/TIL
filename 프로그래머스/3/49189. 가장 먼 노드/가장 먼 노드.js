function solution(n, edge) {
    const connects = Array.from({ length: n }, () => []);
    
    for (const v of edge) {
        const [x, y] = [v[0] - 1, v[1] - 1];
        connects[x].push(y);
        connects[y].push(x);
    }
    
    const visited = new Array(n).fill(0); 
    visited[0] = 1;
    const queue = [0];
    
    while(queue.length) {
        const cur = queue.shift();
        
        for (const c of connects[cur]) {
            if (!visited[c]) {
                visited[c] = visited[cur] + 1;
                queue.push(c);
            }
        }
    }
    
    const max = Math.max(...visited);
    return visited.filter(v => v === max).length;
}