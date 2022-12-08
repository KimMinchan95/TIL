# Custom Hook

[React Hooks에 취한다 - Custom Hooks 커스텀 훅 | 리액트 훅스 시리즈](https://www.youtube.com/watch?v=S6POUU2-tr8&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=112&t=6s)

> 개발자가 반복되는 로직을 묶어서 컴포넌트로 만들듯이 반복되는 메서드를 하나로 묶어서 만든 hook
> 

**특징**

- Custom Hook을 만드는 것은 새로운 함수 하나를 만드는 것이다.
- Custom Hook은 내부에 React Hook을 추가해서 자유롭게 사용한다.
- Custom Hook을 사용하는 컴포넌트마다, Custom Hook이 가지는 State와 Effect는 완전히 독립적이여서 재사용성이 좋다.
- 이름은 반드시 “use”로 시작해야 하는데 그래야만 한눈에 보아도 Hook규칙이 적용되는지를 파악할 수 있기 때문이다.

## Custom Hook 예시

- useInput
- useFetch

### useInput

**Custom hook 사용 전**

```jsx
// App.js
import { useState } from 'react';

function App() {
	const [inputValue, setInputValue] = useState('');
	
	const handleChange = (e) => {
		setInputvalue(e.target.value);
	};
	
	const handleSubmit = () => {
		alert(inputValue);
		setInputValue('');
	};
	
	return (
		<div>
			<h1>useFetch</h1>
			<input value={inputValue} onChange={handleChange} />
			<button onClick={handleSubmit}>확인</button>
		</div>
	);
}

export default App;
```

- 다른 컴포넌트에서 `input`을 만들거나 같은 컴포넌트에서 `input`을 만들어도 반복해서 작성해야됨

**useInput 생성**

```jsx
// useInput.js
import { useState } from 'react';

export function useInput(initialValue, submitAction) {
	const [inputValue, setInputValue] = useState(initialValue);
	
	const handleChange = (e) => {
		setInputvalue(e.target.value);
	};

	const handleSubmit = () => {
		setInputValue('');
		submitAction(inputValue);
	};

	return [inputValue, handleChange, handleSubmit];
}
```

```jsx
// App.js
import { useInput } from './useInput';

function displayMessage(message) {
	alert(message);
}

function App() {
	const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage);
	
	return (
		<div>
			<input value={inputValue} onChange={handleChange} />
			<button onClick={handleSubmit}>확인</button>
		</div>
	);
}

export default App;
```

- 이제 복잡한 로직을 생각하지 않고 `useInput` hook을 사용하면 된다.

### useFetch

**custom hook 사용 전**

```jsx
// App.js
import { useFetch } from './useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

function App() {
	const {data, fetchUrl} = useFetch(baseUrl, "users");
	
	return(
		<div>
			<h1>useFetch</h1>
			<button onClick={() => fetchUrl('users')}>Users</button>
			<button onClick={() => fetchUrl('posts')}>Posts</button>
			<button onClick={() => fetchUrl('todos')}>Todos</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

export default App;
```

**useFetch 생성**

```jsx
// useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(baseUrl, initialType) {
const [data, setData] = useState(null);

	const fetchUrl = (type) => {
		fetch(`${baseUrl}/${type}`)
			.then(res => res.json());
			.then(res => setData(res));
	};

	useEffect(() => {
		fetchUrl(initialType);
	}, []);

	return {
		data,
		fetchUrl,
	}
};
```

---

## 참고자료

[자신만의 Hook 만들기 - React](https://ko.reactjs.org/docs/hooks-custom.html)