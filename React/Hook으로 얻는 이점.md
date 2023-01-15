# Hook으로 얻는 이점

[React Hooks이란 ? React Hooks으로 인해 얻는 이점들 - John Ahn](https://youtu.be/C26vJqelKlA) 정리글

### React Hook이란?
- React 16.8 버전에 추가된 기존 Class를 바탕으로 코드를 작성할 필요없이 state(상태)를 관리하고 여러 React 기능을 사용할 수 있는 새로운 기능이다.

### React Hooks가 필요한 이유
- Hook은 Class Component로 사용되어온 React에서 느껴왔던 불편함과 문제점을 해결하기 위해 개발되었다.

- 간단한 비교

|비교|Class Component|Functional Component|
|--|--|--|
|기능|더 많은 기능 제공|더 적은 기능 제공|
|코드 양|긴 코드 양|짧은 코드 양|
|코드|복잡한 코드|심플한 코드|
|성능|더딘 성능|더빠른 성능|

- 코드를 작성할때도 함수형 컴포넌트가 더 짧지만 Babel로 변환했을 때 차이가 더 많이난다.
    - 이로 인해 성능상으로 차이가 날 수 있다.

<br/>

- 함수형 컴포넌트에서 어떤 기능을 사용하지 못했는가?
    - Hook이 없었을때는 State도 사용하지 못했었다.
    - 리액트 생명주기를 `componentDidMount`, `componenetDidUpdate`, `componentWillUnmount` 로 관리하지 못한다.
        - useEffect로 생명주기를 관리할 수 있게 변화되었다.
        - 복잡한 기능들이 통합되면서 코드 양도 줄어들었다.

<br/>

> *사전 정보
HOC(Higher Order Component): 화면에서 재사용 가능한 로직만 분리해서 component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들을 parameter로 받아서 처리하는 방법 (컴포넌트를 가져와 새 컴포넌트를 반환)

- HOC를 Custom Hooks로 대체
    - HOC 컴포넌트를 Custom Hooks로 대체해서 Wrapper 컴포넌트를 줄일 수 있게 되었다.
    - HOC 컴포넌트가 많아지면서 Wrapper 컴포넌트가 생기면 데이터 흐름을 파악하기 힘들어진다.
    