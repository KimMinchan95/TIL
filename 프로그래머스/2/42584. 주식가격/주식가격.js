function solution(prices) {
    const result = Array(prices.length).fill(0);
    
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        const curP = prices[i];
        while (stack.length && prices[stack.at(-1)] > curP) {
            const index = stack.pop();
            result[index] = i - index; 
        }
        
        stack.push(i);
    }
    
    const pl = prices.length;
    while (stack.length) {
        const index = stack.pop();
        result[index] = pl - 1 - index;
    }
    
    return result;
}