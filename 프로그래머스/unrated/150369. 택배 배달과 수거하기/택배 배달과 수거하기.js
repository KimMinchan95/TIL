function solution(cap, n, deliveries, pickups) {
    let result = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        while (deliveries[i] > 0 || pickups[i] > 0) {
            deliveries[i] -= cap;
            pickups[i] -= cap;
            result += 2 * (i + 1);
        }
        
        if (i === 0) break;
        // 이전에 트럭 칸이 남아있었으면 수거해감
        deliveries[i - 1] += deliveries[i];
        pickups[i - 1] += pickups[i];   
    }
    
    return result;
}