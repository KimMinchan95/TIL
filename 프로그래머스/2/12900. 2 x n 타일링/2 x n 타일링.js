function solution(n) {
    const arr = Array.from({ length: n }, () => null);
    arr[0] = 1;
    arr[1] = 2;
    
    for (let i = 2; i < arr.length; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2])  % 1000000007;
    }
    
    return arr[n - 1];
}