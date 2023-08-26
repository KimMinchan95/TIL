function solution(myString, pat) {
    return Number([...myString].reduce((acc, cur) => {
        if (cur === 'A') {
            return acc + 'B';
        }
        return acc + 'A';
    }, '').indexOf(pat) !== -1);
}