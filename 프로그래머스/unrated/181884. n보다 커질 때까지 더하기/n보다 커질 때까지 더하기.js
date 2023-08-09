function solution(numbers, n) {
    let memo = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (memo > n) break;
        memo += numbers[i];
    }
    
    return memo;
}