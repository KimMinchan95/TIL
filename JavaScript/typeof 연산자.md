# typeof 연산자

> `typeof` 연산자는 피연산자의 데이터 타입을 문자열로 반환한다.

-  `typeof` 연산자는 피연산자 앞에 위치한다.

```js
typeof operand
typeof (operand)
```

- typeof 연산자는 8가지 다음 문자열 중에 하나를 반환한다.
    - `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"symbol"`, `"object"`, `"function"`, `"bigint"`
    - `"null"`을 반환하는 경우는 없다.

#### 반환 예시
|Type|Result|
|--|--|
|Undefined|"undefined"|
|Null|"Object"|
|Boolean|"boolean"|
|Number|"Number"|
|BigInt|"bigint"|
|Symbol|"symbol|
|Function 객체|"function"|
|다른 모든 객체|"object"|

#### 코드 예시
```js
typeof 'hello' // "string"
typeof 13 // "number"
typeof 42n // "bigint"
typeof function() {} // "function"

// !주의
typeof [1, 2] // "object"
typeof null // "object"
```

#### 주의 사항
- **null**
    - `typeof` 연산자로 `null`값을 연산하면 `"object"` 가 반환된다.
    - 이는 하위호환을 위해 고쳐지지 않은 버고로 `null`인지를 알고 싶을 때는 일치연산자 `===`를 사용해야 한다.

- **선언하지 않은 식별자**
    - 선언하지 않은 식별자를 `typeof`로 연산하면 ReferenceError가 발생하지 않고 `"undefined"`를 반환한다.
```js
typeof hi // "undefined"
```

- **Array**
    - object와 array를 `typeof`로 구별하지 못한다. 둘다 `"object"`가 반환되기 때문이다.
    - 구별을 위해서는 [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) 메서드를 사용해야 한다.

---
### 참고자료
- 모던 자바스크립트 Deep Dive - 이웅모 지음
- [type of - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)