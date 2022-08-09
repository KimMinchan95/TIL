# React - List와 Key

[React - List와 Key의 중요성. 디버깅의 악몽을 피하자!](https://www.youtube.com/watch?v=QC3PtSlzp3s&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=104&t=8s)

## Key

List 내부의 있는 Key값은 ‘안정적’이고 ‘고유한’ 값이어야한다.

```tsx
import { useState } from 'react';

const Todo = () => {
	const [inputValue, setInputValue] = useState('');
	const [list, setList] = useState([]);

	const addTodoList = () => {
		setList(prevState => {
			return [
				{
					id: list.length + 1,
					value: inputeVlaue
				}, 
					...prevList,
				];
		});
		setInputValue('');
	};

	return (
		<>
			<input
				value={inputVlaue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button onClick={addTodoList}>add</button>
			<ul>
				{list.map((item) => {
					return <li key={item.id}>{item.vlaue}</li>;
				})}
			</ul>
		</>
	)
};

export default Todo;
```

### 성능개선

- Todo List 앱을 만들다고 했을때
- list라는 state에 할 일들을 넣고 `ul`안에 `li` 리스트들을 만든다.
- 이 `li`들에 `key`값을 넣지 않으면 새로운 할일이 추가될 때 마다 모든 list들을 새로 렌더링한다.
    - 이는 React가 어떤 `li`가 새로 생겼는지 모르기 때문이다.
- 하지만 고유한 key값을 넣으면 React는 어떤 `li`가 새로생긴지 알게되고 새로생긴 `li`만 새로 그려준다.

### index값을 key로 전달할 때

- React 공식문서에서는 index값을 key로 넣는 것을 최대한 지양하라고 한다.
- 만약 위와 같은 Todo앱에서 key로 index를 넣었다면
    - 첫 번째 항목은 `key`로 `0` 두 번째 항목은 `key`로 `1` , … 이런 순서대로 `key`를 가지게 될 것이다.
    - 위의 Todo앱은 배열의 첫 번째 자리에 새로운 항목을 추가한다.
    - 그러면 기존의 첫 번째 항목은 두 번째로 밀려나면서 `key`로 `1`을 갖게되고 두 번째 항목도 밀려나면서 `key`로 `2`를 갖게되고, … 이런 순서대로 `key`가 전부 변한다.
    - React는 이를 전부 새로운 항목이라고 인식하고 전부 업데이트 한다.
- 변경될 수 있 수 있는 항목의 `key`는 index를 사용하면 안된다.

### 중복된 key로 인한 문제

- 중복된 key를 넣으면 리액트는 다음과 같은 경고가 console에 나온다.
    - `Encountered two children with the same key, `(key 이름)`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted - the behavior is unsupported and could change in a futrue version.`
- 중복된 키는 React에서 복제와 생략을 초래할 수 있다는 뜻이다.