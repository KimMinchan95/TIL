# Extracting State Logic into a Reducer

- state를 업데이트하는 로직이 여러 이벤트 핸들러에 분산된 컴포넌트는 양이 많아 부담스러울 수 있다.
  - state를 업데이트하는 로직을 컴포넌트 외부에 `reducer` 함수로 통합할 수 있다.

## reducer를 사용하여 state 로직 통합하기

- `reducer`는 state를 다루는 방법으로 세 단계에 걸쳐 `useState`에서 `useReducer`로 바꿀 수 있다.

1. state를 설정하는 것에서 action을 dispatch 함수로 전달하는 것으로 **바꾸기.**
2. reducer 함수 **작성하기**
3. 컴포넌트에서 reducer **사용하기.**

## 1단계: state를 설정하는 것에서 action을 dispatch 함수로 전달하는 것으로 바꾸기

- `reducer`로 상태를 관리하는 것은 state를 직접 설정하는 것과 다르다.
  - React에게 "무엇을 해야할지"를 알려주는 대신 이벤트 핸들러에서 "액션"을 보내서 "사용자가 방금 한 일"을 알려준다.

```jsx
function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}
```

- `dispatch` 함수에 넣어준 객체를 "action"이라고 한다.
- 이 객체는 일반적인 JS 객체로 어떤 것이든 자유롭게 넣을 수 있지만, "어떤 상황이 발생하는지"에 대한 최소한의 정보를 담고 있어야 한다.

#### Note

- `action`객체는 컨벤션에 따라 어떤 상황이 발생했는지 설명하기 위해 문자열 타입의 `type`을 넘겨주고 이외의 정보는 다른 필드에 담아서 전달해주도록 작성하는 것이 일반적이다.

## 2단계: reducer 함수 작성하기

- `reducer` 함수는 state에 대한 로직을 넣는 곳이다. 이 함수는 현재의 state 값과 action 객체, 두 개의 인자를 받고 다음 state 값을 반환해준다.
  - 이 함수를 컴포넌트 외부에 선언할 수 있고, 들여쓰기 수준을 줄이고 가독성을 높힐 수 있다.

```jsx
function yourReducer(state, action) {
  // React가 설정하게될 다음 state 값을 반환한다.
}
```

## 3단계: 컴포넌트에서 reducer 사용하기

- React에서 `useReducer` Hook을 불러와서 state와 연결시키면 된다.

- `useReducer` Hook은 두 개의 인자를 넘겨 받는다.
  - reducer 함수
  - 초기 state 값
- 두 가지를 반환한다.
  - state를 담을 수 있는 값
  - dispatch 함수 (사용자의 action을 reducer 함수에게 "전달하게 될")

```jsx
const [state, dispatch] = useReducer(yourReducer, initialState);
```

## `useState`와 `useReducer` 비교하기

- **코드 크기**
  - 일반적으로 `useState`를 사용하면, 미리 작성해야 하는 코드가 줄어든다.
  - 여러 이벤트 핸들러에 비슷한 방식으로 state를 업데이트하는 경우, `useReudcer` 사용이 코드의 양을 줄여 줄 수도 있다.
- **가독성**
  - `useState`로 간단한 state를 업데이트하는 경우 가독성이 좋은 편이다.
  - 복잡한 구조의 state를 다룰 때는 `useReducer`를 사용하면 업데이트 로직의 동작방법과 이벤트 핸들러를 통해서 무엇이 발생했는지 구현한 부분을 명확하게 구분할 수 있다.
- **디버깅**
  - `useState`를 사용하면 버그를 발견했을 때, 어디서 state가 잘못 설정되었는지 찾기 어려울 수 있다.
  - `useReducer`를 사용하면 콘솔 로그를 reducer에 추가해서 state가 업데이트되는 모든 부분과 왜 해당 버그가 발생했는지(어떤 `action`으로 인한 것인지)를 확인할 수 있다.
  - `action`이 올바르게 작성되어 있다면, 버그를 발생시킨 부분이 reducer 로직 자체에 있다는 것을 알 수 있다.
- **테스팅**
  - reducer는 컴포넌트에 의존하지 않는 순수 함수이다. 이로 인해 reducer를 독립적으로 분리해서 내보내거나 테스트할 수 있다.

## reducer 잘 작성하기

- **reducer는 순수해야 한다.**
  - `state` 업데이트 함수와 비슷하게, reducer는 렌더링 중에 동작한다. (action은 다음 렌더링까지 큐에 들어가 있다.)
  - 이것은 reducer는 순수해야한다는 것을 의미한다.
  - `timeourt` 요청이나 사이드 이펙트 등을 요청으로 보내면 안된다.
  - 객체나 배열을 직접 변경해서는 안된다.
- **각 action은 여러번 데이터를 변경해도 단일 상호 작용을 설명해야한다.**
  - 예를들어, 사용자 관리에서 5개의 필드가 있는 상황에서 "Reset"버튼을 누르면 5번의 개별 "set"보다 한번의 "reset" 작업을 발송해야 한다.
  - 모든 작업을 reducer에 기록하는 경우, 해당 로그는 어떤 상호 작용 또는 응답이 일어났는지 순서대로 재구성할 수 있을 정도로 명확해야 한다. 이는 디버깅에 도움된다.
