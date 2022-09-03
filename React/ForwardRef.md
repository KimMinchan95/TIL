# ForwardRef

[React의 ForwardRef란? | Ref 전달하기](https://www.youtube.com/watch?v=LtYzjv2yXHE&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=115)

> ForwardRef는 부모컴포넌트에서 자식컴포넌트로 Ref를 전달할때 사용하는 기법이다.
> 

## Ref와 ForwardRef

- `input`과 `button` 이 있고,
- `button`을 클릭했을때 `input`에 **focus**를 주고 싶을때,
- 다음과 같이 `ref`를 이용하면 된다. ****

```jsx
function App () {
	const inputRef = useRef();

	const focus = () => {
		inputRef.current.focus();
	}

	return(
		<div>
			<input ref={inputRef} />
			<button onClick={focus}>포커스</button>
		</div>
	);
}
```

- `ref`는 `input`의  DOM노드를 참조하고 있게 된다.

### Input을 컴포넌트로 만들었을 때

- 부모컴포넌트에서 만든 `ref`를 자녀 컴포넌트에게 전달해야 한다.
- 이때 사용하는 것이 `forwardRef`이다.
    - `forwardRef`를 사용하면 기본적인 element에다가 `ref`를 전달하듯이
    - 자녀 component에게 `ref`를 전달할 수 있다.

**`forwardRef` 사용법**

- 자녀컴포넌트를 리액트에서 제공하는 `forwardRef`라는 함수로 감싸주기만 하면 된다.
- `forwardRef`로 감싸진 자녀 컴포넌트는 새로운 두 번째 인자로 `ref`를 받게된다.
- 자녀컴포넌트는 전달받은 `ref`를 `input` 태그의 `ref`로 넣어주면 된다.

```jsx
// App
function App () {
	const inputRef = useRef();

	const focus = () => {
		inputRef.current.focus();
	}

	return(
		<div>
			<MyInput ref={inputRef} />
			<button onClick={focus}>포커스</button>
		</div>
	);
}
```

```jsx
// MyInput
const MyInput = (props, ref) => {
	return <input ref={ref} />
};

export default forwardRef(MyInput);
```

### 그냥 Props로 넘기면 안되나.

- 단순히 `ref`라는 이름으로 props를 넘기려고 하면 리액트에서는 경고 메시지가 뜬다.
- `inputRef`라는 등의 이름으로 자식컴포넌트에게 `props`로 넘기면 똑같이 동작한다.
    - 하지만 `ref`라는 이름으로 사용 못하는 단점이 있다.
- 리액트 공식문서에서는 `forwardRef`를 사용해서 `ref`를 전달할 것을 권장한다.

### forwardRef 주의할 점

- 지나친 유연성을 단점을 불러오기 마련이다.
- `forwardRef`를 사용해서 자녀 컴포넌트의 캡슐화에 대한 장점을 없애버리는 행위이기도 하다.
- 자녀 컴포넌트가 가진 DOM노드를 외부로 노출시키는 것이다.