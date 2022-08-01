# Stack&Queue

[놀라운 스택과 큐의 차이](https://www.youtube.com/watch?v=OeCdHoJa-X0)

## 스택(Stack)

> 스택은 가장 마지막으로 들어간 데이터가 가장 첫 번째로 나오는 성질(LIFO, Last In First Out)을 가진 자료 구조이다.
> 
- 마지막부터 뽑아낸다.
- 재귀적인 함수, 알고리즘(dfs)에 사용되며 웹 브라우저 방문 기록 등에 쓰인다.
- 삽입 및 삭제에 O(1), 탐색에 O(n)이 걸린다.

**코드 예시**

```jsx
class Stack {
	constructor() {
		this._arr = [];
	}
	
	// 삽입
	push(item) {
		this._arr.push(item);
	}

	// 삭제
	pop() {
		return this._arr.pop();
	}

	// 참조
	peek() {
		return this._arr[this._arr.length - 1];
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
```

## 큐(queue)

> 큐(queue)는 먼저 집어넣은 데이터가 먼저 나오는 성질(FIFO, FIrst In First Out)을 지닌 자료 구조이다.
> 
- 첫 번째부터 뽑아낸다.
- 삽입 및 삭제에 O(1), 탐색에 O(n)이 걸린다.
- CPU 작업을 기다리는 프로세스, 스레드 행렬 또는 네트워크 접속을 기다리는 행렬, 너비우선 탐색(BFS), 캐시 등에 사용된다.

**코드 예시**

```jsx
class Queue {
	constructor() {
		this._arr = [];
	
	// 삽입
	enqueue(item) {
		this._arr.push(item);
	}	

	// 삭제
	dequeue() {
		return this._arr.shift();
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
```

---

### 자료참조

**사진**

[](https://data-flair.training/blogs/stacks-and-queues-in-c/)

**코드 예시**

[큐, 스택, 트리 | JavaScript로 만나는 세상](https://helloworldjavascript.net/pages/282-data-structures.html)