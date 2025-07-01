# Event Loop

## 개요

Event Loop는 JavaScript의 비동기 처리 메커니즘으로, 싱글 스레드 환경에서 비동기 작업을 효율적으로 처리할 수 있게 해주는 핵심 구조다.

## JavaScript 엔진 구조

### 1. Call Stack (호출 스택)

- 함수 호출이 쌓이는 곳
- LIFO (Last In, First Out) 구조
- 현재 실행 중인 함수와 그 함수가 호출한 함수들이 쌓임

### 2. Memory Heap

- 변수, 객체 등이 저장되는 메모리 공간
- 가비지 컬렉션이 관리

### 3. Web APIs (브라우저 환경)

- setTimeout, setInterval
- DOM 조작
- AJAX 요청
- 이벤트 리스너

## Event Loop 동작 과정

### 1단계: Call Stack 확인

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// 출력: 1, 3, 2
```

### 2단계: Web APIs로 비동기 작업 위임

```javascript
setTimeout(() => {
  console.log("비동기 작업 완료");
}, 1000);
// 1초 후 Callback Queue로 이동
```

### 3단계: Callback Queue 대기

- 비동기 작업 완료 후 콜백 함수가 대기
- FIFO (First In, First Out) 구조

### 4단계: Event Loop가 Call Stack이 비었는지 확인

- Call Stack이 비어있으면 Callback Queue에서 작업을 가져와 실행

## Microtask Queue vs Task Queue

### Microtask Queue (우선순위 높음)

- Promise의 `.then()`, `.catch()`, `.finally()`
- `queueMicrotask()`
- `process.nextTick()` (Node.js)

### Task Queue (Macrotask Queue)

- setTimeout, setInterval
- setImmediate (Node.js)
- requestAnimationFrame (브라우저)

## 실행 순서 예제

```javascript
console.log("1"); // 동기

setTimeout(() => {
  console.log("2"); // Task Queue
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // Microtask Queue
});

console.log("4"); // 동기

// 출력: 1, 4, 3, 2
```

## Node.js의 Event Loop

### process.nextTick() vs setImmediate()

```javascript
setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

// 출력: nextTick, Promise, setImmediate
```

## 성능 최적화

### 1. 배치 처리

```javascript
// ✅ 효율적인 DOM 업데이트
function batchUpdate() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
  }

  document.body.appendChild(fragment);
}
```

### 2. 디바운싱과 쓰로틀링

```javascript
// 디바운싱
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 쓰로틀링
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## 요약

Event Loop는 JavaScript의 비동기 처리의 핵심으로:

1. **Call Stack**: 동기 코드 실행
2. **Web APIs**: 비동기 작업 위임
3. **Callback Queue**: 완료된 비동기 작업 대기
4. **Microtask Queue**: Promise 등 우선순위 높은 비동기 작업
5. **Event Loop**: Call Stack이 비었을 때 Queue에서 작업 가져와 실행
