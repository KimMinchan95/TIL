# JavaScript의 this 키워드

## 개요

JavaScript에서 `this`는 함수의 실행 컨텍스트에 따라 동적으로 바인딩되는 특별한 키워드다. 함수가 호출되는 방식과 환경에 따라 참조하는 객체가 결정되며, 이를 이해하는 것은 JavaScript의 핵심 개념 중 하나다.

## this 바인딩 규칙

### 기본 바인딩 (Default Binding)

함수가 독립적으로 호출될 때, `this`는 전역 객체를 참조한다.

```javascript
function executeFunction() {
  console.log(this); // window (브라우저 환경) 또는 global (Node.js 환경)
  console.log(this.globalVariable);
}

executeFunction(); // undefined (전역 객체에 globalVariable 속성이 존재하지 않음)

// 엄격 모드에서는 undefined로 바인딩
("use strict");
function strictExecuteFunction() {
  console.log(this); // undefined
}
```

### 암시적 바인딩 (Implicit Binding)

객체의 메서드로 호출될 때, `this`는 해당 객체를 참조한다.

```javascript
const userService = {
  name: "userService",
  authenticate() {
    console.log(`Authentication executed by ${this.name}`);
    return this.validateCredentials();
  },
  validateCredentials() {
    return true;
  },
};

userService.authenticate(); // "Authentication executed by userService"

// 주의: 메서드 참조 분리 시 this 바인딩 손실
const authMethod = userService.authenticate;
authMethod(); // "Authentication executed by undefined"
```

### 명시적 바인딩 (Explicit Binding)

`call()`, `apply()`, `bind()` 메서드를 통해 `this`를 명시적으로 지정한다.

```javascript
function processData(operation, data) {
  console.log(`${operation} executed by ${this.serviceName} with data:`, data);
}

const dataProcessor = { serviceName: "DataProcessor" };

// call() - 인수를 개별적으로 전달
processData.call(dataProcessor, "Validation", { id: 1, name: "test" });

// apply() - 인수를 배열로 전달
processData.apply(dataProcessor, ["Transformation", { id: 2, name: "sample" }]);

// bind() - 새로운 함수를 반환하여 this 바인딩
const boundProcessData = processData.bind(dataProcessor);
boundProcessData("Serialization", { id: 3, name: "example" });
```

### new 바인딩 (New Binding)

생성자 함수로 호출될 때, `this`는 새로 생성된 인스턴스를 참조한다.

```javascript
function DatabaseConnection(config) {
  this.host = config.host;
  this.port = config.port;
  this.connect = function () {
    console.log(`Connecting to ${this.host}:${this.port}`);
  };
}

const dbInstance = new DatabaseConnection({ host: "localhost", port: 5432 });
dbInstance.connect(); // "Connecting to localhost:5432"
```

## 우선순위

- **new 바인딩** (최우선)
- **명시적 바인딩** (call, apply, bind)
- **암시적 바인딩** (객체 메서드)
- **기본 바인딩** (최후)

## 화살표 함수와 this

화살표 함수는 자신만의 `this` 바인딩을 생성하지 않고, 렉시컬 스코프의 `this`를 상속받는다.

```javascript
const apiClient = {
  baseURL: "https://api.example.com",

  // 일반 함수 - this 바인딩 손실
  fetchData: function () {
    setTimeout(function () {
      console.log(`Fetching from ${this.baseURL}`); // this.baseURL은 undefined
    }, 100);
  },

  // 화살표 함수 - 렉시컬 this 바인딩
  fetchDataArrow: function () {
    setTimeout(() => {
      console.log(`Fetching from ${this.baseURL}`); // this.baseURL은 "https://api.example.com"
    }, 100);
  },
};

apiClient.fetchData(); // "Fetching from undefined"
apiClient.fetchDataArrow(); // "Fetching from https://api.example.com"
```

## 실제 사용 시나리오

### DOM 이벤트 핸들러에서의 this

```javascript
// DOM 요소의 이벤트 핸들러
const submitButton = document.querySelector("#submit-btn");

// 일반 함수 - this는 이벤트 타겟 요소
submitButton.addEventListener("click", function () {
  console.log(this); // <button id="submit-btn"> 요소
  this.disabled = true;
  this.textContent = "Processing...";
});

// 화살표 함수 - this는 상위 스코프의 this
submitButton.addEventListener("click", () => {
  console.log(this); // window 또는 상위 스코프의 this
});
```

### 클래스 기반 컴포넌트에서의 this

```javascript
class StateManager {
  constructor() {
    this.state = { count: 0, isLoading: false };
  }

  // 일반 메서드 - this 바인딩 필요
  updateState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  // 화살표 함수로 메서드 정의 - this 바인딩 불필요
  updateStateArrow = (newState) => {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  };

  notifySubscribers() {
    console.log("State updated:", this.state);
  }
}

const stateManager = new StateManager();
const updateMethod = stateManager.updateState;
updateMethod({ count: 1 }); // TypeError: Cannot read property 'state' of undefined

const updateArrowMethod = stateManager.updateStateArrow;
updateArrowMethod({ count: 1 }); // 정상 실행
```

### React 클래스 컴포넌트에서의 this

```javascript
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: false };
  }

  // 일반 메서드 - this 바인딩 필요
  fetchUserData() {
    this.setState({ loading: true });
    fetch(`/api/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((user) => this.setState({ user, loading: false }));
  }

  // 화살표 함수 - this 바인딩 불필요
  fetchUserDataArrow = () => {
    this.setState({ loading: true });
    fetch(`/api/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((user) => this.setState({ user, loading: false }));
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchUserData.bind(this)}>일반 메서드</button>
        <button onClick={this.fetchUserDataArrow}>화살표 함수</button>
      </div>
    );
  }
}
```

## 주의사항과 모범 사례

### this 바인딩 손실 방지

```javascript
// 방법 1: bind() 메서드 활용
const boundMethod = object.method.bind(object);

// 방법 2: 화살표 함수 래핑
const arrowWrappedMethod = () => object.method();

// 방법 3: call/apply 즉시 실행
object.method.call(object, arg1, arg2);
```

### 모던 JavaScript 패턴

```javascript
// 클래스 필드 (ES2022)
class ModernService {
  method = () => {
    // this는 항상 인스턴스를 참조
    return this.processData();
  };
}

// 함수형 프로그래밍 접근
const createService = (serviceName) => ({
  execute: () => `Service ${serviceName} executed`,
  validate: () => `Service ${serviceName} validated`,
});

const userService = createService("UserService");
```

## 요약

- `this`는 함수의 실행 컨텍스트에 따라 동적으로 결정된다
- 화살표 함수는 렉시컬 스코프의 `this`를 상속받는다
- 명시적 바인딩이 암시적 바인딩보다 우선순위가 높다
- 모던 JavaScript에서는 화살표 함수와 클래스 필드를 활용하여 `this` 바인딩 문제를 해결한다
- 실무에서는 일관된 패턴을 사용하여 예측 가능한 코드를 작성하는 것이 중요하다
