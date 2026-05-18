function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let x = 0; x <= Math.sqrt(total); x++) {
        if (total % x === 0) {
            const y = total / x;
            if (yellow === (x - 2) * (y - 2)) {
                return [y, x];
            } 
        }
    }
}