function solution(brown, yellow) {
    const max = (brown - 4) / 2;
    
    for (let x = 1; x < max; x++) {
        const maxY = max - x;
        for (let y = 1; y <= maxY; y++) {
            if (x * y === yellow) {
                return [y + 2, x + 2];
            }
        }
    }
    
    return 'noooooooo!';
}