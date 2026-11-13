class Solution {
    public long solution(long n) {
        double sqrt = Math.sqrt(n);
        
        if (sqrt % 1 == 0) {
            return (long) Math.pow(sqrt + 1, 2);
        }
        return -1;
    }
}