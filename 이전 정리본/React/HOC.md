# HOC

> 고차 컴포넌트(HOC, Higher Order Component)는 컴포넌트 로직을 재사용하기 위한 React의 고급 기술입니다. 고차 컴포넌트(HOC)는 React API의 일부가 아니며, React의 구성적 특성에서 나오는 패턴입니다. - 리액트 docs
> 

**컴포넌트를 가져와 새 컴포넌트를 반환하는 함수이다.**

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- 컴포넌트는 props를 UI로 변환하는 반면에, 고차 컴포넌트는 컴포넌트를 새로운 컴포넌트로 변환한다.
- HOC의 예로는 Redux의 connect가 대표적으로, 서드파티 React 라이브러리에서 흔하게 볼 수 있다.
- HOC는 같은 로직을 다수의 컴포넌트에 동일하게 적용해야할 때 유용하다.
- 함수컴포넌트가 생기고 hook이 도입된 이후, HOC의 사용이 많이 줄어들었다.
    - HOC는 클래스형 컴포넌트에서 react life cycle을 고려한 재사용 가능한 로직을 만들기 위해서 사용되었었고, 대부분 hook으로 대체가 가능하기 때문이다.
- 고차 컴포넌트는 사이드 이펙트가 전혀 없는 순수 함수이다.
    - HOC는 입력된 컴포넌트를 수정하지 않으며 상속을 사용하여 동작을 복사하지도 않는다.
    - 오히려 고차 컴포넌트는 원본 컴포넌트를 컨테이너 컴포넌트로 포장(Wrapping)하여 조합 (compose)한다.

### HOC 예시

> 아래 예시는 프로젝트를 진행하면서 react-portal을 컴포넌트에 적용시키는 HOC를 작성한 예시 코드이다.
> 

```jsx
import React from 'react';
import { createPortal } from 'react-dom';
import { useDidMount } from '@hooks';

const withPortal = InputComponent => {
	return function Component(props) {
		const isRendered = useDidMount();
		return isRendered ? (
			<InputComponent {...props} />
		) : (
			createPortal(<InputComponent {...props} />, document.getElementById('root'))
		);
	};
};

export default withPortal;
```

---

## 참고자료

[React HOC에 대해 알아보자](https://jiyoon-park.tistory.com/entry/React-HOC%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)