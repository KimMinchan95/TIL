# JSON

## JSON Intro

> JSON(JavaScript Object Notation)은 JavaScript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다. 데이터를 전송할 때 일반적으로 사용한다.
> 

### JSON은?

- 데이터 표현 형식이다.
- 일반적으로 API들과 설정에 사용된다.
- 가볍고 읽고 쓰기 쉽다.
- 대부분 언어와 쉽게 통합된다.

## 장점

- JSON은 Text 형식으로 이룽어져 있어서, 사람과 기계 모두 읽고 쓰기 쉽다.
- 프로그래밍 언어와 플랫폼으로 부터 독립적이므로, 서로 다른 시스템간에 객체를 교환하기에 좋다.
- JavaScript 문법을 채용했기 때문에, 웹 환경에서 특히 유리하다. 파싱 or 직렬화 없이도 JavaScript 프로그램에서 사용할 수 있다.

## 데이터 유형 및 예시

**데이터 유형은 다음 6가지가 있다.**

1. String
2. Number
3. boolean
4. Null
5. Object
6. Array

**String**

JSON의 문자열은 유니코드 문자로 구성되며, 백슬래시(\) 이스케이프 문자를 사용한다.

```jsx
{ "Type" : "String" }
```

**Number**

JSON에서 숫자는 JavaScript의 배정도수 부동소수점 형식을 따른다.

```jsx
{
	"number_1" : 100,
	"number_2" : 30.05
}
```

**Boolean**

불리언 값은 참 또는 거짓 둘 중 하나로 지정된다. 따옴표로 묶이지 않으며 문자열 값으로 취급된다.

```jsx
{ "Boolean" : true }
```

**Null**

Null은 빈 값으로, 키에 어떤 값도 할당되어 있지 않은 경우 Null로 취급한다.

```jsx
{ "EmptyValue" : null }
```

**Object**

JSON 객체 데이터는 중괄호({}) 사이에 삽입된 한 쌍의 이름과 값이다. 키는 문자열이여야 하며 쉽표로 구분되어야 한다.

```jsx
{
	"Writer" : {
		"name" : "Douglas Kennedy",
		"age" : 62,
		"live" : true
	}
}
```

**Array**

배열 데이터 유형은 순서가 지정된 값의 모음이다. JSON에서 배열 값은 String, Number, Object, Array, Boolean, Null 유형이어야 한다.

```jsx
{
	"Writers" : [
		{
			"name" : "Douglas Kennedy",
			"age" : 62,
			"live" : true
		},
		{
			"name" : "Hemingway",
			"age" : 62,
			"live" : false
		}
	]
}
```

## 추가

- JSON은 순수한 데이터 포맷으로, 오직 프로퍼티만 담을 수 있고 메서드는 담을 수 없다.
- 문자열과 프로퍼티의 이름 작성시 큰 따옴표(””)만을 사용해야 한다.
- JSON은 후행 쉼표를 허용하지 않는다. Object, Array에서도 마찬가지 이다.

---

## 참고자료

[JSON - 위키백과, 우리 모두의 백과사전](https://ko.wikipedia.org/wiki/JSON)

[JSON으로 작업하기 - Web 개발 학습하기 | MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)

[JSON이란 무엇인가?](https://www.oracle.com/kr/database/what-is-json/)