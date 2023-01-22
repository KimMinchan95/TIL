const convert = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j' };

function solution(age) {
    return [...age.toString()].reduce((acc, cur) => {
        return acc += convert[cur];
    }, '');
}