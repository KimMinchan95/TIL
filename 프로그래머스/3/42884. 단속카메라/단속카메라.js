function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    
    let result = 1;
    
    let out = routes[0][1];
    
    for (let i = 1; i < routes.length; i++) {
        const [start, end] = routes[i];
        
        if (out < start) {
            out = end;
            result++;
        }
        
        if (out > end) {
            out = end;
        }
    }
    
    return result;
}