function solution(participant, completion) {
    const map = participant.reduce((acc, cur) => {
        if (acc.has(cur)) {
            acc.set(cur, acc.get(cur) + 1);
        } else {
            acc.set(cur, 1);   
        }
        return acc;
    }, new Map());
    
    completion.forEach(cur => {
        const nextCount = map.get(cur) - 1;
        if (!nextCount) {
            map.delete(cur);
        } else {
            map.set(cur, nextCount);
        }
    });
    
    return [...map][0][0]
}