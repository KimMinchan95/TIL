function solution(wallpaper) {
    return wallpaper.reduce((acc, cur, i) => {
        const vertax = [i, cur.indexOf('#'), i + 1, cur.lastIndexOf('#') + 1];
        
        if (cur.indexOf('#') === -1) return acc;
        
        if (vertax[0] < acc[0]) acc[0] = vertax[0];
        if (vertax[1] < acc[1]) acc[1] = vertax[1];
        
        if (vertax[2] > acc[2]) acc[2] = vertax[2];
        if (vertax[3] > acc[3]) acc[3] = vertax[3];
        
        return acc;
    }, [wallpaper.length + 1, wallpaper[0].length + 1, -1, -1]);
}