function solution(clothes) {
    const map = clothes.reduce((acc, [obj, group]) => {
        acc.set(group, (acc.get(group) || 0) + 1);
        return acc;
    }, new Map());
    
    return [...map].reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1;
}