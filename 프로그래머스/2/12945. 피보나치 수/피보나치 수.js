function solution(n) {
    const arr = Array.from({ length: n + 1 }, () => null);
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i = 2; i < arr.length; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
    
    return arr[n];
}