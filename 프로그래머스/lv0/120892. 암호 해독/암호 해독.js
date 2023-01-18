function solution(cipher, code) {
    return [...cipher].reduce((acc, cur, i) => {
        if (!((i + 1) % code)) {
            acc += cur;
        }
        return acc;
    }, '')
}