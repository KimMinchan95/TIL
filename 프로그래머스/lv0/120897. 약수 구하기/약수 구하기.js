function solution(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i) continue;
        result.push(i);
    }
    
    return result;
}