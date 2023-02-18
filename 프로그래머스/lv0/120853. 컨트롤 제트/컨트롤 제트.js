function solution(s) {
    let memo = ''
    
    const arr = s.split(' ');
    
    return arr.reduce((acc, cur) => {        
        if (cur === 'Z') {
            return acc - Number(memo);
        }
        memo = cur;
        return acc + Number(cur);
    }, 0);
}