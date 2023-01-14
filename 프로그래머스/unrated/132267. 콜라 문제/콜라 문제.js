function solution(a, b, n) {
    let result = 0;
    while (n >= a) {
        const change = Math.floor(n / a) * b;
        result += change;
        n = change + n % a;
    }
    
    return result;
}