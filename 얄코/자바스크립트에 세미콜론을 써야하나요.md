[자바스크립트에 세미콜론을 써야 하나요? (Feat: ASI)](https://www.youtube.com/watch?v=hJjYvVOEO7s&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=114)

> JavaScript(이하 JS)에서 Semicolon을 붙여야하는가, 안 붙여도 되는가에 대한 주제
> 

**JS는 Semicolon을 붙이지 않아도 동작에 오류가 없음**

아래 두 개의 console 모두 작동한다.

```jsx
console.log('Hello'); // Ok
console.log('Hello') // Ok
```

### ASI(Automatic Semicolon Insertion)

> JS엔진에는 **ASI**란 작업이 돌아가는데, Semicolon이 들어가야 하는 자리들을 파악해서 자동으로 넣어준다.
> 

그럼 여기서 나오는 질문이 있다.

**Q. 그럼 JS 개발자들은 코드를 작성할때 Semicolon을 넣지 않아도 되지 않나?**

**A. 이 주제에 대해서는 JS 개발자들 사이에서도 논쟁이 벌어진다고 한다.**

- 그 이유는 ASI가 대부분의 상황에서 제대로 돌아가지만 개발자 의도와 다르게 동작할때가 가끔 있기 때문이다.

**예제**)

```jsx
function getHello () {
	return
	'Hello'
}
```

- 위의 처럼 문자열을 반환함수가 있을때 문자열을 `return` 다음 한줄을 띄어서 넣었을때 동작을 살펴보자
- 개발자가 기대하는건 `'Hello'` 뒤에 Semicolon이 들어가서 문자열을 동작하는 동작일 것이다.
- 하지만 ASI는 다음과 같이 `return` 과 `'Hello'` 뒤에 전부 Semicolon을 단다.

**예제**(ASI의 동작 결과)) 

```jsx
function getHello () {
	return;
	'Hello';
}
```

- 그러면 `return` 에서 바로 반환이 되는 동작이 일어나서 `undefined`가 반환된다.

### Semicolon을 붙이지 않고 싶으면 유념해야할 것들

1. 한줄에 두 개의 console을 찍는 예제

```jsx
console.log('Hello') console.log('World')
```

- `console.log('Hello')` 뒤에 semicolon을 찍지 않으면 `Unexpected identifier` 에러가 난다.
- ASI는 이를 감지하지 못한다.

- 그래서 다음과 같이 작성해야 한다

```jsx
console.log('Hello'); console.log('World')
```

1. IIFE(함수를 즉시실행) 예제

```jsx
const x = 1
const y = x

(function () {
	console.log('IIFE')
})()
```

- 위의 예제에서는 `TypeError: x is not a funtion` 오류가 난다.
- 개발자가 기대한 것은 `const y = x` 뒤에 semicolon이 찍혀서 `IIFE` 와 구분되는 것이다.
- 하지만 ASI는 줄바꿈이 되어도, 다음 구문이 여는 괄호로 시작되면 semicolon을 붙이지 않는다.

- 그래서 다음과 같이 코드를 인식한다.

```jsx
const x = 1;
const y = x(function () {
	console.log('IIFE');
})();
```

- 그래서 X를 함수로 취급하고 함수가 아니라는 `TypeError` 가 나는 것이다.

- 끝에 semicolon을 붙이지 않으면서 제대로 인식시켜줄려면 다음과 같이 작성해야한다.

```jsx
const x = 1
const y = x

;(function () {
	console.log('IIFE')
})()
```

1. 즉석으로 배열을 만들고 변수나 상수로 메모리에 넣지 않고 `forEach` 를 돌리는 예제

```jsx
const x = 1
const y = x

[0, 1, 2].forEach(num => {
	console.log(num)
})
```

- 이 코드도 2번 예제처럼 `const y = x` 뒤에 `forEach` 코드가 이동하면서 `TypeError: Cannot read properties of undefined` 에러가 난다.
- 해결법도 2번 예제와 똑같다.