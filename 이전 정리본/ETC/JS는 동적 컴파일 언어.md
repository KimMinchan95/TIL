# JavaScript는 동적 컴파일 언어

## 개요

JavaScript는 **동적 컴파일 언어(Dynamic Compilation Language)**. 이는 코드가 실행 시점에 컴파일되고 최적화된다는 의미한다.

## 정적 컴파일 vs 동적 컴파일

### 정적 컴파일 (Static Compilation)

- **C, C++, Rust** 등
- 코드가 실행 전에 미리 컴파일됨
- 컴파일된 바이너리가 실행됨
- 실행 시점에는 이미 최적화된 기계어로 변환됨

### 동적 컴파일 (Dynamic Compilation)

- **JavaScript, Python** 등
- 코드가 실행 시점에 컴파일됨
- 런타임에 최적화가 이루어짐
- JIT(Just-In-Time) 컴파일러 사용

## JavaScript의 동적 컴파일 과정

### 1. 파싱 (Parsing)

- 소스 코드를 AST(Abstract Syntax Tree)로 변환

### 2. 바이트코드 생성

- AST를 바이트코드로 변환
- V8 엔진의 경우 Ignition 바이트코드 생성

### 3. JIT 컴파일

- **TurboFan (V8)**: 최적화된 기계어로 컴파일
- **SpiderMonkey (Firefox)**: IonMonkey 사용
- **JavaScriptCore (Safari)**: FTL(Faster Than Light) 사용

## 결론

JavaScript의 동적 컴파일은 **실행 시점에 최적화**를 수행하는 방식으로, 초기에는 느릴 수 있지만 **장기적으로는 높은 성능**을 제공한다. 이는 웹 애플리케이션의 특성상 사용자가 페이지에 머무르는 시간이 길다는 점을 고려한 설계이다.

### 핵심 포인트

1. **실행 시점 컴파일**: 코드가 실행될 때 컴파일됨
2. **적응형 최적화**: 실행 패턴에 따라 최적화 전략 변경
3. **JIT 컴파일**: Just-In-Time 컴파일러 사용
4. **타입 기반 최적화**: 런타임 타입 정보를 활용한 최적화
