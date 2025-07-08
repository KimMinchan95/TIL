function solution(arr, query) {
    return query.reduce((acc, cur, i) => {
        if (i % 2) {
            acc = acc.slice(cur)
        } else {
            acc = acc.slice(0, cur + 1)
        }
        return acc;
    }, [...arr])
}