function solution(k, dungeons) {
    const set = new Set();
    
    const len = dungeons.length
    
    const mix = (pick, rest) => {
        if (pick.length === len) {
            set.add(pick);
            return;
        }
        
        rest.forEach((curRest, i) => {
            const nRest = rest.filter((_, idx) => i !== idx);
            mix([...pick, curRest], nRest);
        });
    }
    
    mix([], dungeons);
    
    const resultList = [];
    for (const dunMix of set) {
        let restK = k;
        let score = 0;
        for (let i = 0; i < len; i++) {
            const [needT, t] = dunMix[i];
            if (needT <= restK) {
                score++;
                restK -= t;
                continue;
            }
            break;
        }
        resultList.push(score);
    }
    
    return Math.max(...resultList);
}