const makeArr = str => {
    return [...str].reduce((acc, cur, i) => {
        if (str[i + 1] === undefined) return acc;
        const bundle = (cur + str[i + 1]).toLowerCase();
        
        if([...bundle.matchAll(/[a-z]/g)].length === 2) {
            acc.push(bundle);
        }
        
        return acc;
    }, []);
}

function solution(str1, str2) {
    const first = makeArr(str1);
    const second = makeArr(str2);
    
    const same = [...new Set([...first, ...second])];
    
    const { intersection, union } = same.reduce((acc, cur) => {
        const firstMatch = first.filter(str => str === cur).length;
        const secondMatch = second.filter(str => str === cur).length;
        
        acc.intersection += Math.min(firstMatch, secondMatch);
        acc.union += Math.max(firstMatch, secondMatch);
        
        return acc;
    }, {
        intersection: 0,
        union: 0,
    });
    
    return Math.floor((union ? intersection / union : 1) * 65536);
}