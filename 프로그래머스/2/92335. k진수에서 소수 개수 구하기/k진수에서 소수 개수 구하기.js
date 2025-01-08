const isPrime = str => {
    const num = parseInt(str);
    
    if (num === 2) {
        return true;
    }
    
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    const num = n.toString(k);
    
    const arr = num.split('0').filter(str => !!str && str !== '1');

    return arr.filter(isPrime).length;
}