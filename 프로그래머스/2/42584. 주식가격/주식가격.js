function solution(prices) {
    const len = prices.length;
    const result = new Array(len).fill(0);
    
    const stack = [0];
    for (let i = 1; i < len; i++) {
        while (prices[stack[stack.length - 1]] > prices[i] && !!stack.length) {
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        
        stack.push(i)
    }
    console.log(stack)
    
    while (!!stack.length) {
        const idx = stack.pop();
        result[idx] = len - 1 - idx;
    }
    
    return result;
}