function solution(board) {
    const DIR = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const s = board[i][j];
            if (s !== 1) continue;
            
            DIR.forEach(d => {
                const [x, y] = d;
                const [nx, ny] = [i + x, j + y];
                const nextNum = board?.[nx]?.[ny];
                if (nextNum !== 0 || nextNum === 1) return;
                board[nx][ny] = 2;
            });
        }
    }

    return board.reduce((acc1, cur1) => {
        return acc1 + cur1.reduce((acc2, cur2) => {
            return acc2 + (cur2 === 0 ? 1 : 0);
        }, 0);
    }, 0);
}