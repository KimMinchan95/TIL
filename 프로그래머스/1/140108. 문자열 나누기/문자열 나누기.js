function solution(s) {
    let memo = null;
    let memoCount = 0;
    let notMemoCount = 0;
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        
        if (!memo) memo = cur;
        
        if (cur === memo) {
            memoCount++;
        } else {
            notMemoCount++;
        }
        
        if (memoCount === notMemoCount) {
            result++;
            memo = null;
            memoCount = 0;
            notMemoCount = 0;
        }
        
        if ((i === s.length - 1) && !!memo) result++;
    }
    
    return result;
}