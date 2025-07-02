# IIFE

> 함수 표현식을 사용하면 즉시 호출하는 함수 표현식(IIFE)이란 것을 만들 수 있다. IIFE는 함수를 선언하고 즉시 실행한다.
> 
- IIFE는 다음과 같은 형태를 취한다.

```jsx
(function() [
	// IIFE 바디
})();
```

- 함수 표현식으로 익명 함수를 만들고 그 함수를 즉시 호출한다.
- IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 것이다.

```jsx
const message = (function () {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} character long.`;
})();

console.log(message); // "The secret is 13 character long."
```

- 변수 secret은 IIFE의 스코프 안에서 안전하게 보호되며 외부에서 접근할 수 없다.
- IIFE는 함수이므로 무엇이든 반환할 수 있다.
- IIFE에서 배열이나 객체, 함수를 반환하는 경우도 무척 많다. 자신이 몇 번 호출됐는지 보고하는 함수를 생각해보자. 이 함수가 몇 번 호출됐는지 저장한 값을 외부에서는 절대 손댈 수 없다.

```jsx
const f = (function() {
	let count = 0;
	return function() {
		return `I have been called ${++count} time(s).`;
	}
})();

f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
//...
```

- 변수 count는 IIFE 안에 안전하게 보관되어 있으므로 손댈 방법이 없다. f는 자신이 몇번 호출됐는지 항상 정확히 알고 있다.
- ES6에서 블록 스코프 변수를 도입하면서 IIFE가 필요한 경우가 줄어들긴 했지만 여전히 매우 널리 쓰인다.
- 클로저를 만들고 클로저에서 무언가 반환받을 때에는 유용하게 쓸 수 있다.