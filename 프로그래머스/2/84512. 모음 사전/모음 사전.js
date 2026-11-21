function solution(word) {
    const W = ['A', 'E', 'I', 'O', 'U'];
    
    let count = 1;
    let stop = false;
    const makeDic = (pick) => {
        if (pick === word) stop = true;
        if (stop) return;
        if (pick.length >= 1) count++;
        
        for (let i = 0; i < W.length; i++) {
            if (pick.length === 5) break;
            makeDic(pick + W[i]);
        }
    }
    makeDic('');
    
    return count;
}