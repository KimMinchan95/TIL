function solution(array) {
    return array.reduce((acc, cur) => acc += cur.toString().match(/7/g)?.length || 0, 0);
}