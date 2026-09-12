class Solution {
    public int solution(int num) {
        long n = num;
        int answer = 0;
        
        while (n != 1 && answer < 500) {
            answer++;
            
            if(isOdd(n)) {
                n = n * 3 + 1;
            } else {
                n /= 2;
            }
        }
        
        return (n != 1) ? -1 : answer;
    }
    
    private static boolean isOdd(long num) {
        return num % 2 != 0;
    }
}