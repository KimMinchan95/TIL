function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);
    
    let h = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] >= h + 1) {
            h++;
            continue;
        }
        break;
    }
    
    return h;
}