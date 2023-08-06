function solution(board, moves) {
    const stack = [];
    let result = 0;
    
    moves.forEach(move => {
        move -= 1;
        
        for (let i = 0; i < board[0].length; i++) {
            const curDoll = board[i][move];
            if (!!curDoll) {
                if (stack[stack.length - 1] === curDoll) {
                    stack.pop();
                    result += 2;
                } else {
                    stack.push(curDoll);   
                }
                board[i][move] = 0;
                break;
            }
        }
    });
    
    return result;
}