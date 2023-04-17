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

#### 아이템 41 - any의 진화 이해하기

- 타입스크립트에서 일반적으로 변수의 타입은 변수를 선언할 때 결정된다.
  - `any` 타입과 관련해서는 예외의 경우가 존재한다.
- `any` 타입의 진화는 `noImplicitAny`가 설정된 상태에서 변수의 타입이 암시적 `any`인 경우에만 일어난다.
- 명시적으로 `any`를 선언하면 `any` 타입이 그대로 유지된다.
- 타입을 안전하게 지키기 위해서는 암시적 `any`를 진화시키는 방식보다 명시적 타입 구문을 사용하는 것이 좋다.

```ts
function range(start: nubmer, limit: number) {
  const out = []; // type이 any[]
  for (let i = start; i < limit; i++) {
    out.push(i); // out의 type이 any[]
  }
  return out; // type이 number[]
}
```

- `out`의 타입이 `any[]`로 선언되었지만 `number` 타입의 값이 들어가면서 `number[]`로 진화한다.

```ts
const result = []; // type이 any[]
result.push('a');
result; // type이 string[]
result.push(1);
result; // type이 (string | number)[]
```

<br/>

- 조건문에서 분기에 따라 타입이 변할 수도 있다.

```ts
let val; // type이 any
if (Math.random() < 0.5) {
  val = /hello/;
  val; // type이 RegExp
} else {
  val = 12;
  val; // type이 number
}
val; // 타입이 number | RegExp
```

<br/>

- 변수의 초깃값이 `null`인 경우도 `any`의 진화가 일어난다.
  - 보통 try/catch 블록 안에서 변수를 할당하는 경우에 나타난다.

#### 아이템 42 - 모르는 타입의 값에는 `any` 대신 `unknown`을 사용하기

- 반환 타입을 any로 만드는 것 보다 타입을 원하는 곳에서 할당하는 것이 이상적이다.

```ts
function parseYAML(yaml: string): any {
  //...
}

interface Book {
  name: string;
  author: string;
}
const book: Book = parseYAML(`
  name: Wuthering Heights
  author: Emily Bronte
`);
```

- 함수의 반환값에 타입 선언을 강제할 수 없기 때문에, 호출한 곳에서 타입을 선언하게 되면 암시적 `any` 타입이되고, 암시적 `any` 타입이 되면, 사용하는 곳마다 타입 오류가 발생하게 된다.

<br />

- `parseYAML`이 `unknown` 타입을 반환하게 만드는 것이 더 안전하다.

```ts
function safeParseYAML(yaml: string): unknown {
  return parseYAML(yaml);
}
const book = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author: Anne Bronte
`);
alert(book.title);
// ~~~ 개체가 'unknwon' 형식입니다.
book('read');
// ~~~~~~ 개체가 'unknown' 형식입니다.
```

- `any` 타입의 특징
  - 어떤 타입이든 `any` 타입에 할당 가능 하다.
  - `any` 타입은 어떠한 타입으로도 할당 가능 하다.
- `unknown` 타입의 특징
  - 어떤 타입이든 `unknown`에 할당 가능 하다.
  - `unknown`은 오직 `unknown`과 `any`에만 할당 가능 하다.
- `never` 타입의 특징
  - 어떤 타입도 `never`에 할당할 수 없다.
  - 어떠한 타입으로도 할당 가능 하다.

<br />

- `object` 또는 `{}`를 사용하는 방식은 `unknown` 보다는 범위가 약간 좁다.
  - `{}` 타입은 `null`과 `undefined`를 제외한 모든 값을 포함한다.
  - `object` 타입은 `non-primitive` 타입으로 이루어져있고, 객체와 배열이 포함된다.(boolean, number, string 이 제외된다.)

#### 아이템 42 - 몽키 패치보다는 안전한 타입을 사용하기

> 몽키패치는 원래 소스코드를 변경하지 않고 실행 시 코드 기본 동작을 추가, 변경 또는 억제하는 기술이다. 쉽게 말해 어떤 기능을 위해 이미 있던 코드에 삽입하는 것이다. - [자바스크립트에서 몽키패치](https://donggov.tistory.com/211)

- JS는 객체와 클래스에 임의의 속성을 추가할 수 있을 만큼 유연하다.
- DOM 엘리먼트에 데이터를 추가하기 위해서도 사용된다.

```js
window.monkey = 'Tamarin';

const el = documnet.getElementById('colobus');
el.home = 'tree';
```

- 내장 기능의 프로토타입에도 속성을 추가할 수 있지만, 이상한 결과를 보일 때가 있다.

```js
RegExp.prototype.monkey = 'Capuchin'
/123/.monkey // "capuchin"
```

- 객체에 임의의 속성을 추가하는 것은 일반적으로 좋은 설계가 아니다.
  - window 또는 DOM 노드에 데이터를 추가하면 전역 변수가 된다.
  - 전역 변수를 사용하면 의존성을 만들고 함수를 호출할 때마다 side effect를 고려해야한다.

<br />

- 타입스크립트에서는 특히, 타입 체커 `Document`와 `HTMLElement`의 임의로 추가한 속성에 대해서 알지 못한다.
- `any`단언문을 사용해서 해결할 수 있지만, 타입 안전성을 상실하고, 언어 서비스를 사용할 수 없게 된다.

```ts
(document as any).monkey = 'Tamarin'; // 정상, 오타
(document as any).monkey = /Tamarin/; // 정상, 잘못된 기입
```

**해결책**

1. `document` 또는 DOM으로부터 데이터를 분리한다.
2. `interface`의 특수 기능 중 하나인 보강(augmentation)을 사용한다.

```ts
interface Document {
  /** 몽키 패치의 속(genus) 또는 종(species) */
  monkey: string;
}

document.monkey = 'Tamarin'; // 정상상
```

- 모듈의 관점에서, 제대로 동작하게 하려면 `global` 선언을 추가해야 한다.

```ts
export {};
declare global {
  interface Document {
    /** 몽키 패치의 속(genus) 또는 종(species) */
    monkey: string;
  }
}

document.monkey = 'Tamarin'; // 정상
```

3. 더 구체적인 타입 단언문을 사용한다.

```ts
interface MonkeyDocument extends Document {
  /** 몽키 패치의 속(genus) 또는 종(species) */
  monkey: string;
}
(document as MonkeyDocument).monkey = 'Macaque';
```

**몽키 패치를 남용해서는 안 되며 궁극적으로 더 잘 설계된 구조로 리팩터링하는 것이 좋다.**
