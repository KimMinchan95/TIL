function solution(n, m, section) {
    let result = 0;
    
    // 칠해진 구역의 끝
    let last = -1; 
    
    section.forEach(sec => {
       if(sec > last) {
           last = sec + m - 1;
           result++;
       } 
    });
    
    return result;
}