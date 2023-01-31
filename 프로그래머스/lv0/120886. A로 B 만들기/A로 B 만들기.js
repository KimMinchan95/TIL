function solution(before, after) {
    const sortedBefore = [...before].sort().join('');
    const sotredAfter = [...after].sort().join('');
    
    return sortedBefore === sotredAfter ? 1 : 0;
}