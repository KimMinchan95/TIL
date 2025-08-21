function solution(s){    
    const stack = [];
    
    [...s].forEach(cur => {
        if (cur === '(') {
            stack.push('(');
        }
        
        if (cur === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                return;
            }
            
            stack.push(')');
        }
    });
    
    return !stack.length;
}