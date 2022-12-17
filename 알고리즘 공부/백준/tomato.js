// 시간초과를 해결하지 못해서 https://tesseractjh.tistory.com/190 블로그를 보고 풀이 수정

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./example/tomato.txt').toString().trim().split('\n');

const tranformData = data => data.split(' ').map(Number);

const directions = [[-1, 0, 0], [1, 0, 0], [0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1]];

class Node {
    constructor(item) {
        this.prev = null;
        this.next = null;
        this.item = item;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(item) {
        const node = new Node(item);
        if (this.size) {
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        } else {
            this.front = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        const node = this.front;
        if (this.size === 1) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = node.next;
            this.front.prev = null;
        }
        this.size--;
        return node.item;
    }
}

const solution = () => {
    const [[M, N, H], ...boxes] = input.map(tranformData);
    
    // 3차원 맵 만들기
    const map = [];
    let floor = [];
    for (let i = 1; i <= boxes.length; i++) {
        floor.push(boxes[i - 1]);
        if (i % N === 0) {
            map.push(floor);
            floor = [];
        }
    }

    const queue = new Queue();
    let output = 0;
    let zeroCount = 0;

    for (let h = 0; h < H; h++) {
        for (let n = 0; n < N; n++) {
            for (let m = 0; m < M; m++) {
                const position = map[h][n][m];
                if (position === 1) {
                    queue.enqueue([h, n, m, 0]);
                }
                if (position === 0) {
                    zeroCount++;
                }
            }
        }
    }

    while (queue.size) {
        const [h, n, m, count] = queue.dequeue();
        directions.forEach(direction => {
                const [dh, dn, dm] = direction;
            const [nh, nn, nm] = [h + dh, n + dn, m + dm];
            if (map[nh]?.[nn]?.[nm] === 0) {
                map[nh][nn][nm] = 1;
                queue.enqueue([nh, nn, nm, count + 1]);
                zeroCount--;
                output = Math.max(output, count + 1);
            }
        });
    }

    if (zeroCount) {
        console.log(-1);
    } else {
        console.log(output);
    }
}

solution();