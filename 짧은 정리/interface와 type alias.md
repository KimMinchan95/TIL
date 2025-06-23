# TypeScript의 Interface와 Type Alias

## 개요

TypeScript에서 객체의 구조를 정의하는 두 가지 방법

- **Interface**: 객체의 구조를 선언적으로 정의
- **Type Alias**: 타입에 별칭을 부여하여 재사용 가능하게 만듦

## 주요 차이점

### 1. 확장 방식

```typescript
// Interface - extends 사용
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Type Alias - intersection 사용
type AnimalType = {
  name: string;
};

type DogType = AnimalType & {
  breed: string;
};
```

### 2. 선언 병합 (Declaration Merging)

```typescript
// Interface는 선언 병합 가능
interface Config {
  host: string;
}

interface Config {
  port: number;
}
// 결과: Config는 { host: string; port: number; }

// Type Alias는 선언 병합 불가
// type ConfigType = { host: string; };
// type ConfigType = { port: number; }; // 에러!
```

### 3. 유니온/인터섹션 타입

- **Interface**: 유니온 타입 직접 정의 불가
- **Type Alias**: 유니온 타입 정의 가능

```typescript
// Type Alias만 가능
type UnionType = string | number;
type IntersectionType = { id: number } & { name: string };
```

## 사용 시기

### Interface 사용 시기

- **객체의 구조를 정의**할 때
- **클래스 구현** 시
- **확장 가능성**이 필요한 경우
- **API 계약 정의**

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

class UserService {
  async getUser(id: number): Promise<ApiResponse<User>> {
    // 구현
    return {} as ApiResponse<User>;
  }
}
```

### Type Alias 사용 시기

- **유니온 타입 정의**
- **복잡한 타입 조합**
- **함수 타입 정의**
- **리터럴 타입 조합**

```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiConfig = {
  baseUrl: string;
  timeout: number;
  headers: Record<string, string>;
};

type EventHandler<T> = (event: T) => void;
```

## 실제 사용 예시

### React 컴포넌트 Props

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}
```

### API 응답 타입

```typescript
type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
```

### 상태 관리

```typescript
type AppState = {
  user: User | null;
  isLoading: boolean;
  theme: "light" | "dark";
};
```

## 모범 사례

### 1. 일관성 유지

프로젝트에서 하나의 방식을 일관되게 사용

### 2. Interface는 객체 구조에, Type Alias는 복잡한 타입에

```typescript
interface UserProfile {
  id: number;
  name: string;
  avatar?: string;
}

type UserStatus = "online" | "offline" | "away";
type UserWithStatus = UserProfile & { status: UserStatus };
```

### 3. 확장 가능성 고려

향후 확장이 필요하면 Interface 사용

```typescript
interface BaseComponent {
  id: string;
}

interface ButtonComponent extends BaseComponent {
  label: string;
  onClick: () => void;
}
```

### 4. 유니온 타입은 Type Alias 사용

```typescript
type FormField =
  | { type: "text"; value: string }
  | { type: "number"; value: number }
  | { type: "checkbox"; value: boolean };
```

## 성능 고려사항

- **Interface**: 런타임에 존재하지 않음 (타입 체크만)
- **Type Alias**: 런타임에 존재하지 않음 (타입 체크만)
- 둘 다 컴파일 타임에만 사용되므로 **성능 차이 없음**

- interface는 확장시 캐싱을 함
  - 너무 미묘한 성능 차이라서 사실상 별로 차이는 나지 않음

## 결론

### Interface 사용 권장:

- 객체 구조 정의
- 클래스 구현
- 확장 가능성이 필요한 경우
- API 계약 정의

### Type Alias 사용 권장:

- 유니온/인터섹션 타입
- 복잡한 타입 조합
- 함수 타입 정의
- 리터럴 타입 조합

### Typescript 팀 권장사항

- 명확한 가이드라인이 필요하다면, 기본적으로 interface를 사용하고, type만이 할 수 있는 기능이 필요할 때만 type을 사용하라고 명시해놨다.
  - `For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.`
  - [문서](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
