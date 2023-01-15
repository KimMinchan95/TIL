function solution(n) {
    return [...`${n}`].reduce((acc, cur) => acc + Number(cur), 0);
}