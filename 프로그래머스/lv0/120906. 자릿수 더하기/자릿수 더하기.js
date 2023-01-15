function solution(n) {
    return [...n.toString()].reduce((acc, cur) => acc + Number(cur), 0);
}