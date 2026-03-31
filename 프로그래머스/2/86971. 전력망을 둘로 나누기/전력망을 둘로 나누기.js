function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([s, e]) => {
        graph[s].push(e);
        graph[e].push(s);
    });
    
    const dfs = (node, parent) => {
        let count = 1;
        for (const child of graph[node]) {
            if (child !== parent) {
                count += dfs(child, node);
            }
        }
        return count;
    }
    
    let minDiff = Infinity;
    for (const [a, b] of wires) {
        graph[a].splice(graph[a].indexOf(b), 1);
        graph[b].splice(graph[b].indexOf(a), 1);
        
        const countA = dfs(a, b);
        const countB = n - countA;
        
        minDiff = Math.min(minDiff, Math.abs(countA - countB));
        
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return minDiff;
    
    
}