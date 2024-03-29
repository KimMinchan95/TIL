# Describing th UI
- React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리이다.
- React를 통해 작은 요소들을 재사용 가능하고 중첩할 수 있는 컴포넌트로 조합할 수 있다.
- React 애플리케이션은 컴포넌트라고 불리는 독립된 UI 조각들로 이루어진다.

## 컴포넌트 Import 및 Export 하기
- 하나의 파일에 많은 컴포넌트를 선언할 수 있지만, 파일이 커지면 탐색하기 어려워 진다.
이를 해결하기 위해 컴포넌트를 별도의 파일로 만들어 `export`하고 다른 파일에서 해당 컴포넌트를 `import`할 수 있다.

## JSX로 마크업 작성하기
- React 컴포넌트는 React가 브라우저에 렌더링하는 마크업을 포함할 수 있는 JavaScript 함수이다.
- React 컴포넌트는 그 마크업을 표현하기 위해 JSX라는 확장된 문법을 사용한다.
- JSX는 HTML과 매우 유사하지만 조금 더 엄격하며 동적인 정보를 표시할 수 있다.
    - 기존의 HTML 마크업을 React 컴포넌트에 그대로 붙여넣으면 동작하지 않을 수도 있다.

#### HTML과 JSX 차이
- Fragment : JSX를 사용할 때, `return`문 안에는 반드시 하나의 최상위 태그가 있어야 한다. Fragment를 사용하면 DOM에 추가하지 않기 때문에 `div`로 감쌀때 발생하는 CSS 문제등을 해결할 수 있다.
- JS 동적 값 할당 : `{}`를 사용해서 JSX내에서 변수, 함수 호출, 조건문을 사용할 수 있다.
- 각 요소를 닫는 태그를 반드시 가져야 한다.
- 속성 이름 : JSX는 HTML과 달리 속성 이름을 camelCase로 작성해야 한다. `class` vs `className`

## 컴포넌트에 Props 전달하기
- 모든 부모 컴포넌트는 자식 컴포넌트에 `props`를 제공하여 정보를 전달할 수 있다.
- `props`는 HTML 어트리뷰트와 유사해 보이지만 객체, 배열, 함수를 포함한 모든 JavaScript 값이 전달 될 수 있다. JSX도 전달 가능하다.

## 조건부 렌더링
- `if`문 `&&` 및 삼항연산자 같은 JS 문법을 사용해서 JSX를 조건부로 렌더링할 수 있다.

## 리스트 렌더링
- 데이터 모음으로부터 유사한 컴포넌트를 여러 개 표시 하고 싶을때, `filter`, `map` 메서드를 함께 사용하면 데이터 배열을 필터링 하고 컴포넌트 배열로 변환할 수 있다.
- 각 배열 항목마다 `key`를 지정해야 한다.
    - 일반적으로 DB에서 가져온 ID를 `key`로 사용한다.

## 컴포넌트 순수하게 유지하기
- JS에서 순수 함수의 조건
    - 자신의 일만 처리한다 : 호출되기 전에 존재했던 어떤 객체나 변수도 변경하지 않는다.
    - 입력이 같으면 출력도 같다 : 순수 함수는 같은 입력을 받으면 언제나 같은 결과를 반환한다.
- 컴포넌트를 엄격하게 순수 함수로만 작성하면 코드 베이스가 커져도 이해하기 어려운 버그와 예측할 수 없는 동작을 피할 수 있다.