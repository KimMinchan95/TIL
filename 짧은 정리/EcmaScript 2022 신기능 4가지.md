# EcmaScript 2022 (ES 2022) 신기능 4가지

[방금 출시된 ⚡️자바스크립트 미친 신기능 4개!](http://youtube.com/watch?v=m-R7s7fnwvU&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=105&t=10s)

## 1. Top level await

- 전에는 `await`을 사용하려면 `async` 함수 내에서 해야 했다.
- ES 2022에서는 await을 모듈에서 `async` 없이 사용할 수 있다.

이전

```jsx
(async function () {
	await startServer();
})();
```

- 이전에는 async 없이는 await을 사용하지 못했기 때문에 위와 같이 작성해야 했다.

ES 2022

```jsx
await startServer();
```

## 2. Error Cause

- 오류의 원인을 설명하여 더 나은 오류 메시지를 만들 수 있다.
- 이전에는 오류를 만들 때 오류 메시지를 작성할 수 밖에 없었다.
- ES 2022에서는 무엇이 오류를 발생 시켰는지 설명할 수 있다.

이전

```jsx
new Error("Can't save comment");
```

ES 2022

```jsx
new Error("Can't save comment", { cause: "Not allowed." });

err.message; // Can't save comment
err.cause; // Not allowed.
```

## 3. `.at()`

- 배열의 모든 인덱스에 엑세스할 수 있다.
- 이전에도 대괄호를 사용하면 가능했지만 차이점은 음수도 사용할 수 있다.

이전

```jsx
const nameList = ['Chan', 'Seil', 'Parkgu', 'ChiChi'];

nameList(nameList.length - 1); // 'ChiChi'
```

ES2022

```jsx
const nameList = ['Chan', 'Seil', 'Parkgu', 'ChiChi'];

nameList.at(-1); // 'ChiChi'
```

### 4.  Class Fields

- 새로운 기능 List
    - JS에서 Class 기능 강화
    - 이전에는 불가능 했던 Private 메서드 및 속성을 가질 수 있음
    - `Static` 메서드 사용 가능
    - 속성을 초기화하기 위해 `constructor`를 사용하지 않아도 됨

- Private 메서드나 속성을 만들려면 이름 앞에 `#` 기호를 사용하라.

```jsx
class Message {
	#sayHi() {
		console.log('Hi');
	}
}
```

- `Static` 메서드 사용방법

이전

```jsx
class Message {
	// body
}
Message.build() {
	// body
}
```

ES 2022

```jsx
class Message {
	static build() {
		// body
	}
}
```