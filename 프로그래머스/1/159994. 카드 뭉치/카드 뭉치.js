class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    constructor(array) {
        this.items = array;
        this.rear = array.length;
    }
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    first() {
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(cards1, cards2, goal) {
    const queue1 = new Queue(cards1);
    const queue2 = new Queue(cards2);
    const goalQueue = new Queue(goal);
    
    while(!goalQueue.isEmpty()) {
        if (queue1.first() === goalQueue.first()) {
            queue1.pop();
            goalQueue.pop();
            continue;
        }
        
        if (queue2.first() === goalQueue.first()) {
            queue2.pop();
            goalQueue.pop();
            continue;
        }
        
        break;
    }
    
    return goalQueue.isEmpty() ? 'Yes' : 'No';
}