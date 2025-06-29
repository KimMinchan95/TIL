# Scope & Closure

[[10분 테코톡] 🍧 엘라의 Scope & Closure](https://www.youtube.com/watch?v=PVYjfrgZhtU&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=93&t=385s)

## 1. Scope

> 변수에 접근할 수 있는 범위
> 

```jsx
function add(x, y) {
	console.log(x, y); // 3 6
	return x + y;
}

add (3, 6);

console.log(x, y); // ReferenceError: x is not defined
```

- 자신이 선언된 위치에 따라 유효 범위가 결정되어 있다.
    - 예시에서 변수 x와 y에 대해 참조할 수 있는 범위가 결정 되었다.
- 변수 이름, 함수 이름, 클래스 이름과 같은 `식별자`가 본인이 선언된 위치에 따라 다른 코드에서 자신이 참조될 수 있을지 없을지 결정되는 것
- 변수의 종류
    - 전역에서 선언된 전역 변수
    - 한 지역에서 선언된 지역 변수

### 스코프 체인

```jsx
var x = "나는 전역 x야";

function outer() {
	var y = "나는 outer함수의 지역 y야";
	console.log(x); // 나는 전역 x야
	console.log(y); // 나는 outer함수의 지역 y야

	function inner() {
		var x = "나는 inner함수의 지역 x야";
	
		console.log(x); // 나는 inner함수의 지역 x야
		console.log(y); // 나는 outer함수의 지역 y야
	}
	
	inner();
}

outer();
console.log(x); // 나는 전역 x야
console.log(y); // ReferenceError
```

- 스코프가 중첩된 스코프 체인(Scope chain)
    - inner함수는 outer함수의 내부에 선언되었기 때문에 상위 스코프는 outer 함수의 스코프 이다.
    - outer함수의 상위 스코프는 전역 스코프이다.
- 자신이 찾는 변수가 없으면 무조건 위로만 올라간다.
    - 하위 스코프에서 상위 스코프를 참조할 수 있지만 반대는 불가능하다.

### 스코프 종류

- **스코프의 종류**
    - 블록 레벨 스코프 (if문, for문, 함수 …) 대부분 프로그래밍 언어
    - 함수 레벨 스코프 (only 함수) 자바스크립트에서 var 키워드로 선언된 변수
- es6에서 `let`과 `const`가 추가되면서 블록 레벨 스코프를 따르게됨

- **상위 스코프**
    - 함수가 호출되는 시점에 결정 ⇒ 동적 스코프
    - 함수가 정의되는 시점에 결정 ⇒ 정적 스코프 (=== **렉시컬 스코프**)
- 자바스크립트는 렉시컬 스코프를 따른다.
    - 해당함수가 항상 자신의 상위 스코프를 기억한다.
    - 자바스크립트에서 함수가 정의되면 자신의 내부 슬롯에 상위 스코프에 대한 참조를 저장한다.

## 2. 클로저

> 함수와 함수가 선언된 어휘적(lexical) 환경의 조합
> 
- 함수 실행 과정
    - 함수 호출
    - 실행 컨텍스트 생성
    - 렉시컬 환경 생성 (포함하는 식별자, 식별자에 바인딩 된 값, 상위 렉시컬 환경에 대한 참조)
    

```jsx
const x = 1;

function outer() {
	const x = 10;
	const inner = function () {
		console.log(x);
	};

	return inner;
}

const ella = outer();
ella(); // 10
```

- 중첩함수 `inner`가 이미 생명 주기를 마감함 `outer`함수 즉, 내부 함수의 지역 변수 x를 참조할 수 있다면 이때 `inner`를 closure라고 한다.
    - 상위 스코프의 식별자를 참조하고 있고
    - 본인의 외부 함수보다 더 오래 살아있다
- 본인의 상위 스코프에서 참조하는 식별자만 기억한다.
- 클로저에 의해 참조된 변수를 자유변수라고 한다.