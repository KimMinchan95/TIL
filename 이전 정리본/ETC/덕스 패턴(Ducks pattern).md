# 덕스 패턴(Ducks pattern)

### 리덕스 모듈

리덕스 모듈이란?

- 액션 타입(Actions), 액션 생성 함수(Action Creators), 리듀서(Reducer)가 모두 들어있는 자바스크립트 파일을 의미함
- 리덕스 모듈에서 **리듀서**는 `default export` 하고, **액션 생성 함수**는 그냥 `export` 함

### 덕스 패턴이 뭐고, 쓰면 좋은점

- 액션 타입, 액션 생성함수, 리듀서를 각각 별도의 파일(심지어는 별도의 폴더)에 분리하여 작성하기 보다는, 그 셋을 하나의 모듈처럼 한 파일 안에 작성하자는 제안이다.

- **이렇게 리덕스 모듈화를 하는 것의 이점은** 작성하는 이도 왔다갔다 하지 않고 하나의 파일 안에서  "1. 액션 타입~ 2. 액션 생성 함수~ 3. 리듀서~" 이런 식으로 순서대로 작성하기만 하면 되니 코드 작성하기가 좀 더 용이하고, 다른 사람들이 보기에도 코드가 깔끔 명료해서 가독성이 좋다.

### 덕스 패턴의 규칙

1. MUST export default a function called reducer
**반드시** 리듀서 함수를 default export 해야 한다.
2. MUST export its action creators as functions
**반드시** 액션 생성 함수를 export 해야 한다.
3. MUST have action type in form npm-module-or-app/reducer/ACTION_TYPE
**반드시** 접두사를 붙인 형태로 액션 타입을 정의해야 한다.
4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer nedds to listen for them, or if it is a published reuable library
(핀수는 아닌데) 외부 리듀서가 모듈 내 액션 타입을 바라보고 있거나, 모듈이 재사용 가능한 라이브러리로 쓰이는 것이라면 액션 타입을 UPPER_SNAKE_CASE 형태로 이름 짓고 export 하면 된다.