# Referencing Values with Refs

- 컴포넌트가 일부 정보를 "기억"하고 싶지만, 해당 정보가 렌더링을 유발하지 않도록 하려면 `ref`를 사용해야 한다.

## 컴포넌트에 ref를 추가하기

- 컴포넌트 내에서 `useRef` Hook을 호출하고 참조할 초깃값을 유일한 인자로 전달한다.

```jsx
const ref = useRef(0);
```

- `useRef`는 다음과 같은 객체를 반환한다.

```jsx
{
    current: 0 // 당신이 전달한 값
}
```

- `ref.current` 프로퍼티를 통해 해당 ref의 `current`값에 접근할 수 있다.
- 이 값은 읽고 쓸 수 있다.
- React 단방향 데이터 흐름에서 "escape hatch"(비상 탈출로)가 되는 것이다.

- ref는 읽고 수정할 수 있는 `current` 프로퍼티를 가진 일반 자바스크립트 객체이다.
    - 숫자, 문자열, 객체, 함수 등 모든 것을 가리킬 수 있다.

## 예시: 스톱워치 작성

- `setInterval` 호출로 반환된 interval ID를 어딘가 보관해야지 interval을 해제할 수 있다.
- 렌더링에 정보를 사용할 때 해당 state로 유지한다.
- event handler에게만 정보가 필요하고 변경할 필요가 없을 때, ref를 사용하는 것이 더 효율적일 수 있다.

## ref와 state 차이

|refs|state|
|--|--|
|`useRef(initialValue)` 가 `{ current: initialValue }` 을 반환한다.|`useState(initialValue)` 은 state 변수와 setter 함수 `[value, setValue]` 의 current 값을 반환한다.|
|state를 바꿔도 리렌더 되지 않는다.|state를 바꾸면 리렌더된다.|
|Mutable-렌더링 프로세스 외부에서 `current`값을 수정 및 업데이트할 수 있다.|Immutable-state 설정 함수를 사용하여 state 변수를 수정하여 리렌더러를 대기열에 넣어햐 한다.|
|렌더링 중에는 `current` 값을 읽거나 쓰면 안 된다.|언제든지 state를 읽을 수 있다. 그러나 각 렌더에는 변경되지 않는 자체적인 snapshot state가 있다.|

#### Deep Dive

**How does useRef work inside?**

- `useRef`는 `useState` 위에 구현될 수 있다.
    - setter가 없는 정규 state 변수라고 생각하면 된다.

```jsx
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
```

## refs를 사용할 시기

- 일반적으로 컴포넌트가 React를 "외부"와 외부 API - 컴포넌트의 형태에 영향을 미치지 않는 브라우저 API와 통신해야 할 때 ref를 사용한다.
    - timeout IDs를 저장
    - DOM 엘리먼트 저장 및 조장
    - JSX를 계산하는 데 필요하지 않는 다른 객체 저장

## refs의 좋은 예시

- **refs를 escape hatch로 간주한다.** Refs는 외부 시스템이나 브라우저 API로 작업할 때 유용하다. 애플리케이션 로직과 데이터 흘므의 상당 부분이 refs에 의존한다면 접근 방식을 재고해 보는 것이 좋다.
- **렌더링 중에 `ref.current`를 읽거나 쓰지 말아라.** 렌더링 중에 일부 정보가 필요한 경우 state를 대신 사용하라.

<br />

- ref의 current 값을 변조하면 state와 다르게 즉시 변경된다.
    - 그 이유는 ref 자체가 일반 JS 객체처럼 동작하기 때문이다.

```jsx
ref.current = 5;
console.log(ref.current); // 5
```