# Primitive type & Reference type

## 변수 타입

JavaScript의 변수 타입은 두 가지로 나누어져 있다.

1. Primitive type(원시 자료형)
    - `Boolean`, `Null`, `Undefined`, `Number`, `BigInt`, `String`, `Symbol`
2. Reference type(참조 자료형)
    - `Object`

## 원시 자료형

> 원시 자료형이 할당될 때는 변수에 값(value) 자체가 담긴다.
> 
- 원시 자료형은 ‘하나’의 정보(데이터)를 가지고 있다.
- 불변 값(별경할 수 없는 값)이다.

**Boolean(불린형)**

- Boolean(논리 타입)은 `true`와 `false` 두 가지 값밖에 없는 자료형이다.
- 긍정(`true`)과 부정(`false`)을 나타내는 값을 저장할 때 사용한다.

**Null**

- Null 타입은 오직 `null` 값만 가질 수 있다.
- 변수가 아무런 객체를 가리키지 않음을 표시한다.
- 자료형을 판별하는 `typeof`로 `null`을 찍어보면 을 했을때 `“ojbect”`가 출력된다.

**Undefined**

- `null`값 처럼 자신만의 자료형을 형성한다.
- `undefined`는 ‘값이 할당되지 않은 상태’를 나타낸다.
- 변수를 선언했지만, 값을 할당하지 않았을때 해당 변수에 `undefined`가 자동으로 할당된다.

```jsx
let a;
console.log(a) // undefined
```

- `null`과 다르게 `typeof`를 사용하면 `"undefined"`가 출력된다.

**Number(숫자형)**

- ECMAScript는 **Number**와 **BigInt** 두 가지 내장 숫자 타입을 가지고 있다.
- Number 타입은 (-(2^53 -1) 부터 2^53 - 1)까지와 `+Infinity`, `-Infinity`, `NaN` 의 값을 가진다.
- Number 타입의 값 중 두 가지 방식으로 표현할 수 있는 값은 `0`뿐이다.
    - `0`은 `-0`과 `+0` 두 가지로 표현할 수 있다. (`0`은 `+0`의 별칭이다.)
    - `-0`과 `+0`으로 나누었을때 차이가 나타난다.

```jsx
console.log(42 / +0) // Infinity
console.log(42 / -0) // -Infinity
```

**BigInt**

- BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수나 -(2^53 -1) 보다 작은 정수를 표현할 수 있는 내장 객체이다.
- BigInt는 내장 Math 객체의 메서드와 함께 사용할 수 없다.
- 연산에서 Number와 혼합해서 사용할 수 없다.

**String(문자열)**

- JavaScript에서 문자열은 따옴표로 묶는다.
- 따옴표는 3가지 종류가 있다.
    - 큰 따옴표: `“hi”`
    - 작은 따옴표: `'hi'`
    - 역 따옴표(백틱, backtick): ``hi``
- 큰 따옴표와 작은 따옴표는 JavaScript에서 차이를 두지 않는다.
- 역 따옴표는 변수나 표현식을 깜싼후 `${...}`안에 넣어주면, 변수나 표현식을 문자열 사이에 넣을 수 있다.

```jsx
let name = "Chan";

console.log(`Hi, ${name}`); // Hi, Chan
console.log(`the result is ${1 + 2}`); // the result is 3
```

**Symbol(심볼)**

- 심볼형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용한다.
- 객체 프로퍼티 키로 심볼형을 사용할 수 있다.
    - 키가 심볼인 프로퍼티는 `for..in` 반복문에서 배제된다.
    - 이러한 특징으로 객체의 ‘숨김’ 프로퍼티를 만들 수 있다.

```jsx
let id = Symbol("id");
let user = {
	name: "Chan",
	age: 28,
	[id]: 0802
};

for (let key in user) {
	console.log(key)
};

// name
// age
```

## 참조 자료형

> 참조 자료형이 할당될 때는 주소(reference)가 담긴다.
> 

**Object(객체)**

- 객체형은 특수한 자료형이다.
- 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있다.
- 배열과 함수도 객체형에 포함된다.

### const로 선언된 변수 배열에 Array.push를 할 수있는 이유는?

> 배열은 참조형이기 때문에 데이터의 주소를 대입할 수 있기 때문이다.
> 
- 객체의 경우 상수(`const`)로 선언해도 메모리값만 상수 일뿐 객체 안의 내용은 변경이 가능하다.
- 데이터의 주소를 바꾸는 행위가 아니기 때문에 `push`와 `pop`이 가능하다.

---

## 참고자료

[[JavaScript] 변수의 타입 (원시형과 참조형) - 하나몬](https://hanamon.kr/javascript-%EB%B3%80%EC%88%98%EC%9D%98-%ED%83%80%EC%9E%85-%EC%9B%90%EC%8B%9C%ED%98%95%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%98%95/)

[자료형](https://ko.javascript.info/types)

[JavaScript의 타입과 자료구조 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

[배열을 const 로 선언했을 때, 왜 push와 pop이 가능할까 (state 배열)](https://morohaji.tistory.com/55)