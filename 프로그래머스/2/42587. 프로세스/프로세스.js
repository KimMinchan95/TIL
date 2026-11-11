function solution(priorities, location) {
    const queue = priorities.map((p, i) => ({ i, p }));
    let result = 0;
    
    while (queue.length) {
        const cur = queue.shift();
        const hasHigher = queue.some(other => other.p > cur.p);
        
        if (hasHigher) {
            queue.push(cur);
            continue;
        }
        result++;
        if (cur.i === location) {
            return result;
        }
    } 
}