function solution(order) {
    return [...order.toString()].reduce((acc, cur) => cur % 3 || cur === '0' ? acc : acc + 1, 0);
}