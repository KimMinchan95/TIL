const maxNum = Number.MAX_SAFE_INTEGER;

function solution(keymap, targets) {
    const keyMap = keymap.reduce((acc, key) => {
        [...key].forEach((cur, idx) => {
            const getIdx = acc.get(cur) ?? maxNum;
            acc.set(cur, getIdx > idx + 1 ? idx + 1 : getIdx);
        });
        
        return acc;
    }, new Map());
    
    return targets.map(target => {
        let result = 0;
        for (let i = 0; i < target.length; i++) {
            const cur = target[i];
            result += keyMap.get(cur);
            if (!keyMap.get(cur)) return -1;
        }
        return result;
    });
}