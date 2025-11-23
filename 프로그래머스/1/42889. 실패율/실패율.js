function solution(N, stages) {
    // 실패율이 담긴 배열 idx: 스테이지 [실패, 도전]
    const result = Array.from({ length: N }, () => [0, 0]);
    
    stages.forEach(stage => {
        // 도전 수
        const lastStage = Math.min(stage, N);
        for (let i = 0; i < lastStage; i++) {
            result[i][1]++;
        }
        
        // 실패 수
        if (result[stage - 1]) {
          result[stage - 1][0]++;  
        }
    });
    
    return result.map(([fail, stage], idx) => [idx + 1, fail / stage]).sort(([_,a], [__,b]) => b - a).map(cur => cur[0]);
}