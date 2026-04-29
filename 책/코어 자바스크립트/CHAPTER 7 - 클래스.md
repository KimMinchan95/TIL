- ES6에서 클래스 문법이 추가되었다.
- ES6의 클래스에서도 일정 부분은 프로토타입을 활용하고 있다.

## 클래스와 인스턴스의 개념 이해

- 클래스의 이해
  - 클래스는 하위로 갈수록 상위 클래스의 속성을 상속하면서 더 구체적인 요건이 추가 또는 변경된다.
  - 하위 클래스도 아무리 구체적이라도 결국 추상적인 개념이다.
- superclass, subclass, instance
  - superclass - 상위 개념
  - subclass - superclass의 조건을 충족하면서 더욱 구체적인 조건이 추가된 것
  - instance - 사례, 클래스 속성을 지니는 실존하는 개체
- 직계존속
  - 클래스들은 인스턴스 입장에서는 ‘직계존속’이다.
  - 다중 상속을 지원해도 결국 인스턴스를 생성할 때 호출할 수 있는 클래스는 하나뿐이다.

## 자바스크립트의 클래스

- 자바스크립트에서는 클래스를 프로토타입 체이닝에 의한 참조를 이용해서 모방한다.

## ES6의 클래스 및 클래스 상속

- ES6의 클래스 예시

```jsx
var ES6 = class {
  constructor(name) {
    this.name = name;
  }
  static staticMethod() {
    return this.name + " staticMethod";
  }
  method() {
    return this.name + " method";
  }
};
var es6Instance = new ES6("es6");
console.log(ES6.staticMethod()); // es6 staticMethod
console.log(es6Instance.method()); // es6 method
```

- ES6의 클래스 상속

```jsx
var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};
var Square = class extends Rectangle {
  constructor(width) {
    super(width, width);
  }
  getArea() {
    console.log("size is :", super.getArea());
  }
};
```
