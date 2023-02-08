function solution(array, n) {
    array.sort((a, b) => a - b);
    return array[array.reduce((closestIdx, cur, idx) => {
        if (!idx) return 0;
        
        const prevABS = Math.abs(n - array[closestIdx]);
        const curABS = Math.abs(n - cur);
        
        if (prevABS > curABS) {
            return idx;
        }
        
        return closestIdx;
    }, 0)];
}