function solution(players, callings) {
    const map = new Map(players.map((player, idx) => [player,idx]));
    
    callings.forEach((call) => {
        const idx = map.get(call);
        const frontPlayer = players[idx - 1];
        
        map.set(frontPlayer, idx);
        map.set(call, idx - 1);
        
        players[idx] = frontPlayer;
        players[idx - 1] = call;
    });
    
    const result = [];
    map.forEach((value, key) => result.push([value, key]));
    return result.sort(([a,_],[b,__]) => a - b).map(([_, key]) => key);
}