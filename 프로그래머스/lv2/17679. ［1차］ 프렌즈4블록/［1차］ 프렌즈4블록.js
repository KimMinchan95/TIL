function solution(m, n, board) {
    const boards = board.map(row => [...row]);
    
    while (true) {
        const queue = [];
    
        for (let c = 0; c < m - 1; c++) {
            for (let r = 0; r < n - 1; r++) {
                const friend = boards[c][r];
                if (friend && friend === boards[c + 1][r] && friend === boards[c][r + 1] && friend === boards[c + 1][r + 1]) {
                    queue.push([c, r]);
                }
            }
        }
        
        if (!queue.length) {
            return boards.flat().filter(board => !board).length;
        }
        
        queue.forEach(([c, r]) => {
            boards[c][r] = null;
            boards[c + 1][r] = null;
            boards[c][r + 1] = null;
            boards[c + 1][r + 1] = null;
        });
        
        for (let c = m - 1; c > 0; c--) {
            for (let r = 0; r < n; r++) {
                for (let h = c - 1; h >= 0; h--) {
                    if (boards[h][r] && !boards[c][r]) {
                        boards[c][r] = boards[h][r];
                        boards[h][r] = null;
                        break;
                    }
                }
            }
        }
    }
}