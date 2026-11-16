function solution(sizes) {
    return sizes.reduce(([x, y], [cx, cy]) =>  [Math.max(Math.min(x, y), Math.min(cx, cy)), Math.max(Math.max(x, y), Math.max(cx, cy))], [0, 0]).reduce((acc, cur) => acc * cur, 1);
}