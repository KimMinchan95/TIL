# 잘 모르는 “간단한” 자바스크립트 문법 5가지

[[제로초토크]잘 모르는 "간단한" 자바스크립트 문법 5가지](https://www.youtube.com/watch?v=VgMJFzZQBjQ&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=110&t=8s)

## 1. `{}`

> 코드 중간에 중괄호를 사용해서 스코프를 만들 수 있다.
> 

```jsx
const a = {};

{
	let a = '3';
}

console.log(a); // {}
```

## 2. `()`

- 함수를 즉시 호출하고 싶을때 두 가지 방식으로 사용할 수 있다.
1. 기본적으로 사용하는 방식

```jsx
(function func(){})();
```

1. 소괄호로 한번 더 묶는 방식

```jsx
(function func(){}());
```

- 화살표 함수로 객체를 바로 리턴하고 싶을때 소괄호로 감싸주면 된다.

```jsx
const func = (x, y) => ({x, y})
```

## 3. `,`

> JS 이상한 리턴법 (콤마 연산자)
> 
- 마지막 전까지는 실행만 하고, 항상 마지막 값이 나온다.

```jsx
const func = (x, y) => {
	return (x, y);
}

func(1, 2); // 2

(1, 2, 3, 4, 5); // 5
```

## 4. 숫자 메서드 쓰기

> 숫자에 바로 `toString()`을 붙히면 에러가 난다.
> 
- 숫자를 소괄호로 감싸주면 된다.
- JS 해석기가 소괄호 단위로 구별을 해주기 때문이다.

```jsx
1.toString(); // Uncaught SyntaxError

(1).toString(); // '1'
```

- 이상한 해결방법 두 개

```jsx
// '.'을 두번 찍는 방법
1..toString(); // '1'

// 한 칸 띄어쓰는 방법
1 .toString(); // '1'
```

## 5. `in` 연산자

> 보통 `in`을 보면 `for...in문` 만 생각한다.
> 
- `in` 연산자를 단독으로도 사용할 수 있다.

```jsx
const obj = {
	'hello': 'cat',
	'hi': 'bye',
	1: 3,
	true: false,
};

for (const key in obj({
	console.log(key)
}

// 1 hello hi true

// in 연산자를 단독으로 사용할 수 있다.
console.log('hi' in obj); // true
console.log('JS' in obj); // false
```