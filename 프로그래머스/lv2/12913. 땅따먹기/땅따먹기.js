function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            const splicedArr = land[i - 1].slice();
            splicedArr.splice(j, 1);
            land[i][j] += Math.max(...splicedArr);
        }
    }
    
    return Math.max(...land[land.length - 1]);
}