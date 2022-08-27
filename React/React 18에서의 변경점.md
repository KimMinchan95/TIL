# React 18에서의 변경점

[[10분 테코톡] 코이의 React 18에서의 변경점](https://www.youtube.com/watch?v=focpJqfSu4k&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=95&t=158s)

## 1. useTransition

### **기존 문제**

- 블로킹 렌더링 문제
    - 한번 렌더링연산이 시작되면 멈출수 없음
    - 대형 화면 업데이트의 경우 렌더링 되는 동안 페이지 지연이 발생

### **useTransition**

- useTransition Hook이 반환하는 배열
    - 첫 번째 인자로  `isPending`이라는 boolean값
    - 두 번째 인자로 `startTransition`이라는 함수
- `startTransition`은 우선순위를 낮출 수 있다.

**예시**

```jsx
function App() {
	const [isPending, startTransition] = useTransition();
	const [boxCount, setBoxCount] = useState(0);

	const newItems = makeItems(boxCount);

	const handleUpdate = ({ target }) => {
		startTransition(() => {
			setBoxCount(target.value.length);
	});
	
	return (
		<>
			<input type="text" onChange={handleUpdate} />
			{isPending && <h1>Pending...</h1>}
			<ItemList items={newItems} />
		</>
	);
}

export default App;
```

- `startTransition`으로 감싸기 전에는 ItemList의 렌더링이 무거우면 input이 끊기면서 사용자 경험이 좋지 않다.
- `startTransition`으로 감싸므로써, input의 우선순위를 높인다.

### startTransition의 debounce, throttle과의 차이

- debounce를 사용해서 만들면 사용자 입력이 설정한 시간 이상으로 일어나지 않으면 화면 업데이트를 진행한다.
    - 사용자 입력이 계속되면 화면 업데이트가 일어나지 않는다.
    - 이는 단순히 문제를 뒤로 미루는 것이다.
- throttle를 사용해서 만들면 설정한 시간마다 렌더링을 진행한다.
    - 사용자가 입력을 중간에 멈추거나 띄엄띄엄 한다면 의미없이 기다리는 시간이 생긴다.
- startTransition은 debounce와 throttle과 다르게 비어있는 시간이 사라지고 사용자 경험이 향상된다.

### startTransition

- React 18버전에서는
    - 렌더링을 하는 와중에도 급한 일이 생기면 먼저 처리할 수 있게 변경되었다.
    - `startTransition`을 사용해서 화면을 그리는 우선순위를 낮추고 사용자 입력에 우선순위를 높혀서 사용자 경험을 좋게 만들 수 있다.
- 동시성을 사용
    - 2개의 이상의 작업을 나눠서 동시에 실행되는 것처럼 프로그램을 구조화하는 방법

## 2. Suspense and SSR

## 3. Automatic Batching