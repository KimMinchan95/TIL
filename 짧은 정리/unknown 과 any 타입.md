# TypeScript의 unknown과 any 타입

## 개요

TypeScript에서 `unknown`과 `any`는 모두 "타입을 알 수 없는" 값을 나타내지만, **타입 안전성** 측면에서 중요한 차이가 있다.

## any 타입

### 정의

- **타입 체크를 완전히 우회하는 타입**
- 어떤 값이든 할당 가능하고, 어떤 속성이나 메서드든 접근 가능
- TypeScript의 타입 시스템을 "끄는" 효과

### 특징

```typescript
let anyValue: any = "hello";
anyValue = 42; // OK
anyValue.nonExistent(); // OK (런타임 에러 발생 가능)
```

### 장단점

- **장점**: 유연성, 빠른 개발, 기존 JS 코드와의 호환성
- **단점**: 타입 안전성 상실, 런타임 에러 위험, IDE 지원 부족

## unknown 타입

### 정의

- **타입 안전한 "any" 타입**
- 어떤 값이든 할당 가능하지만, **사용하기 전에 타입 체크가 필요**
- TypeScript 3.0에서 도입된 더 안전한 대안

### 특징

```typescript
let unknownValue: unknown = "hello";
unknownValue = 42; // OK
// unknownValue.nonExistent(); // 컴파일 에러!

// 타입 가드를 통해서만 사용 가능
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // OK
}
```

### 장단점

- **장점**: 타입 안전성, 런타임 에러 방지, 점진적 타입 지정
- **단점**: 추가 작업 필요, 타입 가드 코드 추가

## 핵심 차이점

### 타입 안전성

- **any**: 컴파일 타임에 타입 오류를 잡을 수 없음
- **unknown**: 사용하기 전에 타입 체크 강제

### 할당 가능성

- **any**: 모든 타입에 할당 가능
- **unknown**: 타입 체크 후에만 할당 가능

## 언제 어떤 것을 사용할까?

### any 사용 시기

- 임시 프로토타이핑
- 기존 JavaScript 코드 마이그레이션
- 외부 라이브러리 통합 (임시)

### unknown 사용 시기

- API 응답 처리
- 사용자 입력 처리
- 일반적인 경우 (타입 안전성을 유지하면서 유연성이 필요한 경우)

## 결론

- `unknown`은 "타입을 모르지만 안전하게 사용하고 싶다"
- `any`는 "타입 체크를 완전히 무시하고 싶다"

### 권장사항

1. **기본적으로 unknown 사용**: 타입 안전성을 위해
2. **any는 최후의 수단**: 정말 필요한 경우에만 사용
3. **타입 가드 활용**: unknown을 안전하게 사용하기 위해
