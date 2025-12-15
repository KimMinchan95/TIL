function solution(info, n, m) {
    let dp = new Array(m).fill(Infinity);
    dp[0] = 0;

    for (const [a, b] of info) {
        const next = new Array(m).fill(Infinity);

        for (let j = 0; j < m; j++) {
            if (dp[j] === Infinity) continue;

            next[j] = Math.min(next[j], dp[j] + a);

            if (j + b < m) {
                next[j + b] = Math.min(next[j + b], dp[j]);
            }
        }

        dp = next;
    }

    const minA = Math.min(...dp);
    return minA >= n ? -1 : minA;
}