function solution(A, B) {
    let result = -1;
    let memo = A;
    
    if (memo === B) return 0;
    
    for (let i = 0; i < A.length; i++) {
        const last = memo[memo.length - 1];
        memo = last + memo.slice(0, -1);
        if (memo === B) {
            result = i + 1;
            break;
        }
    }
    
    return result;
}