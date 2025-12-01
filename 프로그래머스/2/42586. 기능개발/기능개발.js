function solution(progresses, speeds) {
    const result = [];
    
    const left = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let count = 0;
    let max = left[0];
    
    for (let i = 0; i < left.length; i++) {
        if (left[i] <= max) {
            count++;
            continue;
        }
        result.push(count);
        count = 1;
        max = left[i];
    }
    
    result.push(count);
    
    return result;
}