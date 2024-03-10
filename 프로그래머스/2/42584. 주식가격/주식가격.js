function solution(prices) {
    const result = [];
    const len = prices.length;
    
    outer:
    for (let i = 0; i < len; i++) {
        const criteria = prices[i];
        
        for (let j = i + 1; j < len; j++) {
            const price = prices[j];
            
            if (price < criteria) {
                result.push(j - i);
                continue outer;
            }
        }
        
        if (!result[i]) result.push(len - 1 - i);
    }
    
    return result;
}