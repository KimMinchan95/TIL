const getPosition = park => {
    return park.reduce((acc, cur, i) => {
        const findS = cur.indexOf('S');
        
        if (findS !== -1) {
            return [i, findS];
        } 
        
        return acc;
    }, []);
}

const DIRS = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
}

function solution(park, routes) {
    let position = getPosition(park);
    
    routes.forEach(route => {
        const [dir, cnt] = route.split(' ');
        
        const [y, x] = DIRS[dir];
        
        let m = [...position];
        
        for (let i = 0; i < Number(cnt); i++) {
            if(park[m[0] + y] && ['S', 'O'].includes(park[m[0] + y][m[1] + x])) {
                m = [m[0] + y, m[1] + x];
            } else {
                break;
            }
            
            if (i === Number(cnt) - 1) {
                position = m;
            }
        }
    });
    
    return position
}