function solution(arr, n) {
    if (arr.length % 2) {
        return arr.map((num, i) => i % 2 ? num : num + n);
    }
    return arr.map((num, i) => i % 2 ? num + n : num);
}