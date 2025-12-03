const isAble = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (const k1 of keys1) {
        const v1 = object1[k1];
        const v2 = object2[k1];
        
        if (v1 !== v2) return false;
    }
    
    return true;
}

function solution(want, number, discount) {
    let answer = 0;
    
    const wantObj = Object.fromEntries(want.map((w, i) => [w, number[i]]));
    
    for (let i = 0; i < discount.length - 9; i++) {
        const sliced = discount.slice(i, i + 10);
        
        const disObj = sliced.reduce((acc, cur) => {
            if (acc[cur]) {
                acc[cur]++;
            } else {
                acc[cur] = 1;
            }
            return acc;
        }, {});
        
        if (isAble(wantObj, disObj)) {
            answer++;
        }
    }
    
    return answer;
}