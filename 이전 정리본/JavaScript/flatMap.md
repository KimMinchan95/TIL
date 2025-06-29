## flatMap

- `flat()` 메서드와 `map()` 메서드를 합친 메서드이다.

- MDN 설명
> `flatMap()` 메서드는 먼저 매핑함수를 사용해 각 엘리먼트에 대해 map 수행 후, 결과를 새로운 배열로 평탄화합니다. 이는 깊이 1의 flat 이 뒤따르는 map 과 동일하지만, `flatMap` 은 아주 유용하며 둘을 하나의 메소드로 병합할 때 조금 더 효율적입니다.

- 여기서 주의 깊게 봐야될 것은 "결과를 새로운 배열로 평탄화 한다"이다.
    - 실행 순서가 "결과 도출 => 평탄화" 순서이다.

#### 구문
```js
    arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])

```
- 매개변수는 `map`과 동일하다.
- 하지만 반환 값을 깊이 한 레벨을 평탄화한다는 점이 `map`과의 차이점이다.

#### 예제

1. 깊이가 1단계인 배열은 map과 flatMap의 결과가 동일하다.
```js
const arr = [1, 2, 3];

arr.map((cur, idx) => cur * idx); // [0, 2, 6]
arr.flatMap((cur, idx) => cur * idx); // [0, 2, 6]
```

2. 깊이가 2단계인 배열부터 차이가 나기 시작한다.
```js
const arr = [1, 2, 3];

arr.map((cur, idx) => [cur * idx]); // [[0], [2], [6]]
arr.flatMap((cur, idx) => [cur * idx]); // [0, 2, 6]
```

3. 활용법 예시
```js
const arr = ['hi', 'bye'];

// map 결과
arr.map(cur => cur.split('')); // [['h', 'i'], ['b', 'y', 'e']];

// map + flat 결과
arr.map(cur => cur.split('')).flat(); // ['h', 'i', 'b', 'y', 'e'];

// flatMap 결과
arr.flatMap(cur => cur.split('')); // ['h', 'i', 'b', 'y', 'e'];
```

---
### 참고자료
[Array.prototype.flatMap()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)