## RTK useSelector, useDispatch 타입 지정하기

### Redux TS 적용기

회사코드를 TS로 바꾸는 재미에 빠진 2일째, Redux코드를 건드리기 시작했다.
처음에 하나하나 TS를 적용하다가 Redux 공식문서를 보니 `hook`에 미리 TS를 적용시켜 놓는 코드를 발견하고 기록해 놓는다.

```ts
// configureStore 파일
import reducers from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

export default function createStore() {
    return configureStore({
        reducer: {
            ...reducres,
        },
        // 다음이 middleware 추가 코드이다.
        middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
        // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
        devTools: true,
    })
}

const store = createStore();
// state type 지정 코드
export type RootState = ReturnType<typeof store.getState>;
// dispatch type 지정 코드
export type AppDispatch = typeof store.dispatch;
```

이렇게 `RootState`를 만들어 놓으면 `useSelector`를 사용할때 Type 에러를 해결할 수 있다.
```tsx
import { useSelector } from 'react-redux';
import { RootState } from '/src/configureStore';

const exampleComponent = () => {
  const { info } = useSelector((state: RootState) => state.UserInfo);
  
	return <>
      // ...some code
      </>
}
```

하지만 이렇게 사용하면 `useSelector`를 사용할 때 마다 `RootState`를 사용해서 Type을 지정해 줘야하는 번거로움이 있다.
이 문제의 해결책으로 Redux 공식 문서에서는 다음을 제시한다.

### Type 지정 번거로움의 해결책
```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './configureStore';

// 'useDispatch'와 'useSelector' 대신 사용할 것
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```
- `TypedUseSelectorHook`는 react-redux v7.1.3에서 업데이트 되었다.

이렇게 작성해 놓고 `useDispatch`와 `useSelector` 대신 import 해서 사용하면 사용할 때마다 Type을 지정하는 번거로움이 사라진다.

---
### 참고자료
[Redux.js - useage-with-typescript](https://redux.js.org/usage/usage-with-typescript)