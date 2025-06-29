## Props Drilling이란?

> `Props Drilling`은 데이터를 오직 하위 컴포넌트에게 전달하기 위해 중첩된 여러 하위 구성 요소를 통해 전달하는 과정이다.
> 
- `Props Drilling`으로 인해 데이터가 전달되는 대부분의 구성 요소에 <span style='color: red'>특정 데이터가 실제로 필요하지 않음에도 불구하고, 데이터를 대상 구성 요소로 전송하기 위한 매개체</span>로만 사용된다.

### Drilling

- 여기에서 `Drilling`이란 용어가 사용되는 이유는, <span style='color: red'>구성 요소에 관련되지 않은 데이터</span>가 강제로 가져와 다음 구성 요소에 전달하는 과정을 필요한 대상에게 도달할 때까지 전달하기 때문이다.
- 이로 인해 구성요소의 <span style='color: red'>재사용성 및 앱 성능에 문제</span>가 일어날 수 있다.
- 추가적으로 해당 `props`를 추적하기 힘들어져서, <span style='color: red'>유지보수에 영향</span>을 끼친다.

## 해결법

- 이는 `recoil`, `redux` 같은 라이브러리를 사용하거나 간단하게 `Context Api`를 사용해서 해결할 수 있다.
- 단순히 `Props Drilling`을 해결하고 싶은 것이라면 `Context Api`가 해답일 것이다.
- 그 이유는 `Props Drilling`을 만을 해결하기 위해 `Reudx`같은 라이브러리를 사용해서 [boilerplate code](https://charlezz.medium.com/%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%9E%80-boilerplate-code-83009a8d3297)를 작성하는 것은 낭비이기 때문이다.