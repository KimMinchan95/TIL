function solution(topping) {
    const toppingMap = topping.reduce((acc, cur) => {
        const before = acc.get(cur);
        acc.set(cur, before ? before + 1 : 1);
        return acc;
    }, new Map());
    
    const half = new Set();
    
    return topping.reduce((acc, cur) => {
        const before = toppingMap.get(cur);
        const isLast = before - 1 === 0;
        if (isLast) {
            toppingMap.delete(cur)
        } else {
            toppingMap.set(cur, before - 1);
        }
        half.add(cur);
        
        return acc + (half.size === toppingMap.size ? 1 : 0);
    }, 0);
}