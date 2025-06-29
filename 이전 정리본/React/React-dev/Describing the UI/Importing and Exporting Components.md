# Importing and Exporting Components

- 컴포넌트의 가장 큰 장점은 재사용성이다.
    - 컴포넌트를 조합해 다른 컴포넌트를 만들 수 있다.
- 컴포넌트를 여러 번 중첩하게 되면 다른 파일로 분리해야 하는 시점이 생긴다.
    - 이렇게 분리하면 나중에 파일을 찾기 더 쉽고 재사용성이 높아진다.

## Root 컴포넌트란
- 컴포넌트들은 모두 `App.js`라는 **root 컴포넌트 파일**에 존재한다.
- `Create React App`에서는 앱 전체가 `src/App.js`에서 실행된다.
- 설정에 따라 root 컴포넌트가 다른 파일에 위치할 수도 있다.
    - Next.js 처럼 파일 기반으로 라우팅하는 프레임워크일 경우 페이지별로 root 컴포넌트가 다를 수 있다.

## 컴포넌트를 import 하거나 export 하는 방법

**컴포넌트를 다른 파일로 이동하려면 세 단계가 있다**
1. 컴포넌트를 추가할 JS 파일을 **생성**한다.
2. 새로 만든 파일에서 함수 컴포넌트를 **export**한다. (보통 `default`로 `export`한다.)
3. 컴포넌트를 사용할 파일에서 **import**한다.

## 한 파일에서 여러 컴포넌트를 import 하거나 export 하는 방법
- 하나의 파일에서 `export default`가 존재한다면, 새로운 파일 하나를 더 생성해서 `export default`를 사용하거나, **named export**로 여러 컴포넌트 들을 `export`할 수 있다.
    - 한 파일에서는 단 하나의 default export만 사용할 수 있지만, name export는 여러 번 사용할 수 있다.
    