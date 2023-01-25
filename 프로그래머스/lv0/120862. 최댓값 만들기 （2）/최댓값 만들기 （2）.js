function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length -1] * numbers[numbers.length - 2]);
}