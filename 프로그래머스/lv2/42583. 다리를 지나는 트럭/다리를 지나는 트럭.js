function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let bridgeWeight = 0;
    
    const queue = new Array(bridge_length).fill(0);
    
    while (bridgeWeight || truck_weights.length) {
        bridgeWeight -= queue.shift();
        
        if (truck_weights[0] && bridgeWeight + truck_weights[0] <= weight) {
            const curTruck = truck_weights.shift();
            bridgeWeight += curTruck;
            queue.push(curTruck);
        } else {
            queue.push(0);
        }
        
        count++;
    }
    
    return count;
}