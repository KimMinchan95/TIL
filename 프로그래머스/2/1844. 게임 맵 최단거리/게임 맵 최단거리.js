class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

const MOVES = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    
    function bfs(start) {
        const queue = new Queue();
        queue.push(start);
        dist[start[0]][start[1]] = 1;
        
        while (!queue.isEmpty()) {
            const cur = queue.pop();
            
            for (const [dx, dy] of MOVES) {
                const nx = cur[0] + dx;
                const ny = cur[1] + dy;
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                
                if (maps[nx][ny] === 0) continue;
                
                if (dist[nx][ny] === -1) {
                    queue.push([nx, ny]);
                    dist[nx][ny] = dist[cur[0]][cur[1]] + 1;
                }
            }
        }
    }
    
    bfs([0, 0]);
    
    return dist[n - 1][m - 1];
}