# 자바스크립트 Symbol, 어디에 쓸까요?

[자바스크립트 Symbol, 어디에 쓸까요?](https://www.youtube.com/watch?v=11HkEyCrriE)

## Symbol

- New in ECMA2015 (ES6)

```jsx
const a = Symbol(); // 선언은 함수 호출 하듯이 써주면 된다.
const b = Symbol("Hello"); // 매개변수로 문자열을 넣을 수 있다.
const c = Symbol.for("something"); // Symbol.for() 라는 함수로도 Symbol을 만들 수 있다.

const d = Symbol();
// a !== d
```

### 왜 Symbol을 사용할까?

- Symbol은 개념 자체는 쉬운데 어디다 사용해야 할지 감이 잘 안잡힌다.
    - 문자열을 사용하면 되는데 굳이 `Symbol`을 따로 만들어서 써야할까?

### 1. 필드를 객체 내부에 숨기기 위해서

**예제)**

```jsx
function getObject() {
	const world = Symbol();

	return {
		hello: 10,
		[world]: 10,
	};
}

const a = getObject();
// a.hello === 10
a.hello = 20;
// a.hello is now 20.
// a.... key?
```

- `hello`라는 key값은 접근 가능하다.
- `world`는 접근할 수 없다.

### 2. Private 필드로 선언하기

- 프로그래머에게 직관적으로 Private 필드라는 것을 알려준다.

**예제)**

```jsx
// --- counter.js ---
const count = Symbol();

export default class Counter {
	[count] = 0;

	add() {
		this[count] += 1;
		return this;
	}
	
	get() { return this[count]; }
}

// --- index.js ---
import Counter from "./counter";

const counter = new Counter();
console.log(counter.get()); // 0

counter.add().add().add();
console.log(counter.get()); // 3
```

- `Symbol`을 사용하지 않았다면, index.js 파일에서 Counter 인스턴스를 선언하고 add함수 대신 임의로 카운트 값을 변경할 수 있었다.
    - 하지만 `Symbol`을 사용했고 그 `Symbol` 값을 외부에 노출시키지 않았기 때문에 일반적인 방법으로는 외부에서 이 카운트 값을 변경할 수 없다. (아예 접근 할 수 없는 것은 아니다)

**예제) Symbol로 count를 선언하지 않았을 때**

- 만약 Counter라는 라이브러리를 배포했고, 다른 프로그래머가 기능을 확장해서 사용하고 싶어 할 때

```jsx
class Counter {
	count = 0;

	add() {
		this.count += 1;
		return this;
	}

	get() { return this.count; }
}

// 
class BetterCounter extends Counter {
	count = function() { ... }; // conflict!

	...
}
```

- count를 덮어 쓰려고 해서 conflict가 발생
- `Symbol`로 작성했다면 우연히 중복되게 쓸 일 자체가 없다.

### 매개변수로 문자열을 넣어야하나?

```jsx
const a = Symbol();
const b = Symbol("something"); // 코드 주석과 비슷한 역할
```

- 코드 주석과 비슷한 역할이다.
- 콘솔 찍었을 때 편하게 보기 위한 용도이지, 기능적으로 달라지는 것은 없다.

---
### 추가 공부

[Symbol.for() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)

### Symbol.for()와 Symbol()의 차이점

```jsx
console.log(Symbol.for('bar') === Symbol.for('bar')); // true

console.log(Symbol('bar') === Symbol('bar')); // false
```