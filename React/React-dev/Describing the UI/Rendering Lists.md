# 리스트 렌더링

- 데이터 모음에서 유사한 컴포넌트 여러 개를 표시하고 싶을때, JS 배열 메서드를 사용해서 데이터 배열을 조작할 수 있다.
- React에서 `filter`와 `map`을 사용해서 데이터 배열을 필터링하고 컴포넌트 배열로 별환 할 수 있다.

## 배열을 데이터로 렌더링하기

- 리스트 항목이 데이터만 다를 때 JS 객체와 배열에 저장하고 `map`과 `filter`같은 메서드를 사용해서 해달 객체에서 컴포넌트 리스트를 렌더링할 수 있다.

#### 배열에서 항목 리스트를 생성하는 방법

1. 데이터를 배열로 **이동**한다.
2. `people`의 요소를 새로운 JSX 노드 배열에 **매핑**한다.

```jsx
const listItems = people.map((person) => <li>{person}</li>);
```

3. 컴포넌트에 매핑된 배열을 **반환**한다.

## 배열의 항목들을 필터링하기

- 배열에서 특정 항목을 필터링하고 싶을때 JS에 배열 `filter` 메서드를 사용하면 된다.

#### 배열에서 항목 리스트를 필터링하는 방법

1. 배열에서 `filter`메서드를 호출해 원하는 조건이 `true`가 되는 함수를 사용해서 새로운 배열을 **생성**한다.
2. 새로운 배열을 **매핑**한다.
3. 컴포넌트에서 매핑된 항목을 **반환**한다.

## `Key`를 사용해서 리스트 항목을 순서대로 유지하기

- 각 배열 항목에 다른 항목 중에서 고유하게 식별할 수 있는 문자열 또는 숫자를 `key`로 지정해야 한다.
- `key`는 각 컴포넌트가 어떤 배열 항목에 해당하는지 React에 알려주어 일치시킬 수 있도록 한다.
- 배열 항목이 정렬 등으로 인해 이동하거나 삽입되거나 삭제될 수 있는 경우 중요하다.
- `key`를 잘 선택해서 React가 정확히 무슨 일이 일어났는지 추론하고 DOM 트리에 올바르게 업데이트 하게 해주어야한다.

## `key`를 가져오는 곳

- 데이터 소스마다 다른 `key` 소스를 제공한다.
  - **데이터베이스의 데이터**: 데이터베이스에서 데이터를 가져오는 경우 본질적으로 고유한 데이터 베이스 `key/ID`를 사용할 수 있다.
  - **로컬에서 생성된 데이터**: 데이터가 로컬에서 생성되고 유지되는 경우, 항목을 만들 때 `uuid`같은 패키지를 사용하면 된다.

## `key` 규칙

- **key는 형제 간에 고유해야 한다.**
- **key는 변경되어서는 안된다** - 렌더링 중에는 `key`를 생성하면 안된다.
  - `key={Math.random()}`처럼 즉석에서 `key`를 생성하면 안된다.
  - 렌더링 간에 `key`가 일치하지 않아 모든 컴포넌트와 DOM이 매번 재생성될 수 있다.

<br />
- 컴포넌트는 `key`를 prop으로 받지 않는다는 것에 유의해야 한다.

## Recap

- JS의 `map`을 사용해서 유사한 컴포넌트 집합을 생성할 수 있다.
- JS의 `filter`를 사용해서 필터링된 항목의 배열을 생성할 수 있다.
- 컬렉션에서 각 컴포넌트에 `key`를 설정하여 위치나 데이터가 변경되더라도 React가 각 컴포넌트를 추적할 수 있도록 할 수 있다.
