# Set 자료형

## Set
- Set은 SE6(ECMAScript 6)에서 도입된 새로운 자료 구조이다.
- Set 객체는 값 콜렉션으로, 삽입의 순서대로 요소를 순회할 수 있다.
- 하나의 `Set` 내 값은 하나만 존재할 수 있으므로, 어떤 값이든 그 `Set` 콜렉션 내에서는 유일하다.

#### 주요 메서드와 프로퍼티
- `new Set(iterable)` - Set을 만든다. `이터러블`(반복 가능한)객체를 전달만드면(배열) 그 안의 값을 복사해서 Set에 넣는다.
- `set.add(value)` - 값을 추가하고 셋 자신을 반환한다.
    - 배열의 `push` 메서드와 유사하다.
    - set의 콜렉션의 맨 뒤에 추가한다.
- `set.clear()` - Set에 모든 값을 제거한다. (Set을 비운다.)
- `set.delete(value)` - Set에서 특정 `value`를 지운다.
    - Set 내부에 해당 `value`가 있으면 `true`, 없으면 `false`를 반환한다.
- `set.has(value)` - Set 내부에 `value`가 존재하면 `true`, 없으면 `false`를 반환한다.
- `set.size` - Set에 들어있는 값의 개수를 반환한다요

#### 순환 메서드
- `set.entries()` - Set 객체의 삽입 순서대롤 `[value, value]`의 형태로 가진 배열의 새로운 `iterator`객체를 반환한다.
    - Set 객체에는 `key`가 없지만 `Map` 객체의 API와 비슷하게 유지하기 위해 `key`와 `vlaue`자리에 같은 `value`를 가지게 된다.
```js
const set = new Set([1, 2, 3]);

const setIter = set.entires();

console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // [2, 2]
console.log(setIter.next().value); // [3, 3]
```
- `set.forEach()` - Set 요소를 각각에 삽입 순서대로 순회한다.
    - `callback`은 "값, 키, 순회중인 `Set`객체"를 호출하는데 Set은 `key`가 없으므로 처음 두 개의 매개변수 모두 `value`를 받는다.

```js
const set = new Set([1, 2, 3]);

set.forEach((value, valueAgain, set) => {
    console.log({value, valueAgain, set});
});
// {value: 1, valueAgain: 1, set: Set(3)}
// {value: 2, valueAgain: 2, set: Set(3)}
// {value: 3, valueAgain: 3, set: Set(3)}
```

- `set.values()`, `set.keys()` - Set 객체에 요소가 삽입된 순서대로 각 요소의 값을 순환 할 수 있는 `Iterator`객체를 반환한다.
    - `keys()` 메소드와 `values()` 메소드는 정확하게 동일하게 동작한다.

```js
const set = new Set([1, 2, 3]);
const setIterValues = set.values();
console.log(setIterValues.next().value) // 1
console.log(setIterValues.next().value) // 2
console.log(setIterValues.next().value) // 3

const setIterKeys = set.keys();
console.log(setIterKeys.next().value) // 1
console.log(setIterKeys.next().value) // 2
console.log(setIterKeys.next().value) // 3
```


## 배열과 Set의 변환
```js
const arr = [1, 2, 3];

// Set 생성자를 이용해서 배열을 Set으로 변경 가능
const set = new Set(arr);
console.log(set) // {1, 2, 3}

// spread 연산자를 사용해서 Set을 배열로 변경 가능
const arr2 = [...set];
console.log(arr2) // [1, 2, 3]
```

---
### 참고 자료
[Set - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)
[맵과 셋 - 코어자바스크립트](https://ko.javascript.info/map-set)