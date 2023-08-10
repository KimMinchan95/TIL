function solution(k, d) {
    let result = 0;
    
    for (let x = 0; x <= d; x += k) {
        const y = Math.sqrt(d**2 - x**2);
        
        result += Math.floor(y/k) + 1;
    }
    
    return result;
}