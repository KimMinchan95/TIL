# Queueing a Series of State Updates

- State 변수를 설정하면 다음 렌더링이 큐에 들어간다.

## React state batches 업데이트

- **React는 state 업데이트를 하기 전에 이벤트 핸들러의 모든 코드가 실행될 때까지 기다린다.**
    - 너무 많은 리렌더링이 발생하지 않고도 여러 컴포넌트에서 나온 다수의 state 변수를 업데이트할 수 있다.
    - 이는 이벤트 핸들러와 그 안에 있는 코드가 완료될 때까지 UI가 업데이트되지 않는다는 의미이기도 하다.
    - **batching**이라고도 하는 이 동작은 React 앱을 훨씬 빠르게 실행할 수 있게 해준다.

- **React는 클릭과 같은 여러 의도적인 이벤트에 대해 batch하지 않는다.** 각 클릭은 개별적으로 처리된다.

## 다음 렌더링 전에 동일한 state 변수를 여러 번 업데이트 하기
- 다음 렌더링 전에 동일한 state 변수를 여러 번 업데이트 하고 싶으면 `setNumber(number => number + 1)` 와 같이 이전 큐의 state를 기반으로 다음 state를 계산하는 함수를 전달할 수 있다.
- `n => n + 1`은 업데이터 함수(updater function)이라고 부른다.

<br />

- 다음 렌더링 중에 `useState`를 호출하면 React는 큐를 순회한다.
- 이전 `number` state를 첫 번째 업데이터 함수에 `n` 인수로 전달한다.
- React는 이전 업데이터 함수의 반환 값을 가져와서 다음 업데이터 함수의 `n`으로 전달하는 식으로 반복한다.

## 업데이트 후 state를 바꾸면 어떻게 되나요?

- 이벤트 핸들러가 완료되면 React는 리렌더링을 실행한다.
- 리렌더링하는 동안 React는 큐를 처리한다.
- 업데이터 함수는 렌더링 중에 실행되므로, **업데이터 함수는 순수해야 하며** 결과만 반환해야 한다.

## 명명 규칙

- 업데이터 함수 인수의 이름은 해당 state 변수의 첫 글자로 지정하는 것이 일반적이다.

```jsx
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
```

- 좀 더 자세한 코드를 선호하는 경우 `setEnabled(enabled => !enabled)`와 같이 전체 state 변수 이름을 반복하거나 `setEnabled(prevEnabled => !prevEnabled)`와 같은 접두사를 사용하는 것이 널리 사용되는 규칙이다.