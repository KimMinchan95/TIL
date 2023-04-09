function solution(m, n, board) {
    const boards = board.map(row => [...row]);
    
    while (true) {
        const queue = [];
    
        for (let r = 0; r < m - 1; r++) {
            for (let c = 0; c < n - 1; c++) {
                const friend = boards[r][c];
                if (friend && friend === boards[r + 1][c] && friend === boards[r][c + 1] && friend === boards[r + 1][c + 1]) {
                    queue.push([r, c]);
                }
            }
        }
        
        if (!queue.length) {
            return boards.flat().filter(board => !board).length;
        }
        
        queue.forEach(([r, c]) => {
            boards[r][c] = null;
            boards[r + 1][c] = null;
            boards[r][c + 1] = null;
            boards[r + 1][c + 1] = null;
        });
        
        for (let r = m - 1; r > 0; r--) {
            for (let c = 0; c < n; c++) {
                for (let h = r - 1; h >= 0; h--) {
                    if (boards[h][c] && !boards[r][c]) {
                        boards[r][c] = boards[h][c];
                        boards[h][c] = null;
                        break;
                    }
                }
            }
        }
    }
}