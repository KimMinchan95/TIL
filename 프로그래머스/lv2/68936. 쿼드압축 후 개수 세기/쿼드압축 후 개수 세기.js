function solution(arr) {
    const result = [0, 0];
    
    const getCompress = (row, col, len) => {
        let num = '초기 상태';
        label: for (let i = row; i < row + len; i++) {
            for (let j = col; j < col + len; j++) {
                const cur = arr[i][j];
                if (num === '초기 상태' || num === cur) {
                    num = cur;
                } else {
                    num = '압축 불가';
                    break label;
                }
            }
        }
        
        if (num === '압축 불가') {
            const mid = len / 2;
            getCompress(row, col, mid);
            getCompress(row + mid, col, mid);
            getCompress(row, col + mid, mid);
            getCompress(row + mid, col + mid, mid);
            return;
        }
        
        result[num]++;
    }
    
    getCompress(0, 0, arr[0].length);
    
    return result;
}