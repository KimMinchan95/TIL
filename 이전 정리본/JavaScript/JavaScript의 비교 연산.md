## ==와 === 그리고 Object.is
**JavaScript에서는 3가지 비교 연산이 존재한다.**
- `===` 엄격한 같음 (삼중 등호, 항등)
- `==` 느슨한 같음 (이중 등호)
- [`Object.is`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is) (ECMAScript 2015에서 새로 생김)

어떤 연산을 사용할지는 다음의 기준에 달려있다.
- 이중 등호 (`==`)는 두 가지를 비교할 때 유형 변환을 수행하고 IEEE 754를 준수하기 위해 `NaN`, `-0` 및 `+0`을 특별하게 처리한다. (NaN != NaN, -0 == +0 이다.)
- 삼중 등호 (`===`)는 이중 등호와 똑같지만 유형 변환을 수행하지 않는다. 그래서 형식이 다른 경우 `false`가 반환된다.
- `Object.is`는 형식 변환을 하지 않으며 `NaN`, `-0` 및 `+0`에 대한 특수 처리를 수행하지 않는다. (특수 숫자 값을 제외하고는 `===`와 동일한 동작을 제공한다.)


<span style='color: red'>**`NaN`과 `-0` 그리고 `+0` 처리 예시**</span>
```js
NaN === NaN // false
-0 === +0 // true

Object.is(NaN, NaN) // true
Object.is(-0, +0) // flase
```

---

## == vs ===
**이제 `Object.is`와 삼중 등호(`===`)의 차이점은 충분히 이해했으니 이중 등호(`==`)와 삼중 등호(`===`)의 차이를 깊게 알아보자.**
> 위에서 언급 했던 것처럼 이중 등호와 삼중 등호의 가장 큰 차이점은, **형식 변환의 유무**이다.

- 이중 등호는 형식 변환을 해서 비교하고 
- 삼중 등호는 형식 변환을 하지 않는다.

### ==는 느슨한 값음
- 이중 등호는 두 값을 공통 형식으로 변환후 (하나 또는 양쪽이 변환) 삼중 등호와 같이 비교를 수행한다.
- 이중 등호는 항상 대칭이다. `A == B`와 `B == A`의 결과가 항상 같다는 것을 의미한다.

### == 와 === 의 값이 다른 예시
| x | y |`==`|`===`|
|:---:|:---:|:---:|:---:|
|0|false|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|""| false|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|""|0|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|'0'|0|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|'17'|17|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|[1, 2]|'1,2'|<span style='color:green'>true</span>|<span style='color:red'>false</span>|
|new String('foo')|'foo'|<span style='color:green'>true</span>|<span style='color:red'>false</span>|

### 삼중 등호를 사용하자
- 이번 블로그를 작성하면서 나 또한 `[1, 2] == '1,2'`가 `true`로 나오는 것을 처음 알았다.
- 이처럼 `==`가 하는 형식 변환을 모두 신경쓰기도 힘들고 이 모든 것을 신경써서 프로그래밍 한 일은 없을 것이다.
- 프로그래밍에서 가장 중요한 일 중에서 유지보수가 있다. 예상 가능한 코드를 작성해서 유지보수성을 높여야 하는데 `==`를 사용해서 비교를 하면 예상이 힘들어 진다.

---

### 참고자료
[동치 비교 및 동일성 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
[Object.is() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)