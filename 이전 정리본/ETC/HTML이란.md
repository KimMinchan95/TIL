# HTML이란?

[html이란? - html의정의](https://www.youtube.com/watch?v=ZeBsrkPq5dM)

## HTML?

> 웹페이지를 만드는 언어
> 

**단어를 분리해서 살펴보면**

- HT (**H**yper**T**ext) - 문서와 문서가 링크로 연결되어 있다.
    - 링크가 있어서 다른 문서로 쉽게 이동할 수 있다.
- M (**M**arkup) - 태그로 이루어져 있다.
    - 태그 : 웹문서에 어떤 표시(특정 사이트로의 링크, 글씨 크기, 글자색, 등…)를 해주는 것
- L (**L**anguage) - 언어
    - 일반적인 언어 : 사람과 사람이 의사소통을 할 수 있게 하는 매개체
    - 프로그래밍에서 언어 : 사람과 컴퓨터 or 시스템이 의사소통을 하게해준다.
    - 언어에서 중요한 것은 약속

## HTML의 용어

- 엘리먼트 (element) : 요소
    - Content와 Content를 깜싸는 태그(open & close)

```jsx
<h1>This is Content</h1>
// <h1>은 open tag, </h1>은 close tag
```

- 콘텐츠를 감싸지 않아 비어있는 태그들도 존재한다.
    - `br`, `img`, `meta`, `link`, `input`, `hr`
- attribute : 속성
- value : 값

```jsx
<tagname atrribute="value">Content</tagname>
```

## DTD

- HTML을 작성하려면 문서타입이라는 것이 **필수적**이다.
    - 문서타입을 **DTD**라고 한다.
    - DTD(DOCTYPE or Document type Definition)는 **HTML 문서의 최상위**에 있어야 한다.

> 문서형(DTD) 정의를 생략하는 경우 웹 브라우저가 표준모드가 아니라 비표준모드로 렌더링되어 크로스 브라우징에 어려움을 겪을 수 있다.
> 

```jsx
<!DOCTYPE html> // HTML 문서의 구성 요소는 아니다.
<html lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title>HTML 4.01 문서타입</title>
    <link rel="stylesheet" type="text/css" href="css/service_name.css">
</head>
<body>

</body>
</html>
출처: https://webclub.tistory.com/608 [Web Club:티스토리]
```

---

### 참고자료

[HTML 태그란?](https://mingtrace.tistory.com/282)

[#1 HTML 이란 무엇인가?](https://webclub.tistory.com/608)