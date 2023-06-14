# Passing Data Deeply with Context

- 보통의 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 정보를 전달한다.
- 그러나 중간에 많은 컴포넌트를 거쳐야 하거나, 애플리케이션의 많은 컴포넌트에서 동일한 정보가 필요한 경우에는 props를 전달하는 것이 번거롭고 불편할 수 있다.
- Context를 사용하면 명시적으로 props를 전달해주지 않아도 부모 컴포넌트가 트리에 있는 자식 컴포넌트에서나 정보를 사용할 수 있다.

## Props 전달하기의 문제점

- prop을 트리를 통해 깊이 전해줘야 하거나, 많은 컴포넌트에서 같은 prop이 필요한 경우에 장황하고 불편할 수 있다.
- 데이터가 필요한 여러 컴포넌트의 가장 가까운 공통 조상은 트리 상 높이 위치할 수 있고 높이 state를 끌어올리는 것은 "Prop drilling"이라는 상황을 초래할 수 있다.

## Context: Props 전달하기의 대안

- context는 다음 세 단계로 진행된다.

1. Context를 **생성하기**
2. 데이터가 필요한 컴포넌트에서 context를 **사용하기**
3. 데이터를 지정하는 컴포넌트에서 context를 **제공하기**

## 1단계: Context 생성하기

- context를 생성하고, 컴포넌트에서 사용할 수 있도록 **파일에서 내보내야 한다.**

```jsx
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

## 2단계: Context 사용하기

- React에서 `useContext` Hook과 생성한 Context를 가져온다.
- context인 `LevelContext`에서 값을 읽도록 한다.

```jsx
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}
```

## 3단계: Context 제공하기

- context를 자식들에게 제공하기 위해 context provider로 감싸준다.

- 컴포넌트는 그 위에 있는 UI트리에서 가장 가까운 `<LevelContext.Provider>`의 값을 사용한다.

```jsx
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
```

## Context를 사용하기 전에 고려할 것

- **Props 전달하기로 시작하기.**
  - 사소한 컴포넌트들이 아니라면 여러 개의 props가 여러 컴포넌트를 거쳐 가는 것은 그리 이상한 일이 아니다.
  - 힘든 일처럼 느껴질 수 있지만 어떤 컴포넌트가 어떤 데이터를 사용하는지 명확히 해준다.
  - 데이터의 흐름이 props를 통해 분명해져 코드를 유지보수 하기에도 좋다.
- **컴포넌트를 추출하고 JSX를 `children`으로 전달하기**
  - 데이터를 지정하는 컴포넌트와 데이터가 필요한 컴포넌트 사이의 층수가 줄어들 수 있도록 `children`으로 전달할 수도 있다.
  - 예시) `<Layout><Posts posts={posts} /><Layout>`
