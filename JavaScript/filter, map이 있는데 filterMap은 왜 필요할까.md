# filter, map 이 있는데 filterMap은 왜 필요할까?

[filter, map 이 있는데 filterMap은 왜 필요할까요?](https://www.youtube.com/watch?v=gyESD4oOHRc&t=219s)

## filter와 map

- JS 배열 기본 메서드 중에서 `filter`와 `map`이 있다.

### **filter**

- **filter**는 반환값으로 `boolean`값을 받아서 조건에 맞는 요소만 걸러낸다.
- 예제는 짝수 값만 걸러내는 코드이다.

```jsx
 [1, 2, 3, 4, 5, 6].filter(
	num => (num % 2 === 0)
)
// -> [2, 4, 6]
```

### map

- **map**은 배열의 각 item의 값을 변경할 때 사용한다.
- 예제는 배열의 숫자를 각각 두 배 곱하는 함수이다.

```jsx
[2, 4, 6].map(
	num => num * 2
)
// -> [4, 8, 12]
```

### filterMap

- JS 기본 메서드들 중에서 `filterMap`은 존재하지 않는다.
    - 하지만 `reduce`를 통해서 `filterMap`을 구현할 수는 있다.
- `filterMap`이 필요한 이유는 다음과 같다.
- 예제는 배열의 item 중 `data`라는 object의 key값에 일치하는 값이 있으면 배열로 출역하는 예제이다.

```jsx
const data = {
	3: "Heelo",
	5: "World",
};

[1, 2, 3, 4, 5]
	.filter(num => (data[num] !== undefined))
	.map(num => data[num])
// -> ["Hello", "World"]
```

- 이 처럼 작성하면 filter와 map이 데이터를 두 번 조회하면서 성능에 영향을 줄 수있다.

- `reduce`를 통해 배열을 한번만 순환하는 코드를 작성하면 다음과 같다.

```jsx
[1, 2, 3, 4, 5]
	.reduce((arr, num) => {
		const val = data[num];

		return (
			val !== undefined ?
			arr.concat(val) :
			arr
		);
	}, [])
// -> ["Hello", "World"];
```

- ecmaScript 2019에서 추가된 `flatMap`을 통해서도 같은 역할을 하는 코드를 작성할 수 있다.

```jsx
[1, 2, 3, 4, 5]
	.flatMap(num => {
		const val = data[num];
		
		return (
			val !== undefined ?
			[val] :
			[]
		);
	})
// -> ["Hello", "World"]	
```