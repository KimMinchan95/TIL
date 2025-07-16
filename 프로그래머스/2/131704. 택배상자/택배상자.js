function solution(order) {
    let result = 0;
    const stack = [];
    
    for (let i = 1; i <= order.length; i++) {
        stack.push(i);
        
        while (!!stack.length && stack.at(-1) === order[result]) {
            stack.pop();
            result++;
        }
    }
    
    return result;
}