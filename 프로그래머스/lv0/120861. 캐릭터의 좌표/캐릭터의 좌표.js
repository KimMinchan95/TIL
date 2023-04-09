const dir = {
    'left': [-1, 0],
    'right': [1, 0],
    'up': [0, 1],
    'down': [0, -1],
}

function solution(keyinput, board) {
    const [fullX, fullY] = board;
    
    const xRange = (fullX - 1) / 2;
    const yRange = (fullY - 1) / 2;
    
    const position = [0, 0];
    
    keyinput.forEach(input => {
        const [x, y] = position;
        const [dX, dY] = dir[input];
        
        if (Math.abs(x + dX) <= xRange) {
            position[0] = x + dX;
        }
        
        if (Math.abs(y + dY) <= yRange) {
            position[1] = y + dY;
        }
    });
    
    return position;
}