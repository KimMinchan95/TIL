# Synchronizing with Effects

- Effect를 사용하면 렌더링 이후 일부 코드를 실행할 수 있으므로 컴포넌트를 React 외부의 시스템과 동기화할 수 있다.
- React는 `Object.is` 비교를 사용해서 의존성 값을 비교한다.

## What are Effects and how are they different from events?

- Effect를 사용하면 특정 이벤트가 아닌 렌더링 자체로 인해 발생하는 사이드 이펙트를 명시할 수 있다.
- Effect는 화면 업데이트 후 커밋이 끝날 때 실행된다.
    - React 컴포넌트를 일부 외부 시스템과 동기화하기 좋은 시기이다.

## You might not need an Effect

- 컴포넌트에 Effect를 섣불리 추가해서는 안된다.
    - Effect가 다른 state를 기반으로 일부 state만을 조정하는 경우 Effect를 사용하지 않아도 된다.

## How to write an Effect

- Effect를 작성하기 위해서는 세 단계를 따라야 한다.

1. **Effect를 선언한다.** 기본적으로 Effect는 모든 렌더링 후에 실행된다.
2. **Effect의 의존성을 명시한다.** 대부분의 Effect는 렌더링 할 때마다가 아닌 필요할 때만 다시 실행해야 한다. 의존성을 지정하여 이를 제어해야 한다.
3. **필요한 경우 클린업을 추가한다.**

#### Deep Dive

**의존성 배열에서 ref가 생략되는 이유**

- `ref` 객체가 안정적인 정체성을 가지고 있기 때문이다.
- React는 렌더링할 때마다 동일한 `useRef` 호출에서 항상 동일한 객체를 얻을 수 있도록 보장한다.

## Subscribing to events

- Effect가 무언가를 구독하는 경우, 클린업 함수는 구독을 취소해야 한다.

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Fetching data

- Effect가 무언가를 fetch하면 클린업 함수는 fetch를 중단하거나 그 결과를 무시해야 한다.

```jsx
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

- 이미 발생한 네트워크 요청을 "실행 취소"할 수 없으므로, 클린업 함수에서 더이상 관련이 없는 fetch가 애플리케이션에 계속 영향을 미치지 않도록 해야한다.

## Not an Effect: Initializing the application

- 일부 로직은 애플리케이션이 시작될 때 한 번만 실행되어야 한다.
    - 이런 로직은 컴포넌트 외부에 넣을 수 있다.

```jsx
if (typeof window !== 'undefined') { // Check if we're running in the browser.
                                     // 실행환경이 브라우저인지 여부 확인
}
```

## Not an Effect: Buying a product
- 특정 상호 작용으로 발생하는 경우는 Effect가 아닌 이벤트 핸들러로 구현해야 한다.
