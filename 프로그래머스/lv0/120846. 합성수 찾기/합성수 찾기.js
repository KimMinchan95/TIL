const isPrime = number => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return true;
    }
    return false;
}

function solution(n) {
    let result = 0;
    
    for (let i = 0; i <= n; i++) {
        if(isPrime(i)) result++;
    }
    
    return result;
}