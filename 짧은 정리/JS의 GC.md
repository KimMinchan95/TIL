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

let closure = createHeavyClosure();
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

## 도달 가능성(Reachability)과 루트

### 도달 가능성이란?
- **도달 가능(Reachable)**: 루트에서 참조 그래프를 따라 도달할 수 있는 값
- **도달 불가능(Unreachable)**: 루트에서 어떤 경로로도 도달할 수 없는 값 → GC 대상

### 루트(Root)란?
- 전역 객체(`window`, `globalThis`)
- 현재 실행 중인 함수의 지역 변수와 매개변수
- 콜스택에 존재하는 함수 프레임
- 클로저로 캡처된 변수
- Web API가 보유한 참조(타이머, 이벤트 리스너 등)

### 참조 그래프와 마킹
1. 루트에서 시작하여 참조 그래프를 순회하며 **도달 가능한 객체에 마킹**
2. 마킹되지 않은 객체는 **쓸기(Sweep)** 단계에서 해제

```javascript
// 루트 → user → address 로 이어지는 참조
let user = { name: "A", address: { city: "Seoul" } };

// address는 user가 참조하므로 도달 가능
user = null; // user 참조 해제 → address도 더 이상 루트에서 도달 불가 → GC 대상
```

## 순환 참조와 GC

### 순환 참조는 GC를 방해하지 않는다
- 마크-스위프 기반의 엔진(V8)은 **도달 가능성**을 기준으로 판단
- 서로가 서로를 참조해도 루트에서 도달할 수 없으면 GC 대상

```javascript
function createCycle() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1; // 순환 참조
  return { obj1, obj2 };
}

let pair = createCycle();
// pair가 루트에서 유일한 진입점
pair = null; // 루트에서 끊기면 두 객체 모두 도달 불가 → GC 대상
```

## 약한 참조와 파이널라이제이션

### WeakMap / WeakSet
- 키가 **약한 참조**로 저장됨 → 키가 다른 경로에서 도달 불가가 되면 자동 GC 대상
- 캐시, 메모이제이션 등에서 유용

```javascript
const wm = new WeakMap();
(function () {
  const key = { id: 1 }; // 블록 스코프 종료 후 다른 강한 참조 없음
  wm.set(key, { meta: "cached" });
})();
// key는 더 이상 도달 불가 → GC가 수거 가능 (값도 함께 제거됨)
```

### WeakRef / FinalizationRegistry
- WeakRef: 객체를 약하게 참조하여, 존재할 수도/없을 수도 있는 값을 안전하게 다룸
- FinalizationRegistry: 객체가 GC로 수거될 때 정리 콜백 등록
- 주의: 타이밍이 비결정적이므로 비즈니스 로직에 의존시키지 말 것

```javascript
class Cache {
  constructor() {
    this.map = new Map();
  }
  set(id, obj) {
    this.map.set(id, new WeakRef(obj));
  }
  get(id) {
    const ref = this.map.get(id);
    return ref ? ref.deref() ?? null : null; // 수거되었으면 null
  }
}
```

## 실무 체크리스트: 도달 가능성 관점
- 전역 변수, 싱글톤에 쌓이는 참조를 주기적으로 정리
- 타이머/인터벌/이벤트 리스너는 생명 주기에 맞춰 해제
- 클로저가 불필요한 대용량 데이터를 캡처하지 않도록 주의
- Map 대신 WeakMap을 고려해 캐시의 누수 방지
- DOM 제거 시 JS 참조도 함께 정리
