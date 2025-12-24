function solution(n, roads, sources, destination) {
    const dest = destination - 1; 
    const map = Array.from({ length: n }, () => []);
    
    roads.forEach(([start, end]) => {
        map[start - 1].push(end - 1);
        map[end - 1].push(start - 1);
    });
    
    const dist = new Array(n).fill(-1);
    const queue = [[dest]];
    dist[dest] = 0;
    
    while(queue.length) {
        const cur = queue.shift();
        for (const next of map[cur]) {
            if (dist[next] === -1) {
                dist[next] = dist[cur] + 1;
                queue.push(next);
            }
        }
    }
    
    return sources.map(source => dist[source - 1]);
}