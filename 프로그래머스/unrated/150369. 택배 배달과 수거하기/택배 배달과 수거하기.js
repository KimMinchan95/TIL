function solution(cap, n, deliveries, pickups) {
    let result = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        while (deliveries[i] > 0 || pickups[i] > 0) {
            deliveries[i] -= cap;
            pickups[i] -= cap;
            result += 2 * (i + 1);
        }
        
        if (deliveries[i] < 0) {
            deliveries[i - 1] += deliveries[i];
        }
        
        if (pickups[i] < 0) {
            pickups[i - 1] += pickups[i];
        }
    }
    
    return result;
}