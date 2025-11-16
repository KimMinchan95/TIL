# React.js 렌더링 방식 살펴보기

## 브라우저는 어떻게 동작할까?

- Critical Rendering Path
  - 1단계) HTML과 CSS를 DOM과 CSSOM으로 변환
    - DOM(Document Object Modal) - HTML을 브라우저가 해석하기 편한 방식으로 변환한 객체 트리
  - 2단계) Render Tree 생성
    - 웹페이지의 “청사진”이라고 볼 수 있음
      - 요소의 배치와 모양 스타일을 담고 있음
  - 3단계) Layout
    - Render Tree를 기반으로 실제 웹 페이지에 요소들의 배치를 결정하는 작업
  - 4단계) Painting
    - 실제로 요소들을 화면에 그려내는 과정
- 업데이트는 어떻게 이루어질까?
  - 업데이트 - 이벤트에 따라 실시간으로 변화하는 것
  - JS가 DOM을 수정하면 업데이트가 발생함
    - DOM이 수정되면 Critical Rendering Path가 다시 실행됨
  - Layout, Painting은 매우 비싼 과정이므로 조심해야한다
    - Layout을 다시하면 Reflow
    - Painting을 다시하면 Repaint
  - JS로 직접 DOM을 조작해서 업데이트 해야 할때는 동시에 발생하는 업데이트를 한번에 모아서 시킴으로써 Reflow와 Repaint를 최소화해야 한다.
    - 최적화가 프로그램이 커질 수록 힘들어진다. → React.js에서는 이를 자동화 해준다.(추상화되어 있다.)

## React의 렌더링 프로세스

- React는 2단계를 거쳐 화면 UI를 렌더링 한다.
  - Render Phase - 컴포넌트를 계산하고 업데이트 사항을 파악하는 단계
    - 1단계) 컴포넌트를 호출해 결과값을 계산 - React Element를 반환
    - 2단계) React Element를 모아 Virtual DOM 생성 - 값으로 표현한 UI (Value UI)
  - Commit Phase - 변경사항을 실제 DOM에 반영하는 단계 (Virtual DOM을 Actual DOM에 반영)
    - Critical Rendering Path를 진행
- 리액트 렌더링 과정이 복잡한 이유
  - DOM 수정을 최소화 하기 위해서
    - 대부분의 상황에 충분히 빠른 업데이트를 보장하기 위해서
- 업데이트 발생 시 - 재 조정(Reconciliation)
  - Render Phase를 처음부터 다시 실행 → 새로운 Virtual DOM 생성
  - 이전 렌더링에 만들어진 Virtual DOM과 비교하는 Diffing 과정을 갖음
  - Actual DOM에 한번에 반영함으로써 대부분의 상황에서 빠른 업데이트를 제공함
