# Map 자료형

## Map
- 맵은 ES6(ECMAScript 6)에서 도입된 새로운 자료 구조이다.
- Object 처럼 key - value(키 - 값) 구조이다.
- 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다.

#### 주요 메서드 와 프로퍼티
- `new Map()` : 맵을 생성한다. 
    - 객체는 리터럴, 생성자, `Object.create()` 메서드를 이용해서 생성할 수 있지만 맵의 생성 방법은 한가지 이다.
- `map.set(key, value)` : `key`를 이용해서 `value`를 저장한다.
    - 맵은 객체와 다르게 모든 유형의 자료형을 `key`로 사용할 수 있다 추가 설명은 Object vs Map 파트에 첫 번째를 참조하라
- `map.get(key)` : `key`에 해당하는 `value`를 반환한다. `key`가 존재하지 않으면 `undefined`를 반환한다.
    - 객체는 점 표기법과 대괄호 표기법으로 `value`에 접근하지만 맵은 `get` 메서드로만 접근 가능하다.
- `map.has(key)` : `key`의 존재 여부를 `boolean`값으로 반환한다.
- `map.delete(key)` : `key`에 해당하는 값을 삭제한다.
    - 삭제 가능 여부(해당 `key`의 존재 여부)에 따라서 `boolean`값을 반환한다.
- `map.clear()` : 맵 안에 모든 요소를 제거한다.
- `map.size` : 요소의 개수를 반환한다.
- `map.forEach()` : 맵은 배열처럼 `forEach` 메서드를 통해서 순회가 가능하다.

## Object vs Map
- Object는 key로 String과 Symbol만 가질 수 있지만, Map은 key로 모든 값이 허용된다.
    - Object에 String이나 Symbol이 아닌 Number를 넣으려고 하면 자동으로 String으로 변환된다.
- Object의 크기를 알려면 `Object.keys(object).length`같은 추가 코드를 사용해서 추적해야 하지만 Map은 `map.size()`로 쉽게 추적할 수 있다.
- Map의 반복은 삽입된 순서를 보장한다. 
    - Object는 아래 예시처럼 삽입 순서를 보장하지 못한다.
```js
const object = {
    2: 'two',
    3: 'three',
    1: 'one,
};

console.log(object); {1: 'one', 2: 'two', 3: 'three'};
```
- Object는 단순한 구조로 저장된 데이터를 사용시 훨씬 빠르고, 거대한 데이터를 저장할 때는 Map이 성능이 좋다.
- JSON은 Object를 지원하지만 Map은 지원하지 않는다.
- `delete` 메서드를 사용시 Map의 성능이 더 좋다.

## 주의사항
- Map도 점 표기법과 대괄호 표기법을 이용해서 접근 할 수 있지만 get은 불가능 하다 (Object의 Prototype을 상속받아서 접근이 가능한 것으로 판단된다.)
```js
const map = new Map();

map.hi = 'hi';

console.log(map.get('hi')); // undefined
console.log(map.hi); // hi
```

---
### 참고 자료
[맵과 셋 - 코어 자바스크립트](https://ko.javascript.info/map-set)
[키기반의 컬렉션 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections)
[Map - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)