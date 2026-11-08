function solution(progresses, speeds) {
    const result = [];
    let day = 0;
    let work = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const lastP = 100 - progresses[i];
        const minD = Math.ceil(lastP / speeds[i]);
        if (work !== 0 && minD > day) {
            result.push(work);
            work = 0;
        }
        day = Math.max(minD, day);
        
        if (minD <= day) {
            work++
        }
    }
    if (work) {
        result.push(work);
    }
    
    return result;
}