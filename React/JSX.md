## JSX란?

- JSX는 JavaScript XML의 약어로, JavaScript에 [XML](https://ko.wikipedia.org/wiki/XML)을 추가해서 확장한 문법이다.
- JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법은 아니다.
- 브라우저에서 실행하기 전에 바벨을 사용하여 일반 JavaScript 형태의 코드로 변환한다.
- [리액트를 사용하는데 JSX는 필수가 아니다.](https://ko.reactjs.org/docs/react-without-jsx.html)

## JSX 특징

### 반드시 부모 요소 하나가 감싸는 형태여야 한다.

- 두 개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.
- 이를 해결하기위해 `div`태그나 `React.Fragment`를 사용한다.
- 아래와 같은 경우에는 Compile Error가 일어난다.

```jsx
import React from 'react';
import Children from './Children';

const App = () => {
	return (
		<Children />
		<div>위는 자식 컴포넌트입니다.</div>
	);
}
```

### 태그는 닫혀있어야 한다.

- 태그는 반드시 닫혀있어야한다. (HTML에서는 `input` 또는 `br` 태그를 사용 할 때 닫지 않고 사용하기도 한다.)
- 태그가 닫혀있지 않으면 Compile Error가 일어난다.
- 태그가 비어있다면 XML처럼 `/>`를 이용해 바로 닫아야 한다.

```xml
const element = <img src={image.url} />
```

### JSX는 주입 공격을 방지한다.

- JSX에 사용자 입력을 삽입하는 것은 안전하다.
- 기본적으로 `React DOM`은 JSX에 삽입된 모든 값을 렌더링하기 전에 [이스케이프](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html) 한다.
애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않는다.
- 모든 항목은 렌더링 되기 전에 문자열로 변환된다.
- 이런 특성으로 XSS(cross-site-scripting) 공격을 방지할 수 있다.

> **이스케이프 시퀀스** (escape sequence)
이스케이프 시퀀스 또는 확장열은 컴퓨터나 주변 기기의 상태를 바꾸는 데에 쓰이는 일련의 문자열이다. 제어 시퀀스(control sequence)라고도 한다.
> 

---

### 참고자료

[React 공식 페이지 - JSX 소개 - React](https://ko.reactjs.org/docs/introducing-jsx.html)

[Goddaehee - [React] 2. JSX란? (정의, 장점, 문법)](https://goddaehee.tistory.com/296)

[Velopert - 4. JSX](https://react.vlpt.us/basic/04-jsx.html)