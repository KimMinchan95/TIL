function solution(n, lost, reserve) {
    const stu = Array(n).fill(1);
    lost.forEach(l => stu[l - 1] -= 1);
    reserve.forEach(r => stu[r - 1] += 1);
    
    for (let i = 0; i < stu.length; i++) {
        const s = stu[i];
        
        if (s !== 2) continue;
        if (stu[i - 1] === 0) {
            stu[i] = 1;
            stu[i - 1] = 1;
            continue;
        }
        
        if (stu[i + 1] === 0) {
            stu[i] = 1;
            stu[i + 1] = 1;
        }
    }
    
    return stu.filter(s => s > 0).length;
}