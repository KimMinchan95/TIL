# 콜백 함수란?

- 콜백함수
  - 다른 코드의 인자로 넘겨주는 함수
  - **콜백 함수는 호출 시점과 실행 여부를 외부 코드에 위임한 함수**이다.
- 콜백 함수는 '**제어권**'과 관련이 깊다.
  - **콜백 함수의 호출 시점, 전달인자, this 결정 권한을 위임한다.**

# 제어권

### 호출 시점

- 제어권을 넘겨받은 코드가 스스로의 판단에 따라 적절한 시점에 콜백 함수를 실행한다.
  - 콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수 호출 시점에 대한 제어권을 가진다.

| **code**                  | **호출 주체** | **제어권**  |
| ------------------------- | ------------- | ----------- |
| cbFunc();                 | 사용자        | 사용자      |
| setInterval(cbFunc, 300); | setInterval   | setInterval |

### 인자

- 콜백 함수의 이름이 아니라 순서(position) 기반으로 전달된다.
  - 필요없는 인자는 무시되고, 부족하면 `undefined`
- 콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수를 호출할 때 인자에 어떤 값들을 어떤 순서로 넘길 것인지에 대한 제어권을 갖는다.

### this

- 콜백 함수의 `this`는 "호출 방식"에 따라 결정된다.
  - 일반 함수로 호출되면 -> 전역 객체 (strict mode: `undefined`)
  - 특정 API가 지정되면 -> 해당 객체 (ex. addEventListener)
- 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 `this`가 될 대상을 지정한 경우에는 그 대상을 참조한다.

## 콜백 함수는 함수다.

- **콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출한다.**
  - 메서드로서 호출하지 못하므로, obj와의 직접적인 연관이 없어진다.
  - 그래서 `this` 바인딩 문제가 자주 발생한다.

## 콜백 함수 내부의 this에 다른 값 바인딩하기

- 별도의 인자로 `this`를 받는 함수의 경우에는 넘겨주면 된다.
  - 그렇지 않은 경우에는 `this`의 제어권을 넘겨줘서 사용자가 바꿀 수 없다.
- `this`를 다른 변수에 담아 콜백 함수로 활용할 함수에서 `this`대신 그 변수를 사용하게 하고, 이를 클로저로 만들어 `this`를 유지하는 방식이 많이 사용되었다.

```jsx
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 - 전통적 방법
var obj = {
  name: 'obj',
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};
var callback = obj.func();
setTimeout(callback, 1000);
```

- ES5에서 등장한 `bind` 메서드 이용 방법

```jsx
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 - bind 메서드
var obj = {
  name: 'obj',
  func: function () {
    console.log(this.name);
  },
};

setTimeout(obj.func.bind(obj), 1000);

var obj2 = { name: 'obj2' };
setTimeout(obj.func.bind(obj2), 1500);
```

## 콜백 지옥과 비동기 제어

- 콜백 지옥(callback hell)
  - 콜백 함수가 중첩되어 가독성이 급격히 나빠지는 현상
- 비동기 코드의 예시
  - **별도의 요청, 실행 대기, 보류** 등과 관련된 코드
    - setTimeout - 특정 시간까지 함수의 실행 보류
    - addEventListener - 사용자의 개입전까지 함수의 실행을 대기
    - XMLHttpRequest - 외부 서버에 요청을 보내고 응답이 왔을 때 실행
- Promise, Generator - ES6
- async/await - ES2017
