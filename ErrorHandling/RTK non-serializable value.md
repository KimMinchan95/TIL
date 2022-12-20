## RTK non-serializable value 오류 해결 방법

#### 오류 발생
- 금일 회사에서 Redux에서 RTK로 변환한 프로젝트에서 에러가 발생하는 것을 발견했다.
- 개발자 도구 console 창이 빨간색으로 물들었는데, 이 오류를 해결하지 않았다는 것에서 Redux가 아닌 RTK 사용시 나오는 고유한 오류라고 판단하고 서칭을 시작했다.

- 오류 내용은 Redux에서 값을 주고, 받을 때 object 형태의 값을 string 형태로 변환(JSON.stringify)하는데, 이 상황에서 변환이 불가능한 값을 전달했다는 에러였다.

#### 오류 분석
- 처음 예상한 에러 발생 원인은 반은 맞고 반은 틀렸다.
- RTK 고류한 오류는 아니고, Redux를 사용해도 발생할 수 있는 에러였다.
    - 단지 RTK에서 자동으로 생성해 주는 action 객체는 action 생성자 함수 형태이기 때문이라고 한다. (해결시 참고 사이트에 링크로 걸린 블로그에서 이 정보를 얻었다.)

#### 해결 방법
- 액션 생성자 함수에 `toString()` 메소드를 적용해도 된다고 하는데, 필자는 미들웨어 설정을 추가했다.

**오류 해결 코드**
```js
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
```

#### 해결시 참고 사이트
[Redux Toolkit - A non-serializable value was detected in an action, in the path: `type` 오류 해결 - 둉이](https://guiyomi.tistory.com/116)
[Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux - stack overflow](https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using)