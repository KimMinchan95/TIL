function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let cnt = 0;
    let left = 0;
    let right = people.length - 1;
    while (left <= right) {
        const cur = people[right];
        if (limit - cur - people[left] >= 0) {
            left++;
        }
        right--;
        cnt++;
    }
    
    return cnt;
}