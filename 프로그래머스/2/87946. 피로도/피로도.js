function dfs (curK, count, visited, dungeons) {
    let max = count;
    for (let i = 0; i < dungeons.length; i++) {
        if (curK >= dungeons[i][0] && !visited[i]) {
            visited[i] = true;
            max = Math.max(max, dfs(curK - dungeons[i][1], count + 1, visited, dungeons));
            visited[i] = false;
        }
    }
    return max;
}

function solution(k, dungeons) {
    const visited = Array(dungeons).fill(false);
    return dfs(k, 0, visited, dungeons);
}