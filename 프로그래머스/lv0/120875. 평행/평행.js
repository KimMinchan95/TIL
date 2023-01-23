function solution(dots) {
    const [firstX, firstY] = dots[0];
    for (let i = 1; i < dots.length; i++) {
        const [curX, curY] = dots[i];
        
        const [slopeX, slopeY] = [firstX - curX, firstY - curY];
        
        const slope1 = slopeX / slopeY;
        
        const lastNum = [1, 2, 3].filter(cur => cur !== i);
        
        const [num1, num2] = lastNum;
        
        const slope2 = (dots[num1][0] - dots[num2][0]) / (dots[num1][1] - dots[num2][1]);
        
        if (slope1 === slope2) return 1;
    }
    
    return 0;
}