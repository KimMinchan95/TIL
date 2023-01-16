function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        if (parseInt(n / i) === n / i) result++;    
    }
    
    return result;
}