function solution(ingredient) {
    let result = 0;
    
    const stack = [];
    
    ingredient.forEach(cur => {
        stack.push(cur);
        if (stack.length > 3 && JSON.stringify(stack.slice(stack.length - 4)) === "[1,2,3,1]") {
            stack.splice(stack.length - 4, 4);
            result++;
        }
    });
    
    return result;
}