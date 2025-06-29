# Lifecycle of Reactive Effects

- Effect는 컴포넌트와 다른 생명주기를 갖는다.
- 컴포넌트는 마운트, 업데이트 또는 마운트를 해제할 수 있다.
- Effect는 동기화를 시작하고 나중에 동기화를 중지하는 두 가지 작업만 할 수 있다.

## The lifecycle of an Effect

- 컴포넌트 생명주기에 Effect를 대입해서 생각하는 것은 좋지 않다.
- 대신 각 Effect를 컴포넌트의 생명주기와 독립적으로 생각해야 한다.

#### Note

- 일부 Effect는 클린업 함수를 전혀 반환하지 않는데, 이 경우에는 React는 아무 작업도 하지 않는 빈 클린업 함수를 반환하는 것처럼 동작한다.

## Thinking from the Effect’s perspectiveHow React re-synchronizes your Effect

- 컴포넌트의 관점에서 보면 Effect를 "렌더링 후" 또는 "마운트 해제 전"과 같은 특정 시점에 실행되는 "콜백" 또는 "생명주기 이벤트"로 생각하기 쉽다.
- **이러한 사고 방식은 매우 복잡해지므로 피하는 것이 좋다.**

<br />

- 항상 한 번에 하나의 시작/중지 사이클에만 집중해야 한다.
- 컴포넌트를 마운트, 업데이트 또는 마운트 해제하는 것은 중요하지 않다.
- 동기화를 시작하는 방법과 중지하는 방법만 설명하면 된다.

## How React knows that it needs to re-synchronize the Effect How React verifies that your Effect can re-synchronize

- Effect의 의존성 목록에 감지해야하는 코드를 포함시켜 의존하고 있음을 React에게 알릴 수 있다.
- 컴포넌트가 다시 렌더링될 때마다 React는 사용자가 전달한 의존성 배열을 살펴본다.
- 배열의 값 중 하나라도 이전 렌더링 중에 전달한 동일한 지점의 값과 다르면 React는 Effect를 다시 동기화한다.
  - React는 `Object.is`로 비교한다.

## Each Effect represents a separate synchronization process

- **코드의 각 Effect는 별도의 독립적인 동기화 프로세스를 나타내야 한다.**
- 일관된 로직을 별도의 Effect로 분리하면 코드가 "더 깔끔해" 보일 수 있지만 유지 관리가 더 어려워 진다.
  - 프로세스가 동일한지 또는 분리되어 있는지를 고려해야 한다.

## Effects “react” to reactive values

- 절대 변하지 않는 값은 의존성으로 지정하는 의미가 없다.

#### Deep Dive

- 전역 또는 변이 가능한 값이 의존성이 될 수 있을까?

<br />

- `useSyncExternalStore`를 사용하여 외부 변경 가능한 값을 읽고 구독할 수 있다.

## React verifies that you specified every reactive value as a dependency

- 린터가 React에 맞게 구성된 경우, Effect 코드에서 사용되는 모든 반응형 값이 해당 의존성으로 선언되었는지 확인한다.
