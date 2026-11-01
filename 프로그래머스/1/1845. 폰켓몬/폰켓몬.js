function solution(nums) {
    const size = new Set(nums).size;
    const half = nums.length / 2;
    return Math.min(size, half);
}