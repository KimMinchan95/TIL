function solution(numbers, k) {
    const idx = 2 * (k - 1) % numbers.length;
    return numbers[idx];
}