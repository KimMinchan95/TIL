function solution(topping) {
    let answer = 0;
    
    const map1 = new Map();
    const map2 = topping.reduce((acc, cur) => {
        const getCur = acc.get(cur);
        getCur ? acc.set(cur, getCur + 1) : acc.set(cur, 1);
        
        return acc;
    }, new Map());

    
    for (let i = 0; i < topping.length; i++) {
        const cur = topping[i];
        
        map2.get(cur) === 1 ? map2.delete(cur) : map2.set(cur, map2.get(cur) - 1);
        
        map1.get(cur) ? map1.set(cur, map1.get(cur) + 1) : map1.set(cur, 1);
        
        if (map1.size === map2.size) answer++;
        
        if (map1.size > map2.size) break;
    }
    
    return answer;
}