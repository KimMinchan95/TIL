# DRY & KISS & YAGNI

[qkraudghgh/clean-code-javascript-ko](https://github.com/qkraudghgh/clean-code-javascript-ko)

[코딩 잘하는 팁 세가지 (이걸 알면 코드가 깔끔해 진다)](https://youtu.be/jafa3cqoAVM)

# Dry 원칙

Don't Repeat Yourself (반복하지 마라)
상반되는 개념으로 WET(Write Every Time)이 있다.

> "Dry is about the `duplication of knowledge, of intent.` It's about expressing the same thing in two different places, possibly in two totally different ways."
> 

드라이는 특정한 지식, 의도 로직 등이 다양한 곳에서 다양한 형태로 계속 반복되는 것을 피하자. 
반복하지 마라!의 원칙이다.

> Every piece of knowledge must have a `single`, unambiguous, authoritative `representation within a system`"
> 

시스템내에서 특정한 지식과 로직은 단 한 곳에서 명확하고 신뢰할 수 있도록 존재해야 한다.

### 로직을 한군데서만 작성 한다면, 재사용성도 높고, 한 곳에서만 수정하면 되니까 유지보수성이 늘어난다.

```jsx
function greetings(user) {
  return `Hi ${user.fullName()}`;
}

function goodbye(user) {
  return `See you next time ${user.fullName()} 👋`
}

class User {
  // e.g. John Jackson
  fullName() {
    return `${this.firstName} ${user.middleName} ${this.lastName}`;
  }
}
```

# KISS 원칙

Keep It Simple, Stupid (심플하고, 멍청하게 유지하자)

> "Most systems work best if they are kept simple rather than made complicated; therefore, `simplicity should be a key goal` in design and unnecessary complexity should be avoided"
> 

대부분의 시스템들은 복잡하게 만들어졌을때 보다는 심플하게 만들어졌을때 최고로 잘 동작한다. 그러므로 시스템을 디자인할때 심플함을 주 목표로 해야되고, 불필요한 복잡성은 피해야한다.

- 하나의 함수, 클래스에서는 한 가지 동작만 사용하라
- 최대한 나눠서 보기 쉽게 만들어라

# YAGNI 원칙

You Ain't Gonna Need It(너 그거 필요 없어)

지양할 것

- 필요하지 않은 기능
- 사용하지 않는 기능
- 지나치게 미래지향적인 기능

너무 지나치게 만들지 말자

지향할 것

- 깨끗하게
- 변경이 쉽게
- 유지보수 용이하게

시스템에 불필요한 복잡성을 더 하지 않는 내에서 확장성 있는 코드를 작성해야됨

##### 시스템에서 YAGNI를 통해서 불필요한 요소들을 제거하고,  키스를 통해서 심플함을 추가하면 퀄리티 있는 코드, 시스템을 만들 수 있다.