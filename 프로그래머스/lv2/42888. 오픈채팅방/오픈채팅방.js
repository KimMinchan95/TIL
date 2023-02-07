function solution(record) {
    const result = [];    
    const map = new Map();
    
    record.forEach(singleRecord => {
        const [state, id, name] = singleRecord.split(' ');
        
        if (state !== 'Change') result.push({id, state});
        
        if (state === 'Leave') return;
        
        map.set(id, name);
    });

    return result.map(({id, state}) => `${map.get(id)}님이 ${state === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`);
}