function solution(players, m, k) {
    let result = 0;
    const map = new Map();
    map.set(-1, 1)

    players.forEach((player, i) => {
        // 종료된 서버 지우기
        if (map.has(i)) {
            map.delete(i)
        }
        
        // 증설된 서버 수
        const expansion = Array.from(map.values()).reduce((acc, cur) => acc + cur, 0);
        
        // 증설 하기
        if (player >= m * expansion) {
            const needed = Math.floor((player - m * expansion) / m + 1);
            map.set(i + k, needed)
            result += needed
        }
    });
    
    return result;
}