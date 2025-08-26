function solution(k, score) {
    return score.reduce((acc, cur) => {
        acc.horner.push(cur);
        
        acc.horner.sort((a, b) => b - a);
        
        if (acc.horner.length < k) {
            acc.result.push(acc.horner[acc.horner.length - 1]);
        } else {
            acc.result.push(acc.horner[k - 1]);
        }
        
        return acc;
    }, {
        result: [],
        horner: [],
    }).result;
}