function solution(s){
    return Number(![...s].reduce((stack, cur) => {
        
        if (stack[stack.length - 1] === cur) {
            stack.pop();
        } else {
            stack.push(cur);
        }
        
        return stack;
    }, []).length);
}