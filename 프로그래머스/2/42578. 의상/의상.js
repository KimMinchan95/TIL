function solution(clothes) {
    const map = clothes.reduce((acc, [obj, group]) => {
        if (acc.has(group)) {
            acc.set(group, acc.get(group) + 1);
        } else {
            acc.set(group, 1);
        }
        return acc;
    }, new Map());
    
    return [...map].reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1;
}