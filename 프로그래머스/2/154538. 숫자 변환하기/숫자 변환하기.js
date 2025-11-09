function solution(x, y, n) {
    const arr = Array(y + 1).fill(Infinity);
    arr[x] = 0;
    
    for (let i = x; i < y; i++) {
        const count = arr[i] + 1;
        
        const plus = i + n;
        arr[plus] = Math.min(arr[plus], count);
        
        const mulit2 = i * 2;
        arr[mulit2] = Math.min(arr[mulit2], count);
        
        const mulit3 = i * 3;
        arr[mulit3] = Math.min(arr[mulit3], count);
    }
    
    const result = arr[y];
    return result === Infinity ? -1 : result;
}