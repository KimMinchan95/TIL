function solution(storey) {
    let result = Number.MAX_SAFE_INTEGER;
    
    const dfs = (num, count) => {
        if (count >= result) return;
        
        if (num === 0) {
            result = count;
            return;
        }
        
        const rest = num % 10;
        
        dfs(Math.floor(num / 10), count + rest);
        
        dfs(Math.floor(num / 10) + 1, count + 10 - rest);
    };
    
    dfs(storey, 0)
    
    return result;
}