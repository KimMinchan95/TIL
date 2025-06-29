[[10분 테코톡] 후이의 제어 컴포넌트 vs 비제어 컴포넌트](https://www.youtube.com/watch?v=LD1LyvCCbCg&t=1s)

> `input` 태그를 대표로 설명하는 **제어컴포넌트 vs 비제어 컴포넌트**
> 

## 1. Form tag elements

- Form tag element 들에는 독특한 성질이 하나가 있는데, `value attribute`를 통해 자체적인 Data를 갖는다는 것이다. 이 성질은 아래와 같은 Flow를 만들 수 있다.
    - 사용자가 입력한 값으로 `value attribute` 가 바뀐다.
    - 사용자가 입력한 값이 `value attribute`에 저장된다는 말과 같다.
    - `input` 태그의 `value attribute`는 DOM에 존재한다.
    - `**input`을 통한 사용자의 입력 데이터는 DOM에 저장된다.**

## 2. 신뢰 가능한 단일 출처

리액트 공식문서의 제어 컴포넌트 파트를 보면 다음과 같은 말이 있다.

> 우리는 React state를 <span style="color: red">“신뢰 가능한 단일출처(single source of truth)”</span>로 만들어 두 요소를 결합할 수 있습니다. 그러면 폼을 렌더링 하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어 합니다. **React에 의해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트(controlled component)”라고 합니다.**
> 
- 리액트에서 신뢰 가능한 단일 출처(Single Source of Truth)는?
    - 신뢰가능한 단일 출처는 **하나의 상태를 나타내는 state는 한 곳에만 존재해야 한다는 뜻이다.**
    - 어떤 state가 여러 컴포넌트에서 사용되어야 한다면 props, Context api, Redux 등으로 관리해야 한다.
    - <span style="color: red">하나의 상태는 한 곳에만 존재해야 한다.</span>

- Vanilla JavaScript만약 `input` 태그의 `value`를 조작한다고 하면
    - 아래와 같이 두 개의 출처를 갖게 된다.
        1. `input`이 갖고 있는 `value attribute`
        2. JS에서 저장하게 된 변수
    - 리액트에서는 **제어 컴포넌트**를 통해 2개의 출처가 된 값이 항상 일치함을 보장해 준다.

## 3. 제어 컴포넌트

- 리액트의 대표적인 제어 컴포넌트
    - 변경된 `input` `value`가 매번 state로 push 되므로, `input`의 `value`와 React의 `value`가 항상 최신 값으로 일치함이 보장된다.
    - 매 입력마다 state가 변경되므로 re-rendering이 발생한다.

```tsx
import { useState } from 'react';

export const App = () => {
	const [name, setName] = useState('');

	return (
		<>
			<form>
				<label>이름:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</form>
		</>
	)
}
```

## 4. 비제어 컴포넌트

리액트의 공식문서에 비제어 컴포넌트 파트를 보면 다음과 같은 말이 있다.

> 대부분 경우의 폼을 구현하는데 <span style="color: red">제어컴포넌트</span>를 사용하는 것이 좋습니다. <span style="color: red">제어 컴포넌트에서 폼 데이터는 React 컴포넌트</span>에서 다루어집니다. 대안인 <span style="color: red">비제어 컴포넌트는 DOM자체</span>에서 폼 데이터가 다루어 집니다.
<span style="color: red">비제어 컴포넌트는 DOM에 신뢰 가능한 출처를 유지</span>하므로 비제어 컴포넌트를 사용할 때 React와 non-React 코드를 통합하는 것이 쉬울 수 있습니다. 빠르고 간편하게 적은 코드를 작성할 수 있지만, 그 외에는 일반적으로 제어된 컴포넌트를 사용해야 합니다.
> 

- 비제어 컴포넌트 코드
    - ref는 비제어 컴포넌트를 사용할때 중요하다.
    - 아래 코드에서는 React가 `input`을 전혀 관여하지 않는다.
    - 값이 필요할 때 pull 한다.
    - 데이터가 항상 일치함을 보장하지 못한다.
    - ref로 관리하기 때문에 re-rendering이 발생하지 않는다.

```tsx
export const Uncontrolled = () => {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={inputRef} />
			<button type="submit">제출</button>
		</form>
	);
}
```

## 5. 제어 컴포넌트 vs 비제어 컴포넌트

|  | **제어 컴포넌트** | **비제어 컴포넌트** |
| --- | --- | --- |
| **값 관리** | 리액트가 값을 관리 | DOM이 값을 저장 |
| **입력 값** | 사용자의 입력이 항상 State로 push | 입력 값이 필요할 때, element에서 pull |
| **값의 보장** | 리액트가 값이 항상 일치함을 보장 | 값이 항상 일치함을 보장 하지 않음 |
| **Re-rendering** | Re-rendering이 발생 | Re-rendering이 발생하지 않음 |

## 5. 마무리

### 사용 예

- 제어 컴포넌트
    - 매 입력마다 입력 값으로 어떤 동작을 해야 하는 경우
    - 입력 값을 다른 곳에 rendering 해야 하는 경우 (사용자 입력에 대한 즉각적인 validation)

- 비제어 컴포넌트
    - 매 입력 마다 최신의 값이 꼭 필요하지 않은 경우
    - 매 렌더링 마다 복잡한 연산이 발생하는 경우

### 최종 정리

1. `Form tag elements`는 DOM에 사용자 입력을 저장한다.
2. `input`의 `value`를 다른 곳에서 저장하여 사용하면 값이 일치함을 신뢰하기 어려워진다.
3. 제어 컴포넌트는 `value`와 state를 동기화 함으로써 항상 최신의 값을 보장한다.
4. 제어 컴포넌트와 비제어 컴포넌트는 각각 장단점이 있으니, 사용처에 맞게 선택하면 된다.