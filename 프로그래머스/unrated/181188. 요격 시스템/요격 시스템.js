function solution(targets) {
    let result = 0;
    
    targets.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    let memo = -1;
    
    targets.forEach(([start, end]) => {
        if (start < memo) {
            return;
        }
        memo = end;
        result++;
    });
    
    return result;
}