## 1. React.Fragment란?

#### Fragment

```html
<React.Fragment></React.Fragment>
```

#### 대체 가능 

```html
<></>
```

> **React**에서 컴포넌트가 리턴하는 값은 반드시 “**단 하나의 최상위 태그로 묶여 있어야한다.”** 라는 법칙을 따라야 한다.
> 
- 아래의 예시 컴포넌트처럼 최상위 태그로 묶여있지 않으면 에러가 난다.

```jsx
const Componenet = () => {
	return (
		//<div>
			<h1>제목</h1>
			<p>본문</p>
		//</div>
	);
}
```

- 보통 이를 `div` 태그로 묶는데 이 의미없이 감싸주기만 한 `div` 태그는 가끔씩 우리의 `CSS` 스타일링을 방해한다.
- 하지만 이 `React.Fragment`를 사용하면 위의 상황이 일어나지 않는다.

## 2. 사용 방법은 다음과 같이 두 가지다. (보통은 두 번째 방법 사용)

```jsx
import React from 'react';

const Componenet = () => {
	return (
		<React.Fragment>
			<h1>제목</h1>
			<p>본문</p>
		</React.Fragment>
	);
}
```

```jsx
import React from 'react';

const Componenet = () => {
	return (
		<>
			<h1>제목</h1>
			<p>본문</p>
		</>
	);
}
```

## 3. map 사용시 Fragment에 key를 전달하기

> key를 전달하고 싶으면 `<></>` 를 사용하면 안되고 `React.Fragment` 를 사용해야 한다.
> 
- 아직은 `React.Fragment`가 받을 수 있는 props가 key 밖에 없다.

```jsx
import React from 'react';

const todoList = ['아침먹기', '점심먹기', '저녁먹기', '야식먹기'];

const Component = () => {
	return (
		<>
			{todoList.map((todo, idx) => (
					<React.Fragment key={todo + idx}>
					<div>{todo}</div>
				</React.Fragment>
			))}
		</>
	);
}
```

---
#### 자료 출처
[별코딩 - React.Fragment는 무엇? 리액트 개발자라면 꼭 알아야됨](https://www.youtube.com/watch?v=XuF6Qem0cTE)