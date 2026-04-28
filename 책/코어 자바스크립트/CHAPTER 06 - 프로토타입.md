## 프로토타입의 개념 이해

### constructor, prototype, instance

- 흐름 과정
  - 어떤 생성자 함수(Constructor)를 `new` 연산자와 함께 호출
  - Constructor에서 정의된 내용을 바탕으로 새로운 인스턴스(instance) 생성
  - instance에 `__proto__` 라는 프로퍼티가 자동으로 부여
  - 프로퍼티는 Constructor의 `prototype` 이라는 프로퍼티를 참조

- 프로토 타입
  - `__proto__`
    - 인스턴스에 자동으로 `__proto__`가 생성된다.
    - `__proto__`는 **생략 가능**한 프로퍼티이다.
    - 이 생략 가능한 프로퍼티는 Constructor의 `prototype`을 참조한다.
  - `prototype`
    - JS는 함수에 자동으로 객체인 `prototype` 프로퍼티를 생성한다.
  - 인스턴스에서의 접근
    - **생성자 함수의 `prototype`에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신 것처럼 해당 메서드나 프로퍼티에 접근할 수 있다.**

### constructor 프로퍼티

- 생성자 함수의 `prototype` 객체와 인스턴스의 `__proto__` 객체 내부 에는 `constructor`라는 프로퍼티가 있다.
  - 이 프로퍼티는 원형인 생성자 함수를 참조한다.

## 프로토타입 체인

### 메서드 오버라이드

- 메서드 오버라이드
  - 인스턴스가 동일한 이름의 프로퍼티 or 메서드를 가지고 있으면 메서드 위에 메서드를 덮어씌운다.
    - 원본이 그대로 있는 상태에서 덮어 씌우는 형식이다.

### 프로토타입 체인

- 프로토타입 체인(prototype chain)
  - 어떤 데이터의 `__proto__` 프로퍼티 내부에 다시 `__proto__` 프로퍼티가 연쇄적으로 이어진 것
- 프로토타입 체이닝(prototype chaining)
  - 프로토타입 체인을 따라가면서 검색하는 것
- 프로토타입의 끝에는
  - 프로토타입 체인상 가장 마지막에는 언제나 `Object.prototype`이 있다.
  - 예외적인 경우는 `Object.create(null)` 을 사용했을 때 이다.
    - 이 경우 `__proto__`가 없는 객체를 생성한다.
