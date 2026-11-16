function solution(sizes) {
    return sizes.reduce((acc, cur) => {
        const [x, y] = acc;
        const [cx, cy] = cur;
        const [prevMin, prevMax] = [Math.min(x, y), Math.max(x, y)];
        const [curMin, curMax] = [Math.min(cx, cy), Math.max(cx, cy)];
        return [Math.max(prevMin, curMin), Math.max(prevMax, curMax)];
    }, [0, 0]).reduce((acc, cur) => acc * cur, 1);
}