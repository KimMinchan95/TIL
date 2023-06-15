# Scaling Up with Reducer and Context

- Reducer를 사용하면 컴포넌트의 state 업데이트 로직을 통합할 수 있다.
- Context를 사용하면 다른 컴포넌트들에 정보를 전달할 수 있다.
- Reducer와 context를 함께 사용하여 복잡한 화면의 state를 관리할 수 있다.

## Reducer와 context를 결합하기

- 수십 수백개의 컴포넌트를 거쳐 state나 함수를 전달하기는 어렵다.
- 이러한 이유로 props를 전달하는 대신 state와 dispatch 기능을 모두 context에 추가할 수 있다.
  - 이렇게 하면 트리의 부모 컴포넌트 아래에 있는 모든 컴포넌트가 반복적인 "prop drilling" 없이 state를 읽고 action들을 dispatch할 수 있다.

#### Reducer와 context를 결합하는 방법은 아래와 같다.

1. Context를 **생성한다.**
2. State와 dispatch 함수를 context에 **넣는다.**
3. 트리 안에서 context를 **사용한다.**

## 1단계: Context 생성

- 트리를 통해 전달하려면, 두 개의 별개의 context를 **생성**해야 한다.

  - `~Context`는 현재 state를 제공한다.
  - `~DispatchContext`는 컴포넌트에서 action을 dispatch 하는 함수를 제공한다.

- 두 context는 나중에 다른 파일에서 가져올 수 있도록 별도의 파일에서 내보낸다.

```jsx
import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
```

- 여기서 `null`을 기본값으로 두 context에 모두 전달한다.
  - 실제 값은 컴포넌트에 의해 제공된다.

## 2단계: State과 dispatch 함수를 context에 넣기

- 이제 컴포넌트에서 두 context를 모두 가져올 수 있다.
- `useReducer()`가 반환한 state 및 `dispatch`를 가져와 아래 전체 트리에 제공한다.

```jsx
import { TasksContext, TasksDispatchContext } from './TasksContext.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // ...
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        ...
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
```

## 3단계: 트리 안에서 context 사용하기

- 필요한 컴포넌트에서 `useContext`를 이용해서 사용한다.
- 업데이트가 필요할시 context의 `dispatch`함수를 읽고 호출할 수 있다.

<br />

- state는 `useReudcer`로 관리되는 최상위 컴포넌트에 "존재"하지만, context로 가져오고 사용하여 트리의 아래 있는 컴포넌트에서 import 및 사용할 수 있다.

## 하나의 파일로 합치기

- reducer와 context를 하나의 파일에 작성하면 컴포넌트들을 좀 더 정리할 수 있다.
- context를 사용하기 위한 `use` 함수들도 내보낼 수 있다.

1. Reducer로 state를 관리한다.
2. 두 context를 모두 하위 컴포넌트에 제공한다.
3. `children`을 prop으로 받기 떄문에 JSX를 전달할 수 있다.

```jsx
import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

// ... 생략
```
