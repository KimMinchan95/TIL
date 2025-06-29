# 자바스크립트 변수 스코프 + var의 문제점

[자바스크립트 변수 스코프 알아보기, var는 뭘 잘못한걸까요?](https://www.youtube.com/watch?v=8v-qFyJS8O8&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=129&t=1s)

## 자바스크립트의 변수 선언방법

- JS에서 변수를 선언하는 방법은 3가지이다.
    - `var`, `let`, `const`

```jsx
var a = 10;
a = 20; // Ok

let b = 10;
b = 20; // Ok

let c = 10;
c = 20; // Error!

const d = { test: 20 };
d.test = 30; //Ok!
```

- `const`는 변수 내부의 값을 수정하는 것을 가능하다.
    - 변수 자체에 다른 값을 대입하는 것은 할 수 없다.

- `var`와 `let`은 위의 예제를 봤을 때 차이가 없어보인다.

```jsx
var a = 10;
var a = 20; // Ok

let b = 10;
let b = 20; // Error!
```

- `var` 키워드로 변수를 선언했을 때 `var` 키워드로 동일한 이름의 변수로 재선언이 가능하다.
- `let` 키워드는 동일한 이름의 변수로 재선언이 불가능 하다.

- `var`의 이런 특징은 코드 가독성이 떨어지고, 예측하지 못한 오류를 발생시킬 수 있다고 생각해서 **ECMA 2015**에서 `let`과 `const`를 등장 시킨 것이다.

### 함수형 프로그래밍과 var

- 함수형 프로그래밍이 대세가 된 지금 `var`처럼 변수 재선언을 허용하는 것이 기능적으로 좋을 수 도 있다.
- **vaiable shadowing** - 뒤에 선언된 변수가 앞의 변수를 가려서 불필요한 사이드 이펙트를 방지하는 역할을 할 수 있다.

### 그래도 var를 사용하면 안되는 이유

```jsx
var a = 10;
if (true) {
	var a = 20;
	
	console.log(a); // 20
}
console.log(a); // 20

let b = 10;
if (true) {
	let b = 20;

	console.log(b); // 20
}
console.log(b); // 10
```

- `var` 키워드로 선언한 `a`의 값을 보면 if문 안에서 재 선언한 `a`가 밖에도 영향을 미친다.
- `let` 키워드로 선언한 `b`는 if문 안에서 선언한 `b`는 if문 밖에 영향을 끼치지 않는다.

### 스코프

- 중괄호로 묶은 범위를 **스코프**라고 부른다.

```jsx
if (condition) {
	... block scope ...
}

switch (item) {
	... block scope ...
}

for (const item of items) {
	... block scope ...
}

while (condition) {
	... block scope ...
}

function hello() {
	... function scope ...
}

const world = () => {
	... function scope ...
};
```

- switch나 if문 같은 조건문이나, for나 while같은 반복문을 사용할때, 내부 코드들이 **블록 스코프**에 포함된다.
- hello로 선언되거나 익명함수로 world라는 변수에 할당된 함수들을 **함수 스코프**를 따른다.

### let과 var의 스코프

```jsx
// block scope
var a = 10;
if (true) {
	var a = 20;
	
	console.log(a); // 20
}
console.log(a); // 20

// function scope
var b = 10;
function hello() {
	var b = 20;

	console.log(b); // 20
}
hello();
console.log(b); // 10
```

- `var`는 Function Scope (함수 스코프)에서 동작을 하고,
- `let`은 Block Scope (블록 스코프)에서 동작을 한다.

### 함수 스코프는 블록스코프를 포함한다.

- 블록 스코프는 함수 스코프 보다 범위가 좁다.
- 함수 스코프가 블록 스코프를 포함하는 관계라고 볼 수 있다.
    - 그래서 `let`의 경우에는 block이나 function 모두 내부에 선언된게 바깥으로 마음대로 튀어나오지 않는다.

### var를 쓰지 말라는 이유

- 다른 프로그래밍 언어에서는 함수 스코프 블록 스코프를 따로 구분 짓지 않는다.
- 이로인해 많은 프로그래머들이 `var`의 동작을 예측하지 못하는 경우가 생긴다.
- `var`로 인해 추가적인 예측이 필요한 것 보다 `var`로 변수를 선언하지 말고 `let`과 `const`를 이용하라는 말이 여기서 나온 것이다.

---

### 용어정리

- 스코프 (scope)
    - 변수에 접근할 수 있는 범위