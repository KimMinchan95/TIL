function solution(balls, share) {
    let [a, b] = [1n, 1n];
    
    for (let i = 0; i < share; i++) {
        a *= BigInt(balls - i);
        b *= BigInt(i + 1);
    }
    
    return Number(a / b);
}