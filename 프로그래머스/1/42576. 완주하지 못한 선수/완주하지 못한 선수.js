function solution(participant, completion) {
    const map = participant.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
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
    
    return map.keys().next().value;
}