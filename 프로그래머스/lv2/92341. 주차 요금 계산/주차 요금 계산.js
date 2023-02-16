const DEAD_LINE = 24 * 60 - 1;

function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    
    const map = new Map();
    
    records.forEach(record => {
        const [time, licensePlate, state] = record.split(' ');
        const [hour, minute] = time.split(':');
        const convertedTime = Number(hour) * 60 + Number(minute);
        
        const lastParking = map.get(licensePlate);
    
        if (state === 'IN') {
            map.set(licensePlate, {
                time: convertedTime,
                state,
                parkingTime: lastParking?.parkingTime ? lastParking.parkingTime : 0,
            });
        } else {
            map.set(licensePlate, {
                time: convertedTime,
                state,
                parkingTime: lastParking.parkingTime + convertedTime - lastParking.time,
            });
        }
    });

    return [...map].sort((first, second) => first[0] - second[0]).map(([_, {time, state, parkingTime}]) => {
        const calculationTime = state === 'IN' ? parkingTime + DEAD_LINE - time : parkingTime;
        
        // 기본 시간 이하라면 기본요구 청구
        return defaultTime > calculationTime ? defaultFee : defaultFee + Math.ceil((calculationTime - defaultTime) / unitTime) * unitFee;
    });
}