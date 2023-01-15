function solution(n, times) {
    times.sort((a, b) => a - b);
    let result = 0;
    let right = times[times.length - 1] * n;
    let left = 0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const immigration = times.reduce((acc, time) => {
            return acc + Math.floor(mid / time);
        }, 0);
        if (immigration >= n) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}