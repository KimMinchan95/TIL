function solution(word) {
    const list = [];
    
    const W = ['A', 'E', 'I', 'O', 'U'];
    
    let count = 1;
    const makeDic = (pick) => {
        if (pick.length > 5) return;
        if (pick.length >= 1) {
            list.push(pick);
            count++;
        }
        
        for (let i = 0; i < W.length; i++) {
            makeDic(pick + W[i]);
        }
    }
    makeDic('');
    
    return list.findIndex(p => p === word) + 1;
}