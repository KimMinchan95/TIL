function solution(bridge_length, weight, truck_weights) {
    const trucks = truck_weights.reverse();
    
    let b_weight = 0;
    let sec = 0;
    const b = []; // {w: 무게, st: 시작시간}
    
    while (trucks.length) {
        sec++;
        
        if (b.length && sec - b[0].st >= bridge_length) {
            const truck = b.shift();
            b_weight -= truck.w;
        }
        
        const nextWeight = b_weight + trucks.at(-1);
        if (trucks.length && nextWeight <= weight) {
            const truck = trucks.pop();
            
            b.push({
                w: truck,
                st: sec,
            })
            
            b_weight += truck;
        }
    }
    
    return sec + bridge_length;
}