function solution(want, number, discount) {
    let result = 0;
    
    // 장바구니 목록 이름순으로 오름차순으로 정렬한 배열을 만들고 JSON형태로 만든다 (비교하기 위해)
    const wanted = JSON.stringify(want.reduce((acc, cur, idx) => {
        let num = number[idx];
        
        while(num--) {
            acc.push(cur);
        }
        
        return acc;
    }, []).sort());
    
    // dicount배열을 돌면서 10개씩 짤라서 JSON 형태로 만들어서 장바구니 목록과 비교한다.
    for (let i = 0; i < discount.length - 9; i++) {
        const sliced = JSON.stringify(discount.slice(i, i + 10).sort());
        
        if (wanted === sliced) result++;
    }
    
    return result;
}