> <이펙티브 타입스크립트>(댄 밴더캄 지음, 장원호 옮김, 인사이트, 2021)

#### 아이템 45 - devDependencies에 typescript와 @types 추가하기

- npm(node package manager)은 자바스크립트 라이브러리 저장소(`npm` 레지스트리)와, 프로젝트가 의존하고 있는 라이브러리들의 버전을 지정하는 방법(`package.json`)을 제공한다.

**npm은 세 가지 종류의 의존성을 구분해서 관리한다.** (각가의 의존성은 `package.json` 파일 내의 별도 영역에 들어 있다.)

- dependencies
  - 현재 프로젝트를 **실행하는 데** 필수적인 라이브러리들이 포함된다.
  - 런타임에 필요한 라이브러리들이 포함되는 것이다.
  - 다른 사용자가 해당 프로젝트를 설치할 때 `dependencies`에 들어 있는 라이브러리도 함께 설치된다. - 전이(transitive) 의존성
- devDependencies
  - 프로젝트를 개발하고 테스트하는데 사용되지만, 런타임에는 필요 없는 라이브러리들이 포함된다.
  - 다른 사용자가 해당 프로젝트를 설치할때 `devDependencies`에 포함된 라이브러리들은 제외된다.
  - 타입스크립트는 개발 도구 일 뿐 타입 정보는 런타임에 존재하지 않기 때문에 `devDependencies`에 속한다.
    - 런타임에 `@types`가 필요한 경우라면 별도의 작업이 필요할 수 있다.
- peerDependencies
  - 런타임에 필요하긴 하지만, 의존성을 직접 관리하지 않는 라이브러리들이다.
  - 제이쿼리 플러그인은 다양한 버전이 호환됨으로 직접 버전을 선택하지 않기때문에 여기에 들어간다.

#### 아이템 46 - 타입 선언과 관련된 세 가지 버전 이해하기

- 타입스크립트는 의존성 문제를 복잡하게 만든다.
- 그 이유는 타입스크립트를 사용하면 세 가지 사항을 추가로 고려해야 하기 때문이다.
  - 라이브러리의 버전
  - 타입 선언(@types)의 버전
  - 타입스크립트의 버전

<br />

**타입스크립트의 버전 문제와 해결 방법**

**문제 1 - 라이브러리를 업데이트 했지만 실수로 타입 선언은 업데이트 하지 않았을 때**

- 하위 호환성이 깨지는 변경이 있으면, 런타임 오류가 발생할 수도 있다.

해결방법

- 타입 선언도 업데이트하여 라이브러리와 버전을 맞춘다.
- 타입 선언 버전이 준비되지 않았을 경우
  - 보강(augmentation) 기법을 활용하여 프로젝트 자체에 추가
  - 타입 선언의 업데이트를 직접 작성하고 커뮤니티에 기여

**문제 2 - 라이브러리보다 타입 선언의 버전이 최신인 경우**

- 라이브러리와 타입 선언의 버전이 맞도록 라이브러리 버전을 올린다.
- 타입 선언의 버전을 내린다.

**문제 3 - 타입스크립트 버전보다 라이브러리에서 필요로 하는 타입스크립트 버전이 최신인 경우**

- 프로젝트의 타입스크립트 버전을 올린다.
- 라이브러리 타입 선언의 버전을 원래대로 내린다.
- `declare module` 선언으로 라이브러리의 타입 정보를 없앤다.
- 매우 드문 경우로 `typesVersions`를 이용해 버전별로 타입 선언을 제공할 경우 사용한다.

**문제 4 - `@types` 의존성이 중복이 된 경우**

- `npm ls @types/foo` 같은 명령어를 통해 타입 선언 중복을 추적해서, 서로 버전이 호환되게 한다.

#### 아이템 47 - 공개 API에 등장하는 모든 타입 익스포트하기

- 라이브러리 제작자는 프로젝트 초기에 타입 익스포트를 작성해야 한다.
  - 타입들이 익스포트된 함수 시그니처에만 등장할 경우 `Parameters`와 `ReturnType` 제네릭 타입을 사용해서 추출하는 방법을 사용해야 한다.

#### 아이템 48 - API 주석에 TSDoc 사용하기

- 사용자를 위한 문서에는 JSDoc 스타일의 주석으로 만드는 것이 좋다.
  - 편집기에서 함수가 호출되는 곳에서 JSDoc 스타일의 주석을 툴팁으로 표시해 주기 때문이다.
  - 인라인 주석은 편집기가 표시해 주지 않는다.

```ts
/** 인사말을 생성합니다. 결과는 보기 좋게 꾸며집니다. */
function greetJSDoc(name: string, title: string) {
  return `Hello ${title} ${name}`;
}
```

<br />

- JSDoc(TSDoc)에는 `@param`과 `@returns` 같은 일반적 규칙을 사용할 수 있다.
  - 함수를 호출하는 부분에서 각 매개변수와 관련된 설명을 보여 준다.
- 타입 정의에 JSDoc을 사용할 수도 있다.
- 마크다운(markdown) 형식으로 꾸밀 수도 있다. (굵은 글씨, 기울임, 글머리기호 목록 등)
- 주석을 수필처럼 장황하게 쓰지 않아야 한다.
- 타입스크립트에서는 타입 정보가 코드에 있기 떄문에 TSDoc에서는 타입 정보를 명시하면 안된다.

#### 아이템 49 - 콜백에서 this에 대한 타입 제공하기

- `this` 바인딩이 동작하는 원리를 이해해야 한다.
- 콜백 함수에서 `this`를 사용해야 한다면, 타입 정보를 명시해야 한다.

#### 아이템 50 - 오버로딩 타입보다는 조건부 타입 사용하기

- 아래처럼 유니온 타입으로 선언하면 선언이 틀리지 않지만, `number` 타입을 매개변수로 넣을때 `string` 타입을 반환하는 경우까지 포함하고 있어서 모호하다.

```ts
function double(x: number | string): number | string;
function double(x: any) {
  return x + x;
}
```

<br />

- 제네릭을 사용하면 반환타입이 잘못될 수 있다.

```ts
function dobule<T extends number | string>(x: T): T;
function dobule(x: any) {
  return x + x;
}

const num = double(12); // 타입이 12
const str = dobule(x); // 타입이 'x'
```

<br />

- 여러가지 타입선언으로 분리할 수 있지만 유니온 타입 관련해서 문제가 생길 수 있다.
  - 타입스크립트는 오버로딩 타입의 일치하는 타입을 찾을때 까지 순차적으로 검색하다가 마지막 선언까지 검색했을때 할당될 수 없기 때문에 오류가 발생한다.

```ts
function f(x: number | string) {
  return dobule(x); // 에러 ~ 'string | number' 형식의 인수는 'string' 형식의 매개변수에 할당될 수 없습니다.
}
```

<br />

- 조건부 타입을 이용해서 해결할 수 있다.

```ts
function double<T extends number | string>(
  x: T
): T extends string ? string : number;
function dobule(x: any) {
  return x + x;
}
```

#### 아이템 51 - 의존성 분리를 위해 미러 타입 사용하기

- 작성중인 라이브러리가 의존하는 라이브러리와 무관하게 타입에만 의존하면, 필요한 선언부만 추출해서 작성중에 라이브러리에 넣어라 (미러링)

<br />

**예시) CSV 파일을 파싱하는 라이브러리**

```ts
function parseCSV(contents: string | Buffer): { [column: string]: string }[] {
  if (typeof contents === 'object') {
    // 버퍼인 경우
    return parseCSV(contents.toString('utf8'));
  }
  // ...
}
```

- NodeJS 사용자를 위해 Buffer 타입을 허용했을때 Buffer의 타입정의는 NodeJS 타입 선언을 설치해서 얻을 수 있다.
  - 하지만 `@types`와 무관한 JS 개발자와 `NodeJS`와 무관한 타입스크립트 웹 개발자들은 사용하지 않는 모듈을 불필요하게 설치해야 한다.
  - 이런 경우에 필요한 메서드와 속성만 별도로 가져와서 정의하는 것이 좋다.

```ts
interface CsvBuffer {
  toString(encoding: string): string;
}
```

#### 아이템 52 - 테스팅 타입의 함정에 주의하기

- 테스트 코드를 작성할 때 `dtslint` 또는 타입 시스템 외부에서 타입을 검사하는 도구를 사용하는 것이 안전하다.

<br />

- 'square' 라는 함수의 런타임 동작을 테스트할 때 다음 같은 테스트 코드를 작성할 수 있다.
  - 하지만 이 테스트 코드는 반환값을 체크하지 않는다.

```ts
test('square a numbr', () => {
  square(1);
  square(2);
});
```

<br />

- 반환값을 특정 타입의 변수에 할당해서 반환 타입을 체크할 수 있다.

```ts
// JS에 배열 메서드 map이 아닌 직접 구현한 map 함수
const lengths: number[] = map(['john', 'paul'], (name) => name.length);
```

**반환값 할당의 문제 두 가지**

1. 이 방법은 불필요한 변수를 만들어서 "미사용 변수 경고" 린팅 규칙을 비활성화해야 한다.

- 해결 방법은 핼퍼 함수를 정의하는 것이다.

```ts
function assertType<T>(x: T) {}

assetType<number[]>(map(['john', 'paul'], (name) => name.length));
```

<br />

2. 두 타입이 동일한지 체크하는 것이 아니라 할당 가능성 체크만 한다.

- 객체 타입을 체크하는 경우에 문제가 발생한다.

```ts
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<{ name: string }[]>(
  map(beatles, (name) => ({
    name,
    inYellowSubmarine: name === 'ringo',
  }))
); // OK
```

- `isYellowSubmarine` 속성에 대한 체크가 되지 않았다.

<br />

- 매개 변수가 더 적은 함수를 할당할 때도 테스팅에 문제가 일어날 수 있다.

```ts
const double = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(dobule);
```

- 제대로 된 assertType 사용방법은 `Parameters`와 `ReturnType` 제네릭 타입을 이용해 매개변수 타입과 반환 타입만 분리해서 테스트 하는 것이다.
  - null! - 초기값은 null을 주만 null이 아니라고 가정(?) - not null assertion (JAVA로 치면 Lazy Initialization)

```ts
const double = (x: number) => 2 * x;
let p: Parameters<typeof double> = null!; // Type이 [x: number]
assertType<[number, number]>(p);
//                           ~ Argument of type '[number]' is not
//                             assignable to parameter of type [number, number]
let r: ReturnType<typeof double> = null!; // Type이 number
assertType<number>(r); // OK
```
