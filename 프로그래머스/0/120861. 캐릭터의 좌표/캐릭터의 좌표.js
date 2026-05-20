function solution(keyinput, board) {
    const keys = {
        up: [0, 1],
        down: [0, -1],
        left: [-1,0],
        right: [1, 0]
    }
    
    const xLen = (board[0] - 1) / 2;
    const yLen = (board[1] - 1) / 2;
    
    let loc = [0, 0];
    
    
    keyinput.forEach(key => {
        const dir = keys[key];
        const [nextX, nextY] = [loc[0] + dir[0], loc[1] + dir[1]];
        if (nextX < -xLen || nextX > xLen || nextY < -yLen || nextY > yLen) {
            return;
        }
        loc = [nextX, nextY];
    });
    return loc
}