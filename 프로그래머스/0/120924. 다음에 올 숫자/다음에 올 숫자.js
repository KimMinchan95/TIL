function solution(common) {
    const firstDiff = common[1] - common[0];
    const secondDiff = common[2] - common[1];
    
    const isCommonDiff = firstDiff === secondDiff;
    const last = common[common.length - 1];
    
    return isCommonDiff ? last + firstDiff : last * secondDiff / firstDiff;  
}