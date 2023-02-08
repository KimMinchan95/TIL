function solution(i, j, k) {
    let count = 0;
    
    k = String(k);
    
    for (let num = i; num <= j; num++) {
        count += [...String(num)].filter(cur => cur === k).length;
    }
    
    return count;
}