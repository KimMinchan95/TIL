const sumArr = (arr) => arr.reduce((acc, cur) => acc + cur, 0);


function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    if (arr1Len !== arr2Len) return arr1Len > arr2Len ? 1 : -1;
    
    const sum1 = sumArr(arr1);
    const sum2 = sumArr(arr2);

    if (sum1 === sum2) return 0;
    return sum1 > sum2 ? 1 : -1;
}