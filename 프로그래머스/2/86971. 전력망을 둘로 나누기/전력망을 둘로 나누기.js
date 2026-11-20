function solution(n, wires) {
    const could = [];
    for (let i = 0; i < wires.length; i++) {
        const [s] = wires[i];

        const cuttedWires = wires.filter((_, idx) => idx !== i);
        const visited = Array(n + 1).fill(false);
        visited[s] = true;
        
        const dfs = (curr) => {
            if (visited.every(v => v === true)) {
                return;
            }
            
            for (let j = 0; j < cuttedWires.length; j++) {
                const [v1, v2] = cuttedWires[j];
                
                if (v1 === curr && visited[v2] === false) {
                    visited[v2] = true;
                    dfs(v2);
                }
                
                if (v2 === curr && visited[v1] === false) {
                    visited[v1] = true;
                    dfs(v1)
                }
            }
        }
        dfs(s);
        
        const a = visited.filter(v => Boolean(v)).length;
        could.push(Math.abs(2 * a - n));
    }
    
    return Math.min(...could);
}