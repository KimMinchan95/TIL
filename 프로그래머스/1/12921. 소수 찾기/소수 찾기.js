function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (let i = 2; i<= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i**2; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(Boolean).length;
}