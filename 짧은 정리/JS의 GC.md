# JavaScript의 가비지 컬렉션 (Garbage Collection)

## 개요

JavaScript는 **자동 메모리 관리**를 제공하는 언어입니다. 개발자가 직접 메모리를 할당하거나 해제할 필요가 없고, **가비지 컬렉터(GC)**가 자동으로 사용하지 않는 메모리를 정리합니다.

## 가비지 컬렉션이란?

### 정의

- **더 이상 사용되지 않는 객체의 메모리를 자동으로 해제하는 과정**
- JavaScript 엔진이 주기적으로 실행하여 메모리 누수를 방지
- 개발자가 명시적으로 메모리를 관리할 필요가 없음

### 동작 원리

```javascript
// 1. 객체 생성 (메모리 할당)
let user = { name: "John", age: 30 };

// 2. 참조 제거 (가비지 컬렉션 대상)
user = null;

// 3. GC가 자동으로 메모리 해제
```

## 주요 가비지 컬렉션 알고리즘

### 1. Mark and Sweep (표시하고 쓸기)

#### 동작 과정

1. **Mark (표시)**: 루트 객체부터 시작하여 도달 가능한 모든 객체를 표시
2. **Sweep (쓸기)**: 표시되지 않은 객체들을 메모리에서 해제

#### 예시

```javascript
// 루트 객체
let globalVar = { name: "global" };

function createObjects() {
  let localVar = { name: "local" };
  let tempVar = { name: "temp" };

  // localVar는 함수 종료 후 GC 대상
  // tempVar는 참조가 없어서 즉시 GC 대상
}

createObjects();
// 함수 종료 후 localVar, tempVar는 GC 대상
```

### 2. Generational Garbage Collection (세대별 가비지 컬렉션)

#### 세대별 분류

- **Young Generation (새로운 세대)**: 새로 생성된 객체들
- **Old Generation (오래된 세대)**: 오래 살아남은 객체들

#### 동작 방식

```javascript
// 1. 새로운 객체는 Young Generation에 할당
let newObject = { data: "new" };

// 2. 여러 번 GC를 거치면서 살아남으면 Old Generation으로 이동
// 3. Old Generation은 덜 자주 GC 실행
```

### 3. Incremental Garbage Collection (점진적 가비지 컬렉션)

#### 특징

- GC 작업을 여러 단계로 나누어 실행
- 애플리케이션의 응답성을 유지
- 긴 GC 일시정지 방지

## 메모리 누수 (Memory Leak) 원인과 해결

### 1. 전역 변수

```javascript
// ❌ 문제: 전역 변수로 인한 메모리 누수
function createUser() {
  // 전역 변수에 할당
  window.user = { name: "John", data: new Array(1000000) };
}

// ✅ 해결: 지역 변수 사용
function createUser() {
  let user = { name: "John", data: new Array(1000000) };
  return user;
}
```

### 2. 클로저 (Closure)

```javascript
// ❌ 문제: 클로저로 인한 메모리 누수
function createHeavyClosure() {
  const heavyData = new Array(1000000);

  return function () {
    console.log(heavyData.length); // heavyData 참조 유지
  };
}

const closure = createHeavyClosure();
// closure가 살아있는 한 heavyData도 메모리에 유지

// ✅ 해결: 필요 없을 때 참조 제거
closure = null;
```

### 3. 이벤트 리스너

```javascript
// ❌ 문제: 이벤트 리스너 누수
function addEventListener() {
  const button = document.getElementById("button");
  button.addEventListener("click", function () {
    console.log("clicked");
  });
}

// ✅ 해결: 이벤트 리스너 제거
function addEventListener() {
  const button = document.getElementById("button");
  const handler = function () {
    console.log("clicked");
  };

  button.addEventListener("click", handler);

  // 필요 없을 때 제거
  return () => button.removeEventListener("click", handler);
}
```

### 4. 타이머와 인터벌

```javascript
// ❌ 문제: 타이머 누수
function startTimer() {
  setInterval(() => {
    console.log("timer");
  }, 1000);
}

// ✅ 해결: 타이머 정리
function startTimer() {
  const intervalId = setInterval(() => {
    console.log("timer");
  }, 1000);

  // 필요 없을 때 정리
  return () => clearInterval(intervalId);
}
```

### 5. DOM 참조

```javascript
// ❌ 문제: DOM 요소 참조 누수
const elements = [];

function addElement() {
  const element = document.createElement("div");
  elements.push(element); // 배열에 참조 저장
  document.body.appendChild(element);
}

// DOM에서 제거해도 배열에 참조가 남아있음
document.body.removeChild(elements[0]);

// ✅ 해결: 참조 제거
function addElement() {
  const element = document.createElement("div");
  document.body.appendChild(element);

  // 필요 없을 때 참조 제거
  return () => {
    document.body.removeChild(element);
  };
}
```

## 성능 최적화 팁

### 1. 객체 풀링 (Object Pooling)

```javascript
// ❌ 매번 새 객체 생성
function createObject() {
  return { x: 0, y: 0, active: false };
}

// ✅ 객체 재사용
class ObjectPool {
  constructor() {
    this.pool = [];
  }

  get() {
    return this.pool.pop() || { x: 0, y: 0, active: false };
  }

  release(obj) {
    obj.x = 0;
    obj.y = 0;
    obj.active = false;
    this.pool.push(obj);
  }
}
```

### 2. 불필요한 참조 제거

```javascript
// ❌ 불필요한 참조 유지
let data = new Array(1000000);
let processedData = data.map((item) => item * 2);

// 원본 데이터가 더 이상 필요 없어도 참조 유지
console.log(processedData.length);

// ✅ 참조 제거
let data = new Array(1000000);
let processedData = data.map((item) => item * 2);

data = null; // 원본 데이터 참조 제거
console.log(processedData.length);
```

### 3. WeakMap/WeakSet 사용

```javascript
// ❌ 일반 Map 사용
const cache = new Map();
function processData(data) {
  if (cache.has(data)) {
    return cache.get(data);
  }

  const result = heavyComputation(data);
  cache.set(data, result);
  return result;
}

// ✅ WeakMap 사용 (키가 GC 대상이 되면 자동으로 제거)
const cache = new WeakMap();
function processData(data) {
  if (cache.has(data)) {
    return cache.get(data);
  }

  const result = heavyComputation(data);
  cache.set(data, result);
  return result;
}
```
