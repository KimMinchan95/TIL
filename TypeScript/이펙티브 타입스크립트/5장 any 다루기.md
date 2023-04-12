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
