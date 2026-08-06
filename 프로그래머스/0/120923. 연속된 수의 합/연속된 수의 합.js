function solution(num, total) {
    const center = Math.floor(total / num);
    const isEven = Boolean(num / 2);
    const result = [];
    let start = center - Math.floor((num - 1) / 2);
    
    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }
    
    return result;
}