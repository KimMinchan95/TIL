const DEAD_LINE = 24 * 60 - 1;

function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    
    const map = new Map();
    
    records.forEach(record => {
        const [time, licensePlate, state] = record.split(' ');
        const [hour, minute] = time.split(':');
        const convertedTime = Number(hour) * 60 + Number(minute);
        
        const lastParking = map.get(licensePlate);
    
        map.set(licensePlate, {
            time: convertedTime,
            state,
            // IN 이면서 처음들어왔으면 0을 넣는다. IN 이면서 재 방문이면 누적 주차시간을 넣는다. 나갈때는 누적시간 + 현재시간 - 마지막 출입시간으로 누적시간을 업데이트 한다.
            parkingTime: state === 'IN' ? lastParking?.parkingTime ? lastParking.parkingTime : 0 : lastParking.parkingTime + convertedTime - lastParking.time,
        });
    });

    return [...map].sort((first, second) => first[0] - second[0]).map(([_, {time, state, parkingTime}]) => {
        const calculationTime = state === 'IN' ? parkingTime + DEAD_LINE - time : parkingTime;
        
        // 기본 시간 이하라면 기본요구 청구
        return defaultTime > calculationTime ? defaultFee : defaultFee + Math.ceil((calculationTime - defaultTime) / unitTime) * unitFee;
    });
}