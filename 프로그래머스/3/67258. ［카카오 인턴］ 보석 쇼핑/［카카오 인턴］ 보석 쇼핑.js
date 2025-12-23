function solution(gems) {
    let result = [1, gems.length];
    const fullSize = new Set(gems).size;
    const map = new Map();
    
    for (let i = 0; i < gems.length; i++) {
        const curGem = gems[i];
        map.delete(curGem);
        map.set(curGem, i + 1)
        if (map.size === fullSize) {
            const card = [map.values().next().value, i + 1];
            if (result[1] - result[0] > card[1] - card[0]) result = card;
        }
    }
    
    return result;
}