function solution(num, k) {
    const idx = [...num.toString()].findIndex(cur => cur === k.toString())
    return idx === -1 ? -1 : idx + 1;
}