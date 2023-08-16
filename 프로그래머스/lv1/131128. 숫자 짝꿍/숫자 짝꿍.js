function solution(X, Y) {
    const xMap = new Map();
    
    for (let i = 0; i < X.length; i++) {
        xMap.has(X[i]) ? xMap.set(X[i], xMap.get(X[i]) + 1) : xMap.set(X[i], 1);
    }
    
    const resultArr = [];
    
    for (let i = 0; i < Y.length; i++) {
        if (xMap.has(Y[i])) {
            resultArr.push(Y[i]);
            
            if (xMap.get(Y[i]) === 1) {
                xMap.delete(Y[i]);
            } else {
                xMap.set(Y[i], xMap.get(Y[i]) - 1);
            }
        }
    }
    
    if (!resultArr.length) {
        return '-1';
    }
    
    if (resultArr.every(str => str === '0')) {
        return '0';
    }
    
    return resultArr.map(Number).sort((a, b) => b - a).join('');
}