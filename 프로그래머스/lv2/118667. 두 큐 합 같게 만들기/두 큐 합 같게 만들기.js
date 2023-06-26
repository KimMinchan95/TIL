const getSum = (acc, cur) => acc + cur;

function solution(queue1, queue2) {
    let firstSum = queue1.reduce(getSum);
    let secondSum = queue2.reduce(getSum);
    
    const mid = (firstSum + secondSum) / 2;
    
    const queue = [...queue1, ... queue2];
    
    let pointer1 = 0
    let pointer2 = queue1.length;
    
    for (let i = 0; i < queue1.length * 3; i++) {
        if (firstSum === mid) {
            return i;
        }
        
        firstSum = firstSum > mid ? firstSum - queue[pointer1++ % queue.length] : firstSum + queue[pointer2++ % queue.length];
    }
    
    return -1;   
}