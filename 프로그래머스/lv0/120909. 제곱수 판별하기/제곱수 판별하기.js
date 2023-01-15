function solution(n) {
    const sqrt = Math.sqrt(n);
    return parseInt(sqrt) === sqrt ? 1 : 2;
}