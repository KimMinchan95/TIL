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

### SSR 과정

- Fetch Data
    - 클라이언트에서 서버에 요청한다.
    - 서버에서 애플리케이션에 대한 전체 데이터를 가져온다.
- Render as HTML
    - 서버에서 모든 리액트 컴포넌트를 HTML 형식으로 렌더링한다.
    - HTML은 클라이언트로 전송되고 브라우저에서 렌더링된다.
    - 사용자는 페이지 컨텐츠를 볼 수 있다.
    - 하지만 인터렉션은 불가능하다.
- Load JS
    - 자바스크립트 코드를 로드
- Hydrate
    - 컴포넌트를 렌더링하고 이벤트핸들러를 연결하는 과정
    - HTML에 인터렉션이 가능하게 변경하는 과정
    - 자바스크립트 코드와 HTML을 연결
    - Hydration 이후에 사용자가 앱과 상요작용이 가능해진다.
    

### 기존 SSR의 문제점

- 모든 data fetch가 끝나야 어떤것이라도 보여줄 수 있다.
- 모든 자바스크립트 코드를 로딩하기 전에는 Hydration 단계로 넘어갈 수 없다.
- 앱이 상호 작용할 수 있는 상태가 되려면 앱 전체가 Hydration이 완료되어야 한다.

### Suspense

React 18에서 Suspense를 이용하면 페이지의 각 부분을 Suspense로 묶어서 따로 처리할 수 있다.

**예시**

```html
<Layout>
	<NavBar />
	<Sidebar />
	<RightPane>
	<Post />
		<Suspense fallback={<Spinner />}>
			<Comments />
		</Suspense>
	</RightPane>
</Layout>
```

- Comments 컴포넌트를 `Suspense`로 감싸고 준비될 동안 Spinner를 표시하도록 한 예시
- Comments 컴포넌트를 기다리지 않고 다른부분 부터 보여줄 수 있다.
- Spinner는 Comments 컴포넌트의 data fetching이 끝난 후 서버에서 렌더링이 완료되면 없어진다.

### lazy

> Comment에 대한 JS코드가 로드될 때 까지 클라이언트에서 Hydration을 시작할 수 없다는 문제 해결법
> 
- 과거에는 `lazy`와 `Suspense`를 SSR에서 사용할 수 없었지만, React 18버전에서 가능하다.
- 예시처럼 작성하면 Comments가 로드되기전에 Hydration을 진행할 수 있다.
    - 선택적 Hydration
- 코드로드가 완료되면 Comments부분도 Hydration을 진행한다.

**예시**

```jsx
import { lazy } from "react";

const Comments = lazy(() => import("./Comments.js"));

//...

<Suspense fallback={<Spinner />}>
	<Comments />
</Suspense>
```

## 3. Automatic Batching

**Batching 이란?**

- 여러 개의 state 업데이트를 하나의 리렌더가 발생하도록 그룹화

### React 17의 Batching과 차이점

React 17버전에서는 동기 이벤트 핸들러 함수에서만 지원되었다.

- Promise, setTimeout에서는 Batching처리가 지원되지 않았었다.