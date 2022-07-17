> 여기서 다룰 호이스팅은 JavaScript에서의 호이스팅입니다.
> 

- JavaScript에서 **호이스팅**(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다.
- `var`로 선언한 변수의 경우 호이스팅 시 `undefined`로 변수를 초기화한다. 반면 `let`과 `const`로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않는다.

- 호이스팅을 설명할 땐 주로 **“변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는”** 것으로 말한다.
- 따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 없다.
- 다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 된다.

### 기술 예제

> JavaScript는 함수의 코드를 실행하기 전에  함수 선언에 대한 메모리부터 할당한다. 그래서 함수를 호출하는 코드를 함수 선언보다 앞서 배치할 수 있다.
> 

- 다음과 같이 작성해도 에러가 읽어나지 않는다.

```jsx
myName('홍길동')

function myName(name) {
	console.log(`제 이름은 ${name}입니다.`);
}

// '제 이름은 홍길동입니다.'
```

### 선언만 호이스팅 대상

JavaScript는 초기화를 제외한 선언만 호이스팅한다. 변수를 먼저 사용하고 그 후에 선언 및 초기화가 나타나면, 사용하는 시점의 변수는 기본 초기화 상태(`var` 선언시 `undefined`, 그 외에는 초기화하지 않음) 이다.

```jsx
console.log(num); // 호이스팅한 var 선언으로 인해 undefined 출력
var num; // 선언
num = 6; // 초기화
```

선언 없이 초기화만 하면, 호이스팅도 없고 변수를 읽으려는 시도에서 `ReferenceError` 에러가 발생한다.

```jsx
console.log(num); // ReferenceError
num = 6; // 초기화
```

### 추가

- **var변수 선언**과 **함수선언문**에서만 호이스팅이 일어난다.
    - var 변수/함수의 **선언**만 위로 끌어 올려지며, 할당은 끌어 올려지지 않는다.
    - **let/const 변수 선언**과 **함수표현식**에서는 호이스팅이 발생하지 않는다.