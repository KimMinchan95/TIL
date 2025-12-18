function solution(n, money) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    
    for (const m of money) {
        for (let i = m; i <= n; i++) {
            dp[i] += dp[i - m];
        }
    }
    
    return dp[n];
}