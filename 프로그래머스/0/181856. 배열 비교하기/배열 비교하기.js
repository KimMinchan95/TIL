function solution(arr1, arr2) {
    // 배열의 길이 계산
    const arr1Len = arr1.length
    const arr2Len = arr2.length
    if(arr1Len !== arr2Len) return arr1Len > arr2Len ? 1 : -1
    
    // 요소의 합 계산
    const arr1Sum = arr1.reduce((acc, cur) => acc+cur, 0) 
    const arr2Sum = arr2.reduce((acc, cur) => acc+cur, 0)
    if(arr1Sum === arr2Sum) return 0
    return arr1Sum > arr2Sum ? 1: -1
}