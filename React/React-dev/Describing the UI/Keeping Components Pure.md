# Keeping Components Pure

- 순수한 함수는 계산만 수행하고 그 이상은 수행하지 않는다.
- 구성 요소를 순수 함수로만 엄격하게 작성하면 코드베이스가 증가함에 따라 전체 클래스의 혼란스러운 버그와 예측할 수 없는 동작을 방지할 수 있다.

## Purity: Components as formulas (청결: 공식으로서의 성분)

- 컴퓨터 과학(특히 함수형 프로그래밍에서), 순수 함수는 다음과 같은 특성을 가진 함수이다.
  - **자신의 일에만 신경쓴다**: 호출되기 전에 존재하는 객체나 변수를 변경시키지 않는다.
  - **같은 인풋, 같은 아웃풋**: 같은 인풋이 들어오면, 순수함수는 항상 같은 결과를 반환한다.

<br />
- React는 이러한 개념을 중심으로 설계되었다.
- React에서 작성하는 모든 컴포넌트는 순수 함수라고 가정한다.
- 즉, 작성하는 React 컴포넌트는 항상 동일한 입력이 주어지면 동일한 JSX를 반환해야 한다.

## Side Effects: (un)intended consequences (사이드 이펙트: 의도한(하지않은) 결과)

- React의 렌더링 프로세스는 항상 순수해야 한다.
- 컴포넌트는 JSX만 반환해야 하며 렌더링 전에 존재했던 객체나 변수를 변경해서는 안된다.

  - 그러지 않으면 사이드 이펙트를 만들 수 있다.

- 일반적으로 컴포넌트가 특정 순서로 렌더링될 것이라고 예상해서는 안된다.
- 각 컴포넌트는 "자체적으로 생각"해야 하며 렌더링 중에 다른 컴포넌트를 조정하거나 의존하지 않아야 한다.
- 각 컴포넌트는 스스로 JSX를 계산해야 한다.

## Where you can cause side effects (당신이 사이드 이펙트를 일으킬 수 있는 곳)

- 함수형 프로그래밍은 순수성에 의존하지만 어느 순간, 바뀌어야할 때가 있다.
- 화면 업데이트, 애니메이션 시작, 데이터 변경과 같은 변경을 사이드 이펙트라고 한다.
- 렌더링 시가 아닌 "측면"에서 발생하는 작업이다.

<br />

- 컴포넌트에서 `useEffect` 호출을 사용하면 반환된 JSX에 연결할 수 있다.
- 이 명령은 사이드 이펙트가 허용될 때 렌더링 후 나중에 실행하도록 React에 지시한다.
- 하지만 이러한 접근 방식은 마지막 수단이 되어야 한다.

<br />

- 가능하면 렌더링만으로 로직을 표현해야 한다.
