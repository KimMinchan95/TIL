# Truthy&Falsy

### JavaScript에서 *truthy* 한 값들과 *falsy* 한 값들

> [참 같은 값(Truthy) - MDN](https://developer.mozilla.org/ko/docs/Glossary/Truthy)
JavaScirpt에서, *Truthy*인 값이란 `Boolean`을 기대하는 문맥에서 `true`로 평가되는 값이다. 따로 *Falsy*로 정의된 값이 아니면 모두 *Truthy*한 값으로 평가된다.

> [거짓 같은 값(Falsy) - MDN](https://developer.mozilla.org/ko/docs/Glossary/Falsy)
*Falsy*인 값은 Boolean 문맥에서 `false`로 평가되는 값이다.

위의 정의를 읽어보면 *Truthy* 한 값과 *Falsy*한 값인지는 *Falsy*에 의해 결정된다.
***Falsy*한 값이 아니면 *Truthy*한 값이기 때문이다**

## Falsy한 값들
[MDN](https://developer.mozilla.org/ko)에 있는 **falsy**값은 8가지가 있다.

|falsy한 값들|설명|
| :--- | :--- |
|`false`|키워드 false|
|`0`|숫자 zero|
|`-0`|음수 zero|
|`0n`|BigInt. 불리언으로 사용될 경우, 숫자와 같은 규칙을 따름. `0n`은 거짓 같은 값.|
|`""`|빈 string|
|`null`|`null` - 아무런 값도 없음|
|`undefined`|`undefined` - 원시값|
|`NaN`|`NaN` - 숫자가 아님|

## `Boolean`을 기대하는 문맥
Boolean을 기대하는 문맥의 대표는 **if문**이라고 생각한다.
**if문**은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 **true**이면 코드 블록이 실행된다.

*Falsy*한 값은 `Boolean` 문맥에서 `false`로 평가되므로 **if문**의 괄호안에 넣으면 코드 블록은 절대 실행될일이 없다.
```js
if (0) {
  // this code never going to run
}
```

위의 *falsy* 한 값에 없었던 empty array(`[]`)와 empty object(`{}`)는 `truthy`한 값이므로 **if**문의 코드 블록에 넣으면 항상 실행된다.
```js
if ([]) {
  // this code always run
}

if ({}) {
  // this code always run
}
```
