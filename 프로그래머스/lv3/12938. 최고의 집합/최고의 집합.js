function solution(n, s) {
    const mathFloor = Math.floor(s / n);
    
    if (s < n) return [-1];
    
    const result = new Array(n).fill(mathFloor);
    
    for (let i = 0; i < s % n; i++) {
        result[i]++;
    }
    
    return result.sort((a, b) => a - b);
}