> <이펙티브 타입스크립트>(댄 밴더캄 지음, 장원호 옮김, 인사이트, 2021)

- `any` 타입은 마이그레이션(자바스크립트 코드를 타입스크립트로 전환)할 때 코드의 일부분에 타입 체크를 비활성화시켜 주는 중요한 역할을 한다.

#### 아이템 38 - any 타입은 가능한 한 좁은 범위에서만 사용하기

- `any` 타입을 가능한 좁은 범위에서 사용하라

```ts
function f1() {
  const x: any = expressionReturningFoo(); // ❌
  processBar(x);
  return x; // x의 타입이 any가 된다.
}

function f2() {
  const x = expressionReturningFoo(); // ⭕
  processBar(x as any);
  return x;
}
```

- `f2` 함수는 `any`타입이 `processBar`함수의 매개변수에서만 사용됨으로 다른 코드에 영향을 미치지 않는다.

<br />

- `@ts-ignore`로 다음 줄의 TS체크를 무시하는 방법도 있다.

```ts
function f1() {
  const x = expressionReturningFoo();
  // @ts-ignore
  processBar(x);
  return x;
}
```

- 근본적인 원인을 해결한 것이 아니기 때문에 다른 곳에서 더 큰 문제가 발생할 수도 있다.

<br />

- 객체 안에 한 속성이 타입 오류를 가질 때는 객체 전체를 `any`로 단언하지 말고(다른 속성들도 타입 체크가 되지 않는다.) 최소한의 범위만 `any`를 사용하는 것이 좋다.

```ts
const config: Congfig = {
  a: 1,
  b: 2,
  c: {
    key: value,
  },
} as any; // ❌

const config: Config = {
  a: 1,
  b: 2,
  c: {
    key: value as any, // ⭕
  },
};
```

#### 아이템 39 - any를 구체적으로 변형해서 사용하기

- `any` 타입에는 모든 숫자, 문자열, 배열, 객체, 정규식, 함수 클래스, DOM 엘리먼트, `null` 이나 `undefined` 까지 아우르는 매우 큰 값이다.
  - `any` 보다 더 구체적으로 표현할 수 있는 타입을 찾아 타입 안전성을 높이도록 해야한다.

```ts
function getLengthBad(array: any) {
  // ❌
  return array.legnth;
}

function getLength(array: any[]) {
  return array.legnth; // ⭕
}
```

- 위의 예제에서 `any[]`가 `any`보다 좋은 점

  - 함수 내의 `array.length`타입이 체크된다.
  - 함수의 반환 타입이 `any` 대신 `number`로 추론된다.
  - 함수가 호출될 때 매개변수가 배열인지 체크한다.

- 객체이긴 하지만 값을 알 수 없다면 `{[key: string]: any}`나 `object` 타입으로 선언해라.

  - `object`타입은 객체의 키를 열거할 수는 있지만 속성에 접근할 수 없다.

- 함수를 구체화 할 수 있는 방법 3가지

```ts
type Fn0 = () => any; // 매개변수 없이 호출 가능한 모든 함수
type Fn1 = (arg: any) => any; // 매개변수 1개
type FnN = (...args: any[]) => any; // 모든 개수의 매개변수 'Function' 타입과 동일
```

#### 아이템 40 - 함수 안으로 타입 단언문 감추기

- 함수는 보통 외부로 드러난 타입 정의는 간단하지만 내부 로직이 복잡해서 안전한 타입으로 구현하기 어려운 경우가 많다.
- 모든부분을 안전한 타입으로 구성하기 힘든 경우 내부에서는 타입 단언을 사용하고 외부로 드러나는 타입은 정의를 정확히 명시하는 정도로 끝내는 게 좋다.
