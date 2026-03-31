function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    const dfs = (node, parent) => {
        let count = 1;
        graph[node].forEach(child => {
            if (child === parent) return;
            count += dfs(child, node);
        });
        return count;
    }
    
    let minDiff = Infinity;
    wires.forEach(([a, b]) => {
        graph[a] = graph[a].filter(node => node !== b);
        graph[b] = graph[b].filter(node => node !== a);
        
        const countA = dfs(a, b);
        const countB = n - countA;
        minDiff = Math.min(minDiff, Math.abs(countA - countB));
        
        graph[a].push(b);
        graph[b].push(a);
    });
    
    return minDiff;
}