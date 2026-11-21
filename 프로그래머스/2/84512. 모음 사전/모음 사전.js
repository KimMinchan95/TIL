function solution(word) {
    const map = new Map();
    
    const W = ['A', 'E', 'I', 'O', 'U'];
    
    let count = 1;
    const makeDic = (pick) => {
        if (pick.length > 5) return;
        if (pick.length >= 1) {
            map.set(pick, count);
            count++;
        }
        
        for (let i = 0; i < W.length; i++) {
            makeDic(pick + W[i]);
        }
    }
    makeDic('');
    
    return map.get(word);
}