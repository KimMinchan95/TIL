function solution(s){
    const list = [];
    
    for (let i = 0; i < s.length; i++) {
        const top = list.at(-1);
        const cur = s[i];
        if (top === '(' && cur === ')') {
            list.pop();
            continue;
        }
        list.push(cur);
    }
    return !list.length;
}