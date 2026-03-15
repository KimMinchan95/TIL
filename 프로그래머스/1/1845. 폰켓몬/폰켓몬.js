function solution(nums) {
    const set = new Set(nums);
    const half = nums.length / 2;
    return Math.min(set.size, half);
}