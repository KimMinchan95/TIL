# Frontend Fundamentals - 번들링

## 번들링이란

- 번들링(Bundling)은 여러 개의 파일(JavaScript, CSS, 이미지, 등…)을 하나 또는 몇 개의 파일로 묶는 작업
- 기능 단위로 파일을 나누면 개발하기 편하지만 브라우저가 서버로부터 파일의 수만큼 요청을 보내게 되어 네트워크 비용이 커지고 로딩 속도가 느려질 수 있다.

## 번들링의 목적

1. **요청 수 감소** : 여러개의 파일을 하나로 묶어서 브라우저가 요청해야 할 파일을 줄여 로딩 속도 향상
2. **캐싱 최적화** : 묶은 파일 하나만 캐시하면 되어 효율적이다.
3. **유지보수성과 배포 효율성** : 개발할 때 모듈화를 유지하면서, 배포할 때는 성능을 최적화 할 수 있다.

## 번들링 과정

1. 여러개의 JavaScript 파일
    1. 개발할 때는 기능별로 파일을 잘게 나눠서 관리
2. 파일들이 서로 의존하고 있다.
    1. `index.js`가 `auth.js`와 `dsahboard.js`를 불러오고, `auth.js`는  `utils.js`를 사용하고 있는 등, 파일 간에 의존성(dependency) 관계가 생긴다.
3. 번들러가 파일 관계를 분석한다.
    1. 번들러는 프로젝트 안의 파일들을 스캔하면서 누가 누구를 쓰는지 분석한다. 시작 지점 부터 출발해서 모든 필요한 파일을 찾고, 의존성 그래프를 그린다.
4. 하나의 파일로 묶는다. (Bundling)
    1. 필요한 파일들을 의존성 순서에 맞춰서 하나의 파일로 합친다.
5. 번들러가 추가 최적화 작업
    1. 사용되지 않는 코드 제거 (트리 셰이킹)
    2. 필요한 경우, 여러 개의 작은 번들로 나눈다. (코드 스플리팅)
    3. 코드의 공백, 주석을 없애서 크기를 줄인다. (Minification)
6. 최종 결과물을 배포한다.
    1. 최적화된 `bundle.js` 파일을 서버에 올리고, 사용자는 브라우저로 빠르게 접근할 수 있다.

## 번들러란

- 번들러는 여러 파일을 하나로 묶는 번들링을 수행할 뿐만 아니라, 코드를 브라우저가 이해하기 쉽게 변환하고 최적화해서 웹사이트가 더 빨리 로딩되도록 도와주는 도구이다.

### 번들러가 하는 일

1. 파일 묶기 (Bundling)
    1. 여러 개의 파일을 하나(또는 몇 개)로 묶어 네트워크 요청 수를 줄여 페이지 로딩 속도를 빠르게 만들어 준다.
    2. 모듈 시스템(ES Modules, CommonJS 등)을 자유롭게 사용 가능하다.
2. 코드 변환 (Transpiling)
    1. TyepScript, JSX 등의 코드를 브라우저가 이해할 수 있는 JavaScript로 변환한다.
    2. 브라우저 지원을 걱정하지 않고 최신 언어 기능을 쓸 수 있다. (Babel 과 같이 사용)
3. 최적화 (Optimization)
    1. 사용하지 않는 코드 제거(Tree shaking)
    2. 공백, 주석 제거 등 코드를 압축 (Minification)
    3. 초기 로딩을 빠르게 하기 위해 필요한 코드만 별도로 나눈다. (Code splitting)
    4. 필요할 때 파일을 동적으로 불러온다. (Lazy  loading)
    5. 이미지를 자동으로 최적화해서 용량을 줄인다.
4. 개발 환경 제공
    1. 개발할 때 파일을 수정하면 페이지를 새로고침하지 않고도 수정사항을 즉시 반영해준다. (Hot Module Replacement)
    2. 개발자가 디버깅할 때 원본 코드와 번들된 코드를 쉽게 비교할 수 있도록 소스맵을 만들어 준다.

---

## 심화

### 로더

- 로더(Loader)는 JavaScript가 아닌 파일 (CSS, 이미지, TypeScript 등)을 JavaScript 모듈로 변환해 번들러가 경로 탐색 과정에서 읽고 연결할 수 있도록 만들어주는 도구
- TyepsScript 파일처럼 브라우저가 바로 해석할 수 없는 리소스는 로더를 통해 JavaScript 모듈로 변환해 주어야 한다.

### Vite에서의 로더

- Vite를 사용할 때는 웹팩처럼 직접 로더를 설정할 필요 없다.
- 개발 환경
    - Vite는 ESM(Es Modules) 기반으로 동작하기 때문에, 개발 환경에서는 파일을 한 번에 번들링하지 않고 요청된 파일만 변환해서 브라우저에 제공한다.
        - `.ts`, `.tsx`, `,jsx` 파일 → esbuild를 사용해 JavaScript로 변환
        - `.css`, `.json`, 이미지 파일 → Vite 내장 플러그인으로 변환
- 배포 환경
    - 프로덕션 빌드 단계에서는 **Rollup**이 전체 프로젝트를 번들링한다.
        - CSS 파일 → Rollup 내장 플로거은으로 추출 및 번들링
        - 이미지 파일 → Asset 플러그인으로 관리
        - JavaScript 최적화 → Tree-shaking, Code-splitting 적용

### 트리셰이킹(Tree Shaking)

- 트리셰이킹은 프로젝트에서 사용되지 않는 코드를 제거하는 최적화 기법이다.
    - 마치 나무를 흔들어 불필요한 잎을 떨어뜨리듯, 실제로 사용하지 않는 코드(Dead Code)가 번들 파일에 포함되지 않도록 한다.
- 라이브러리에서 특정 함수 하나만 사용했는데도 전체 코드가 번들에 포함돼 파일 크기가 불필요하게 커지는 문제를 방지한다.
- 트리셰이킹은 정적 분석(Static Analysis) 기반으로 작동한다.
    - 정적 분석은 코드가 실행되기 전에 구조를 분석해, 사용되지 않는 코드를 정확히 찾아낼 수 있는 기법이다.
    - 따라서 트리셰이킹은 코드를 분석하고 번들링하는 **빌드 타임**에 적용된다.

ESM(ES Modules)과 CJS(CommonJS)의 트리 셰이킹(tree-shaking) 관점에서 차이

| 항목 | ESM(ES Modules) | CJS(CommonJS) |
| --- | --- | --- |
| 정적 분석 가능 여부 | 가능 | 불가능 |
| 트리 셰이킹 지원 | 가능 | 불가능 |
| 모듈 로딩 방식 | 정적 로딩(`import`) | 동적 로딩(`require`) |
| 의존성 분석 시점 | 컴파일 시점 | 런타임 시점 |
| 내보내기 형태 | 명시적(`export`) | 객체 기반(`module.exports`) |
| 최적화 대상 여부(Webpack, Rollup) | 최적화 용이 | 최적화 어려움 |
| 사이드 이펙트 제거 | 쉽게 가능 | 어렵거나 불가능 |
- **ESM**은 컴파일 타임에 어떤 코드가 사용되지는 정확하기 분석할 수 있기 때문에 트리 셰이킹에 적합하다.
- **CJS**는 `require()` 호출이 동적으로 이루어지고, `module.exports`가 어떤 값을 포함할지 예측하기 어려워서 정적 분석이 어려워 트리 셰이킹이 불가능 하다.