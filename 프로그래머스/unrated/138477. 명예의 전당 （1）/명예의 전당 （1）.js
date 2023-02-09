function solution(k, score) {
    const honer = [];
    
    return score.map(cur => {
        honer.push(cur);
        
        honer.sort((a, b) => b - a);
        
        if (honer.length > k) {
            honer.pop();
        }
    
        return honer[honer.length - 1];
    });
}