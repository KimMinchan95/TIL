# Reusing Logic with Custom Hooks

## Hook names always start with `use`

1. **React 컴포넌트 이름은 대문자로 시작해야 한다.** React 컴포넌트는 JSX와 같이 React가 표시하도록 알고 있는 방법을 반환해야 한다.
2. **훅의 이름은 `use`로 시작해야한다.** 그 다음의 첫글자는 대문자여야 한다.

## When to use custom Hooks

- 중복되는 모든 코드에 대해 커스텀 훅을 추출할 필요는 없다.
- Effect를 작성할 때마다 커스텀 훅으로 감싸는 것이 더 명확할지 고려하라.
- Effect를 커스텀 훅으로 감싸면 의도와 데이터 흐름 방식을 정확하게 전달할 수 있다.

#### Deep Dive

- **Keep your custom Hooks focused on concrete high-level use cases**

- 명확한 이름을 고르는데 어려움을 겪는다면 Effect가 컴포넌트의 나머지 로직과 너무 결합되어 있어 아직 추출할 준비가 되지 않았다는 의미일 수 있다.
- 커스텀 훅의 이름은 코드를 자주 작성하지 않는 사람이라도 커스텀 훅이 무엇을 하고, 무엇을 취하고, 무엇을 반환하는지 짐작할 수 있을 정도로 명확해야 한다.
- 외부 시스템과 동기화할 때 커스텀 훅의 이름은 좀 더 기술적이고 해당 시스템과 관련된 전문 용어를 사용할 수 있다.
  - 해당 시스템에 익숙한 사람이 이해할 수 있는 이름이라면 괜찮다.

<br />

- 좋은 커스텀 훅은 호출 코드가 수행하는 작업을 제한하여 보다 선언적으로 만든다.
- 커스텀 훅 API가 사용 사례를 제한하지 않고 매우 추상적일 경우, 장기적으로는 해결하는 것보다 더 많은 문제를 야기할 수 있따.