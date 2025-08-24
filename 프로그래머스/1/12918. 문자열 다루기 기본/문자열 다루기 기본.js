function solution(s) {
    if (![4, 6].includes(s.length)) return false;
    if (s.split('').some(str => isNaN(Number(str)))) return false;
    return true;
}