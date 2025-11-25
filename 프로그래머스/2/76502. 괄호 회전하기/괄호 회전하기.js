const MATCH = {
    ')': '(',
    '}': '{',
    ']': '['
}

function solution(s) {
    let result = 0;
    
    const len = s.length;
    const mergedS = s + s;
    
    const check = (s) => {
        const stack = [];
        
        for (let i = 0; i < s.length; i++) {
            const top = stack[stack.length - 1];
            if (top && top === MATCH[s[i]]) {
                stack.pop();
                continue;
            }
            stack.push(s[i]);
        }
        return !stack.length;
    }
    
    for (let i = 1; i <= len; i++) {
        const slicedS = mergedS.slice(i, i + len);
        if (check(slicedS)) {
            result++;
        }
    }
    
    return result;
}