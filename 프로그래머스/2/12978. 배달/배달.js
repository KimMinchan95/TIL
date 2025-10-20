function solution(N, road, K) {
    const graph = Array.from({ length: N }, () => []);
    
    road.forEach(([start, end, time]) => {
        graph[start - 1].push([end - 1, time]);
        graph[end - 1].push([start - 1, time]);
    });
    
    const visited = Array(N).fill(Number.MAX_SAFE_INTEGER)
    
    const bfs = () => {
        const queue = [[0, 0]];
        visited[0] = 0;
        
        while (queue.length) {
            const [cur, cost] = queue.shift();
            
            graph[cur].forEach(([roadNext, costNext]) => {
                const curCost = cost + costNext;
                if (visited[roadNext] > curCost) {
                    visited[roadNext] = curCost;
                    queue.push([roadNext, curCost]);
                }
            })
        }
    };
    
    bfs();
    
    return visited.filter((cost) => cost <= K).length
}