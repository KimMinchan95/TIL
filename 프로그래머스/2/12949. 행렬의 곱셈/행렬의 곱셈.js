function solution(arr1, arr2) {
    const [r1, c1] = [arr1.length, arr1[0].length];
    const [r2, c2] = [arr2.length, arr2[0].length];
    
    const result = Array.from({ length: r1 }, () => new Array(c2).fill(0));
    
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}