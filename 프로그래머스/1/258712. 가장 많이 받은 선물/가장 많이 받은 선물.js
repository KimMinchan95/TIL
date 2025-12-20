function solution(friends, gifts) {
    const len = friends.length;
    const graph = Array.from({ length: len }, () => Array(len).fill(0));
    const giftCount = Object.fromEntries(Array.from({ length: len }, (_, i) => [i, 0]));
    const match = Object.fromEntries(friends.map((f, i) => [f, i]));
    
    gifts.forEach(gift => {
        const [f, t] = gift.split(' ').map(s => match[s]);
        graph[f][t]++;
        giftCount[f]++;
        giftCount[t]--;
    });
    
    const count = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const diff = graph[i][j] - graph[j][i];
            
            if (diff === 0) {
                const giftDiff = giftCount[i] - giftCount[j];
                if (giftDiff > 0) count[i]++;
                if (giftDiff < 0) count[j]++;
                continue;
            }
            
            if (diff > 0) count[i]++;
            if (diff < 0) count[j]++;
        }
    }
    
    return Math.max(...count);
}