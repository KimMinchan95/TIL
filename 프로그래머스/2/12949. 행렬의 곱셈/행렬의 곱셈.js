function solution(arr1, arr2) {
    const result = [];
    
    for (let line = 0; line < arr1.length; line++) {
        const resultLine = [];
        
        for (let y = 0; y < arr2[0].length; y++) {
            let sum = 0;
            
            for (let x = 0; x < arr2.length; x++) {
                sum += arr1[line][x] * arr2[x][y];
            }
            
            resultLine.push(sum);
        }
        
        result.push(resultLine);
    }
    
    return result;
}