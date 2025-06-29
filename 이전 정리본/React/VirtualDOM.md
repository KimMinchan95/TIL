## Virtual DOM은?

> 기존에는 구성요소를 바꿀 때다 렌더트리 생성
⇒ 가상적으로 UI를 저장했다가 실제 DOM과 연동하는 프로그래밍 컨셉 or 그걸 하는 JS 객체를 지칭

- 수많은 요소가 수정이 되어도 딱 한번 수정 변화가 일어난 요소만 새로 렌더링함

## Virtual DOM의 특징

### 1. Virtual DOM은 DOM의 추상화 버전이다.

- DOM object와 같은 속석등을 가지고 있지만, DOM이 가지고 있는 API는 가지고 있지 않다.

### 2. 필요한 부분만 업데이트 시킨다.

- DOM은 화면의 모든 요소를 업데이트 시켜서 불필요한 요소까지 새로 그린다.
- Virtual DOM을 사용하면 DOM에 필요한 변화만 반영되어 전체 DOM을 바꾸지 않고도 필요한 UI의 업데이트를 적용할 수 있다.

### 3. 자바스크립트 객체

- Vitrual DOM은 자바스크립트 객체를 활용한다.
- 이러한 처리는 실제 DOM이 아닌 메모리 상에서 동작하기 때문에 훨씬 빠르게 동작한다.
- 실제 렌더링 되지 않기 때문에 연산 비용이 적다.

### 4. Virtual DOM은 묶음의 과정이다.

- DOM fragment의 변화를 묶어서 적용한 다음 기존 DOM에 던져주는 과정이다.
- 이 과정을 자동화, 추상화해 놓은 것이다.

## Virtual DOM 예시 코드

HTML

```html
<ul id="items">
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
```

Virtual DOM

```jsx
let domNode = {
	tagName: "ul",
	attributes: { id: "items" },
	children: [
		{
			tagName: "li",
			textContent: "Item 1",
		},
		{
			tagName: "li",
			textContent: "Item 2",
		},
	],
}
```

### 질문

Q. 무조건 Virtual DOM이 빠를까?

A. No. 정보 제공만 하는 웹페이지라면 인터랙션이 발생하지 않기 때문에 일반 DOM의 성능이 더 좋을 수도 있다.

---

### 참고자료

큰돌의 터전 - Virtual DOM

[브라우저렌더링과 가상돔(virtual dom)](https://www.youtube.com/watch?v=kP-H1GXD_nI)

우아한Tech - 지그의 Virtual DOM

[[10분 테코톡] 🥁 지그의 Virtual DOM](https://www.youtube.com/watch?v=PN_WmsgbQCo)