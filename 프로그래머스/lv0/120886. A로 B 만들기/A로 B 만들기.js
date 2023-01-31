function solution(before, after) {
    let result = 1;
    
    const sortedBefore = [...before].sort();
    const sotredAfter = [...after].sort();
    
    sortedBefore.forEach((string, i) => {
        if (string !== sotredAfter[i]) result = 0;
    });
    
    return result;
}