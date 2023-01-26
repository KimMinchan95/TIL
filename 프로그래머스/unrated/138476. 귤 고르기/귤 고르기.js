function solution(k, tangerine) {
    const box = new Map();
    
    tangerine.forEach(cur => {
        const getCur = box.get(cur);
        box.set(cur, getCur ? getCur + 1 : 1);
    });
    
    const countArr = [];
    
    box.forEach(value => {
        countArr.push(value);
    });
    
    countArr.sort((a, b) => a - b);
    
    let result = 0;
    
    while(k > 0) {
        result++;
        
        const curCount = countArr.pop();
        
        k -= curCount;
    }
    
    return result;
}