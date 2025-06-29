# State

[[10분 테코톡] 무비의 React의 state](https://www.youtube.com/watch?v=NpTizz_qgtA)

## React에서 State란?

- Vanilla JS로 페이지에 수정사항이 있을때 직접 DOM에 접근해서 수정했음
    - 여러 개의 자바스크립트 객체와 화면에 있는 데이터를 직접 일치 시켜주어야됨
- React는 직접 데이터 바인딩을 해주기 떄문에 이러한 일을 하지 않아도 됨
    - State를 사용하면 자동으로 관련된 파트를 리렌더링 할 수 있게한다.

> **데이터바인딩**
제공자와 소비자로부터 데이터 원본을 결합시켜 이것들을 동기화 시키는 기법
> 

### Props와 State의 차이

**Props**

- 부모로부터 전달 받는다.
- 읽기 전용 데이터이다.

**State**

- 해당 컴포넌트에서 관리된다.

### 정리

- State를 자식 컴포넌트에게 넘겨주면 Props가 된다.
- Props는 읽기전용 데이터로서 immutable하다.

## Class형 컴포넌트의 State

### State를 사용하는 이유

- setState를 통해서 state를 변경해주면 화면이 리 렌더링이 된다.
    - state를 직접 변경해주지 않고 setState를 통해 변경시켜주는 이유는 새로운 state로 화면이 업데이트 되지 않는다.
    - state를 직접 변경해주면 화면을 업데이트 시켜주는 render함수가 실행시키지 않기 때문이다.
- 업데이트 프로세스 라이프 사이클 중 `shouldComponentUpdate`는 state가 변경되었는지 비교연산을 진행한다.
    - `shouldComponentUpdate`는 퓨어 컴포넌트를 사용하지 않았다면 기본값으로 `true`를 반환하기 때문에 setState로 업데이트 하였다면 리렌더링 한다.

### setState

state가 업데이트되고 사용자가 보이는 화면이 업데이트될 때까지는 아래와 같은 순서를 따른다.

- setState를 통해 state 변경
- state가 변경됨을 감지
- 화면을 reRender

```jsx
incrementCount() {
	this.setState({count: this.state.count + 1});
}

handleSomething() {
	this.incrementCount();
	this.incrementCount();
	this.incrementCount();
}
```

- 위의 코드의 최종값은 3이 될 것이라 예상하지만 1이다.
    - React는 컴포넌트가 reRender될 때까지 state를 갱신하지 않기 때문이다.
- setState는 즉각적인 명령이 아닌 요청이다. (비동기다)
    - 연속적으로 setState를 실행해도 state가 변경되지 않는다.
    

```jsx
incrementCount() {
	this.setState((state) => {
		return {count: state.count + 1}
	});
}

handleSomething() {
	this.incrementCount();
	this.incrementCount();
	this.incrementCount();
}
```

- 위와 같이 update함수를 이용하면 최신 state를 보장해 준다.

- state가 비동기로 동작하는 이유는 n번 변경만큼 n의 렌더링이 되기 때문에 성능 저하를 가져올 수 있다.
- 성능향상을 위해 setState의 실행을 지연시키고 여러 컴포넌트를 한번에 갱신한다.
    - 이를 **배치처리**라고 하는데 데이터를 실시간으로 처리하지 않고 종합하여 처리하는 것이다.
    - 이런 이유로 setState를 호출하자마자 state에 접근하는 것은 위험할 수 있다.
    

## 함수형 컴포넌트

> 함수형 컴포넌트는 stateless 컴포넌트라고도 불린다.
> 
- stateless컴포넌트라고 불리는 이유는 함수가 실행될때마다 일반 변수는 초기화 되기 때문이다.
    - 이를 해결하기 위해 hook인 useState를 사용한다.
    

**useState**

```jsx
const [state, setState] = useState(initialState);
```

- const 로 선언된 변수가 변경이 되는 이유
    - 우리는 state를 변경하는 것이 아니라 접근할 수 있는 변수 값을 변경한다.
    - useState 내부에는 접근할 수 있는 변수의 값을 업데이트 해주고 이를 배열에 나눠 반환해 준다.
    - 함수형 컴포넌트가 실행될때 state 변수는 계속 할당이 되는 것이다.