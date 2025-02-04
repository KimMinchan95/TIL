function solution(n) {
    const num = '124';
    
    let result = '';
    
    while (n > 0) {
        result = num.at(n % 3 - 1) + result;
        n = parseInt((n - 1) / 3);
    }
    
    return result;
}