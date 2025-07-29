function solution(arr, idx) {
    const num = arr.map((num, i) => num === 1 && i >= idx ? i + 1 : 0).findIndex(num => num);
    if (num === -1) return -1;
    return num;
}