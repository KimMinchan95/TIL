function solution(weights) {
    let result = 0;
    const map = new Map();
    
    const balances = [1, 3/2, 2, 4/3];
    
    weights.sort((a, b) => b - a);
    
    weights.forEach(weight => {
       
        balances.forEach(balance => {
            const calc = weight * balance;
            
            if (map.has(calc)) {
                result += map.get(calc);
            }
        });
        
        map.set(weight, (map.get(weight) || 0) + 1);
    });
    
    return result;
}