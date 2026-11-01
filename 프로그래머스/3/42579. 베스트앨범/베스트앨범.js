function solution(genres, plays) {
    const map = genres.reduce((acc, cur, i) => {
        acc.set(cur, (acc.get(cur) || 0) + plays[i]);
        return acc;
    }, new Map());
    
    const genreSort = [...map].sort((a, b) => b[1] - a[1]).map(cur => cur[0]);
    
    const sortAsPlays = genres.map((cur, i) => [cur, i, plays[i]]).sort((a, b) => {
        if (b[2] === a[2]) return a[1] - b[1];
        return b[2] - a[2];
    });
    
    const genreMap = sortAsPlays.reduce((acc, cur) => {
        acc.set(cur[0], [...acc.get(cur[0]) || [], cur[1]]);
        return acc;
    }, new Map());

    
    return genreSort.reduce((acc, cur) => {
        const genreList = genreMap.get(cur);
        const len = genreList.length;
        for (let i = 0; i < Math.min(len, 2); i++) {
            acc.push(genreList[i]);
        }
        return acc;
    }, []);
}