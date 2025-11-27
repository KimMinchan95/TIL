function solution(board, moves) {
    let result = 0;
    const stack = [];
    
    const boardStacks = Array.from({ length: board[0].length }, () => []);
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (!board[i][j]) continue;
            boardStacks[j].push(board[i][j]);
        }
    }
    
    moves.forEach(move => {
        const m = move - 1;
        const poped = boardStacks[m].pop();
        if (!poped) return;
        
        const top = stack[stack.length - 1];
        
        if (poped === top) {
            result += 2
            stack.pop();
            return;
        }
        stack.push(poped);
    });
    
    return result;
}