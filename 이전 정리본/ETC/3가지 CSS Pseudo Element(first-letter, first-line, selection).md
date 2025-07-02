# 3가지 CSS 스타일링(first-letter, first-line, selection)

[3 Amazing Pseudo Elements You Have Probably Never Used](https://www.youtube.com/watch?v=GnFx0CypZXU&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=120)

가상요소(Pseudo Element)중 가장  유명한 것은 `::before`와 `::after`이다.

가상요소는 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있다.

우리가 알지 못해서 사용하지 못하는 가상요소를 소개해본다.

## `::first-letter`

- `::first-letter`는 가상요소로
- 블록단위 element에서 첫 번째 줄의 첫 번째 단어에 스타일을 적용한다.

**예시)**

```css
.class-name::first-letter {
	font-size: 2em;
	color: red;
	font-weight: bold;
}
```

## `::first-line`

- `::first-line`은 가상요소로
- 블록 단위 element의 첫 번째 줄에 스타일을 적용한다.

**예시)**

```css
.class-name::first-line {
	font-size: 1.2rem
	color: red;
	text-decoration: underline;
}
```

## `::selection`

- `::selection`은 가상요소로
- 사용자가 강조 표시한 문서 부분에 스타일을 적용한다.
    - 예) text를 드래그 할 때
    

**예시)**

```css
.class::selection {
	background-color: red;
	color: white;
}
```

---

## 참고자료

[의사 요소 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements)

[::first-letter (:first-letter) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)

[::first-letter (:first-letter) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)

[::selection - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)