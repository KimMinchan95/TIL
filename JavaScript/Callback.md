# Callback

[[10분 테코톡] 🔥 유조의 Callback](https://www.youtube.com/watch?v=wvEYG6ydAGg&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=85&t=504s)
[자바스크립트 - Callback functions 콜백함수란? - 별코딩](https://youtu.be/8FhRtDUhp1Q)

## 1. 동기와 비동기

### 동기 (Synchronous)

- 특정 코드를 수행 완료한 후 다음 코드를 실행
- 예시코드

```jsx
console.log('1');
console.log('2');
console.log('3');
```

### 비동기 (Asynchronous)

- 특정 코드를 수행하는 도중 다음 코드를 실행
- 예시코드

```jsx
console.log('1');
setTimeout(() => {
	console.log('3');
}, 1000);
console.log('2');
```

- 동기적으로 동작하는 JS코드에서 비동기 적으로 동작할 수 있는 이유는 Callback 함수 덕분
- `setTimeout` 함수를 보면 `function` 과 `delay`를 인자로 받고있다.
- 여기서 인자로 받는 `function`이 `Callback function` 이다.

## 2. Callback

- 어떤 함수에 인자로 전달되는 함수
- Callback은 되돌아와서 호출하라는 의미
	- 나중에 불려진다.
- 비동기적인 동작이 들어있을 때 함수를 원하는 순서대로 동작하게 하기 위해 사용한다.

```jsx
const arr = ['1', '2', '3'];

const printArray = () => {
	console.log(arr.shift());
	if (!arr.length) {
		clearInterval(timer);
	}
}

const timer = setInterval(printArray, 1000);
```

- 위의 코드를 실행하면 `setInterval`에게 제어권을 위임한다.

## 3. Callback Hell

> 콜백 지옥(Callback Hell)은 콜백 안에 함수 호출이 반복되어 코드의 가독성이 감당할 수 없을 정도로 떨어지는 현상을 말한다.
> 

```jsx
asyncFunc('something', function (err, data){
	asyncFunc('something', function (err, data){
		asyncFunc('something', function (err, data){
			asyncFunc('something', function (err, data){
				asyncFunc('something', function (err, data){
					asyncFunc('something', function (err, data){
						asyncFunc('something', function (err, data){
							asyncFunc('something', function (err, data){
								asyncFunc('something', function (err, data){
										// do the final action
								});
							});
						});
					});
				});
			});
		});
	});
});
```

- 중첩된 Callback을 사용하다보면 가독성이 떨어지게 된다.
- 가독성이 떨어지면서 자연스럽게 디버깅도 힘들어지게 된다.

## 4. Promise

- **Promise** 객체는 생성할 때 `executor`라는 매개 변수를 받는다.
- `executor`는 다시 매개변수로 두 가지 함수를 받는데 `resolve`와 `reject`이다.
    - `resolve`는 비동기 작업을 성공적으로 완료한 결과를 받을 때 사용한다.
    - `reject`는 반대로 실패한 결과를 받을 때 사용한다.
- **Promise**의 경우 내부에서 `resolve` 혹은 `reject`를 호출하기 전에는 `then`, `catch` 부분으로 넘어가지 않는다.
- 비동기 작업이 완료될 때 `resolve` or `reject`를 호출하는 방법으로 **비동기의 동기적 표현이 가능하다.**

## 5. Async/Await

> `Async/Await`은 ES2017에 추가된 **Promise**의 syntactic suger이다.
> 
- `Async/Await`은 **Promise**를 보다 쉽게 사용할 수 있게 해준다.
- Async
    - 함수 앞에 `async`를 명시하면 함수 안에 있는 코드 블럭들이 **Promise**로 변환된다.
- Await
    - `await`을 사용하기 전에 함수 앞에 `async`를 명시해야 한다.
        - ES2022부터는 `async`를 명시하지 않아도 `await`을 사용할 수 있게 된다고 한다.
    - 비동기 로직이 실행되는 동안 함수의 실행을 멈추고 반환을 기다린다.