function solution(participant, completion) {
    const hash = completion.reduce((map, com) => {
        if (map.has(com)) {
            map.set(com, map.get(com) + 1);
        } else {
            map.set(com, 1);
        }
        return map;
    }, new Map());
    
    let result = '';
    participant.forEach(part => {
        const exist = hash.has(part);
        if (exist) {
            const count = hash.get(part) - 1;
            if (count === 0) {
                hash.delete(part);
            } else {
                hash.set(part, count);
            }
            return;
        }
        result = part;
    });
    return result;
}