function solution(n, works) {
    const totalWork = works.reduce((a, b) => a + b, 0);
    if (totalWork <= n) return 0;
    
    works.sort((a, b) => b - a);
    let remain = n;
    
    while (remain !== 0) {
        const max = works[0];
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] >= max) {
                remain--;
                works[i]--;
            }
            
            if (remain === 0) break;
        }
    }
    
    return works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}