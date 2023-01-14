const price = 5500;

function solution(money) {
    return [Math.floor(money / price), money % price];
}