class Solution {
    public long solution(int a, int b) {
        long min = Math.min(a, b);
        long max = Math.max(a, b);
        
        return (max + min) * (max - min + 1) / 2;
    }
}