# DOM(Document Object Model) 이란

> DOM(문서 객체 모델)은 HTML, XML 문서의 프로그래밍 interface이다. 문서의 구조화된 표현을 제공하며, 프로그래밍 언어가 DOM구조에 접근할 수 있는 방법을 제공(API)하여 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕니닫.
> 

### DOM Intro

```jsx
const title = document.getElementById("title");;
title.textContent = '제목';
```

**여기서 `document.getElementById` 와 `textContent`는 JS요쇼가 아니다.**

예시로 `document`를 보면

- 브라우저에서 `console.log(document)`를 실행하면 `document` 객체가 출력된다.
- `Node.JS` 환경에서 `console.log(document)` 를 실행하면 `Uncaught ReferenceError`가 뜬다.

`document`가 브라우저 환경에서만 접근이 된다는 것은 자바스크립트 자체의 요소가 아니라 브라우저란 환경에서 제공되는 것이라고 볼 수 있다.

- `document` 객체는 브라우저에서 제공되는 `window` 객체의 한 요소이다.
- 이 `window.document`객체를 **DOM**이라고 분류한다.

### DOM의 생성 과정

- 웹사이트에 접속하면 브라우저가 HTML 문서를 읽어들인다.
- 브라우저는 HTML문서를 해석하는데 이 과정을 **Parsing**이라고 한다.
- **Parsing**의 결과로 **DOM**이 만들어 진다.

### DOM의 구조

- DOM은 HTML요소를 트리 형식으로 만들다.
    - DOM은 트리 전체를 말한다.
    - 이 요소의 구성요소 하나하나를 **Node**라고 부른다.
- **Node**를 JS로 제어할 수 있는 이유는 **Node** 하나하나가 모두 API이기 때문이다.

### DOM과 HTML의 차이점

DOM은 HTML 문서로부터 생성이 되지만 항상 동일하지는 않다.

- HTML : **화면에 보이고자 하는 모양과 구조를 문서로 만든 것**으로 **단순 텍스트로 구성**되어 있다. 최초에 화면을 그릴 떄 사용하는 설계도로 볼 수 있다.
- DOM: **HTML 문서의 내용과 구조가 객체 모델로 변화**되어 다양한 프로그램에서 사용될 수 있다. 설계도를 이용하여 실제로 화면에 나타내지는 인터페이스 이다.

### DOM이 원본 HTML 소스와 다른 예제

1. 작성된 HTML 문서가 유효하지 않을 때
- DOM을 생성하는 동안, 브라우저는 유효하지 않은 HTML 코드를 올바르게 교정한다.

```jsx
<!doctype html>
<html>
	Hello, world!
</html>
```

- 위의 코드는 HTML 규칙의 필수 사항인 <head>와 <body> 요소가 빠져있어서 DOM트리가 이를 교정한다.
- 이 과정에서 DOM과 원본 HTML 소스의 차이가 생긴다.

1. JavaScript에 의해 DOM이 수정될때
- DOM은 HTML 문서의 내용을 볼 수 있는 인터페이스 연할을 하는 동시에 동적 자원이 되어 수정이 가능하다.
- JS코드를 통해 새로운 노드를 추가할 때 이 코드는 DOM을 업데이트 하지만 HTML 문서의 내용은 변하지 않는다.

---

## 참고자료

[웹개발 필수개념! DOM이 뭔가요? (+ Web API)](https://www.youtube.com/watch?v=mFawNZz_Uu0&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=106)

[DOM 이란? (+ 웹 페이지가 만들어지는 방법)](https://usefultoknow.tistory.com/entry/DOM-%EC%9D%B4%EB%9E%80-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%80-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%80%EB%8A%94-%EB%B0%A9%EB%B2%95)