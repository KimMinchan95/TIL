function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        
        while (k && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        
        stack.push(num);
    }
    
    return stack.slice(0, number.length - k).join('');
}