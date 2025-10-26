function solution(n, lost, reserve) {
    const lostStu = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    const reserveStu = reserve.filter(num => !lost.includes(num)).sort((a, b) => a - b);
    
    let result = n - lostStu.length;
    
    for (let i = 0; i < lostStu.length; i++) {
        const lostOne = lostStu[i];
        
        for (let j = 0; j < reserveStu.length; j++) {
            const reserveOne = reserveStu[j];
            
            if ([lostOne - 1, lostOne + 1].includes(reserveOne)) {
                result++;
                reserveStu[j] = -1;
                break;
            }
        }
    }
    
    return result;
}