function solution(numbers) {
    const sort = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('');
    if (sort[0] === '0') return '0';
    return sort;
}