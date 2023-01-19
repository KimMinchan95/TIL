function solution(array) {
    const largest = array.reduce((acc, cur) => Math.max(acc, cur), 0);
    return [largest, array.findIndex(number => number === largest)];
}