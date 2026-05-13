function solution(numbers) {
    const numStrList = numbers.map(num => String(num));
    numStrList.sort((a, b) => {
        const s1 = a + b;
        const s2 = b + a;
        return s1 > s2 ? -1 : 1;
    });
    const numStr = numStrList.join('');
    return Number(numStr) === 0 ? '0' : numStr;
}