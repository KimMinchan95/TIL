function solution(array) {
    const map = array.reduce((acc, cur) => {
        if (acc.has(cur)) {
            acc.set(cur, acc.get(cur) + 1);
        } else {
            acc.set(cur, 1);
        }
        return acc;
    }, new Map());
    
    const sortedArr = [...map].sort(([_, a], [__, b]) => b - a);
    const [f, s] = [sortedArr[0], sortedArr[1]];
    if (!s) return f[0];
    return f[1] === s[1] ? -1 : f[0];
}