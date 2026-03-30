class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let i = this.size() - 1;
        
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            
            if (this.heap[parent][0] <= this.heap[i][0]) break;
            
            this.swap(parent, i);
            i = parent;
        }
    }
    
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    bubbleDown() {
        let i = 0;
        const len = this.size();
        
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let smallest = i;
            
            if (left < len && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            
            if (right < len && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            
            if (smallest === i) break;
            
            this.swap(smallest, i);
            i = smallest;
        }
    }
}

function solution(N, road, K) {
    const graph = Array.from({ length: N }, () => []);
    const distances = Array(N).fill(Infinity);
    distances[0] = 0;
    
    road.forEach(([s, e, c]) => {
        graph[s - 1].push([e - 1, c]);
        graph[e - 1].push([s - 1, c]);
    })
    
    const heap = new MinHeap();
    heap.push([0, 0]);
    
    while (heap.size() > 0) {
        const [dist, node] = heap.pop();
        
        if (dist > distances[node]) continue;
        
        for (const [nextNode, nextDist] of graph[node]) {
            const cost = dist + nextDist;
            if (cost < distances[nextNode]) {
                distances[nextNode] = cost;
                heap.push([cost, nextNode]);
            }
        }
    }
    
    return distances.filter(dist => dist <= K).length;
}