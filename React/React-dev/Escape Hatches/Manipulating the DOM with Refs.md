# Manipulating the DOM with Refs

- React가 관리하는 DOM 요소에 접근해야 할 때 ref가 필요하다.

## ref로 노드 가져오기

- 컴포넌트 안에서 ref를 선언하기 위해 Hook을 사용하고

```jsx
const myRef = useRef(null);
```

- ref를 DOM 노드를 가져아야하는 JSX tag에 `ref` 어트리뷰트로 전달한다.

```jsx
<div ref={myRef}>
```

- 초기에 `myRef.current`가 `null`이 된다.
- React가 이 `<div>`에 대한 DOM 노드를 생성할 때, React는 이 노드에 대한 참조를 `myRef.current`에 넣는다.
    - 이 DOM 노드를 이벤트 핸들러에서 접근하거나 노드에 정의된 내장 브라우저 API를 사용할 수 있다.

#### Deep Dive

**ref 콜백을 사용하여 ref 리스트 관리하기**

- `ref` 어트리뷰트에 함수를 전달(ref 콜백)해서 자체 배열이나 Map을 유지하고, 인덱스나 특정 ID를 사용하여 어떤 ref에든 접근할 수 있다.

## 다른 컴포넌트의 DOM 노드 접근하기

- **직접 만든** 컴포넌트에 ref를 주입할 때는 `null`이 기본적으로 주어진다.
- React는 기본적으로 다른 컴포넌트의 DOM 노드에 접근하는 것을 허용하지 않는다.
    - ref는 자제해서 사용해야 하는 탈출구 이기 때문이다.

<br />

- `forwarRef`를 통해서 두 번째 `ref` 인수를 통해 상위의 `ref`를 받을 수 있도록 한다.

#### Deep Dive

**명령형 처리방식으로 하위 API 노출하기**

- 부모 컴포넌트에서 DOM 노드의 CSS 스타일을 직접 변경하는 등의 예상치 못한 작업을 할 수 있는데, 노출된 기능을 제한하고 싶을 때, `useImperativeHandle`을 사용하면 된다.
    - `useImperativeHandle`을 사용하면 React가 ref를 참조하는 부모 컴포넌트에 직접 구성한 객체를 전달하도록 지시한다.

```jsx
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // 오직 focus만 노출합니다.
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});
```

## React가 ref를 부여할 때

- React의 모든 갱신은 두 단계로 나눌 수 있다.
    - **렌더링** 단계에서 React는 화면에 무엇을 그려야 하는지 알아내도록 컴포넌트를 호출한다.
    - **커밋** 단계에서 React는 변경사항을 DOM에 적용한다.

<br />

- 일반적으로 렌더링하는 중 ref에 접근하는 것을 원치 않는다.
- React는 `ref.current`를 커밋 단계에서 설정한다.
    - DOM을 변경하기 전에 React는 관련된 `ref.current` 값을 미리 `null`로 설정한다.

#### Deep Dive

**flushSync로 state 변경을 동적으로 플러시하기**

- React에서 state 갱신은 큐에 쌓여 비동기적으로 처리된다.
- `setTodos`가 DOM을 업데이트하지 않기 때문에 문제가 발생한다.
- React가 DOM 변경을 동기적으로 수행하도록 할 수 있다.
    - `react-dom` 패키지의 `flushSync`를 가져오고 state 업데이트를 `flushSync` 호출로 감싸면 된다.

```jsx
flushSync(() => {
  setTodos([ ...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

## ref로 DOM을 조작하는 모범 사례

- React가 관리하는 DOM 노드를 직접 바꾸려 해서는 안된다.
    - React가 관리하는 DOM 요소에 대한 수정, 자식 추가 혹은 자식 삭제는 비일관적인 시각적 결과 혹은 충돌로 이어진다.
    - **안전하게 React가 업데이트할 이유가 없는 DOM 노드 일부를 수정할 수 있다.**
        - `<div>`가 항상 빈 채로 JSX에 있다면, React는 해당 노드의 자식 요소를 건드릴 이유가 없다. 따라서 빈 노드에서 엘리먼트를 추가하거나 삭제하는 것은 안전하다.
