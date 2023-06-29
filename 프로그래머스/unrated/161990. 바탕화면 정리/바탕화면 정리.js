function solution(wallpaper) {
    return wallpaper.reduce((acc, cur, i) => {
        const first = [i, cur.indexOf('#')];
        const last = [i + 1, cur.lastIndexOf('#') + 1];
        
        if (cur.indexOf('#') === -1) return acc;
        
        if (first[0] < acc[0]) acc[0] = first[0];
        if (first[1] < acc[1]) acc[1] = first[1];
        
        if (last[0] > acc[2]) acc[2] = last[0];
        if (last[1] > acc[3]) acc[3] = last[1];
        
        return acc;
    }, [wallpaper.length + 1, wallpaper[0].length + 1, -1, -1]);
}