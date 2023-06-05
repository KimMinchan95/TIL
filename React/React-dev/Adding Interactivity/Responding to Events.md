# Responding to Events

- React를 사용해서 JSX에 이벤트 핸들러들을 추가할 수 있다.
  - 이벤트 핸들러는 클릭, 호버, 폼 입력의 포커스 등과 같은 상호 작용에 따라 발동되는 고유한 기능이다.

## Adding event hanlders

- 이벤트 핸들러를 추가하려면 먼저 함수를 정의한 다음 해당 함수를 JSX태그에 prop으로 전달하면 된다.
- 이벤트 처리 함수는 일반적으로 컴포넌트 안에 선언되고, "handle"이라는 이름으로 시작해서 뒤에는 이벤트 이름을 지정한다.

<br />

- JSX안에서 이벤트 핸들러를 선언할 수도 있고, 인라인 이벤트 핸들러는 짧은 기능을 갖을 함수를 정의할 때 편리하다.

**주의**

- 이벤트 핸들러를 넘길때는 함수를 호출하지말고, 함수 그 자체를 넘겨야 한다.
  - React에게 이 함수를 기억하라고 말하고, 사용자가 버튼을 클릭할 때 기능을 호출하는 것이다.
  - JSX에서 `{}`내부의 JS는 즉시 실행되기 때문이다.

```jsx
<buttn onClick={hanldeClick}>
```

## Reading props in event handlers

- 이벤트 핸들러는 컴포넌트 안에 선언되므로, 컴포넌트의 props를 읽을 수 있다.

## Passing event handlers as props

- 부모 컴포넌트가 자식 이벤트 핸들러를 지정하도록 할 수 있다.
  - 그러기 위해서는 부모 컴포넌트로 부터 이벤트 핸들러를 prop으로 받으면 된다.

## Naming event handler props

- `<button>`과 `<div>`같은 내장된 컴포넌트는 `onClick`과 같이 브라우저 이벤트 이름만 지원한다.

  - 그러나 컴포넌트를 직접 구성할 때는 이벤트 핸들러의 props 이름을 원하는 대로 지정할 수 있다.

- 관례에 따라 이벤트 핸들러 props는 `on`으로 시작한 다음 대문자가 따라와야 한다.
- 컴포넌트가 여러 상호 작용을 지원하는 경우 앱별 컨셉에 대해 이벤트 핸들러 props 이름을 지정할 수 있다.
  - 예시) `onPlayMovie`, `onUploadingImage`

<br />

**주의**

- 이벤트 핸들러의 적합한 HTML 태그를 사용해야 한다.
- 예를 들어 클릭을 처리하려면 `<div>` 대신 `<button>`을 사용해야 한다. - `<button>`을 사용해야지 키보드 내비게이션과 같은 내장 브라우저 동작이 가능하다.

## Event propagation

- 이벤트 핸들러는 구성 요소가 가질 수 있는 모든 하위 항목의 이벤트도 캡처한다.
- 우리는 이것을 "bubbles"(버블)또는 "propagates"(전파)를 통해 트리 위로 올라간다고 말한다.
  - 이벤트가 일어난 곳에서 시작해서 트리 위로 올라간다.

<br />

**주의**

- React의 모든 이벤트들은 연결된 JSX 태그에서만 동작하는 `onScroll`을 제외하고 전파된다.

## Stopping propagation

- 이벤트 핸들러는 **이벤트 객체**에 유일한 인수로 수신한다.
- 관례상 "e"라고 불린다. 이 객체를 사용해서 이벤트에 대한 정보를 읽을 수 있다.
- 이 객체를 사용해서 전파를 막을수 있는데 `e.stopPropagation()`을 통해 가능하다.

**Deep Dive**

- 드문 경우지만, 전파를 막았어도 자식 요소의 모든 이벤트를 캡처해야할 때가 있다.
- 예를 들어, 전파 로직에 관계 없이 모든 클릭을 분석에 기록할 수 있다.
  - 이벤트 이름 끝에 Capture(캡처)를 추가하여 이 작업을 수행할 수 있다.

```jsx
<div
  onClickCapture={() => {
    /* this runs first */
  }}
>
  <button onClick={(e) => e.stopPropagation()} />
  <button onClick={(e) => e.stopPropagation()} />
</div>
```

- 각 이벤트는 세 단계 전파된다

  - 아래로 이동하며 모든 `onClickCapture` 핸들러를 호출한다.
  - 클릭한 요소의 `onClick` 핸들러를 실행한다.
  - 모든 `onClick` 핸들러를 호출하여 위쪽으로 이동한다.

- 캡처 이벤트는 라우터나 분석과 같은 코드에 유용하지만 앱 코드에서는 사용하지 않을 수 있다.

## Passing handlers as alternative to propagation

```jsx
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
```

- 위의 코드처럼 부모 `onClick` 이벤트 핸들러를 호출하기 전에 코드를 추가할 수 있다.
  - 이 패턴은 전파에 대한 대안을 제공한다.
  - 하위 컴포넌트가 이벤트를 처리하는 동시에 상위 컴포넌트가 몇 가지 추가 동작을 지정할 수 있다.
- 전파와는 달리, 자동적인 것이 아니다. 이 패턴의 장점은 어떤 이벤트의 결과로 실행되는 코드 체인을 명확하게 할 수 있다.
- 전파에 의존하여 실행하는 핸들러와 그 이유를 추적하기 어렵다면 사용하기 좋은 방법이다.

## Preventing default behavior

- 일부 브라우저는 이벤트에 관련된 기본 동작이 있다.
- 예를 들어 `<form>`에서는 sumbit(제출) 이벤트가 있어서 내부의 button을 누르면 전체 페이지를 다시 로드한다.
  - `e.preventDefault()` 를 이벤트 객체에서 호출함으로 리로드를 멈출 수 있다.

**`e.stopPropagation()`와 `e.preventDefault()`의 차이**

- `e.stopPropagation()` : 태그에 위에 연결된 이벤트 핸들러를 실행되지 않도록 한다.
- `e.preventDefault()` : 해당 이벤트가 있는 몇몇의 이벤트에 대한 기본 브라우저 동작을 방지한다.

## Can event handlers have side effects?

- 이벤트 핸들러는 사이드 이펙트가 발생시키기 가장 좋은 곳이다.
