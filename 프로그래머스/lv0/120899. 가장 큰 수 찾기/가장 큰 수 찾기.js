function solution(array) {
    const largest = Math.max(...array);
    return [largest, array.findIndex(number => number === largest)];
}