# Flex Layout

[[10분 테코톡] 🦄 콜린의 Flex Layout](https://www.youtube.com/watch?v=JQ0jO3B43YQ&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=113&t=114s)

## Layout (HTML & CSS)

> 문서위에 상자를 적절한 위치를 배치하는 것
> 
- 기본적으로 Layout은 normal flow를 따른다.
- **normal flow**에서는 크게 두 가지 배치 방법이 존재한다.
    - block
        - 자신의 부모요소의 너비를 전부 차지한다.
        - 새로운 블록이 추가될시 다음라인에 추가된다.
    - inline
        - 자신의 content 넓이만큼 차지한다.
        - 새로운 inline요소는 부모의 너비를 넓지않은 선에서 나란히 위치한다.
        - 부모의 넓이를 넘겼다면 개행하여 위치한다.

## Flex

> 요소들을 행, 열 단위로 정렬하기 위한 **1차원 레이아웃**
> 

**Flex 레이아웃을 적용하는 방법**

- 부모요소에 `display: flex`를 적용하면 된다.

### Flex 용어

**flex container**

- 부모요소
- 속성: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`
- 아이템의 배치, 정렬을 담당(행&열)

**flex item**

- 자식요소
- 속성: `flex`, `flex-flow`, `flex-shrink`, `flex-basis`, `order`, `align-self`
- 자신의 크기, 순서 변경

**main axis**

- 주축
- main start부터 main end 방향으로 flex item들을 배치한다.

**cross axis**

- 보조축 (주축의 수직방향)
- cross start부터 cross end로 flex item들을 배치한다.

### for Flex Container

**flex-direction**

- **main-axis**의 방향을 결정하여 main-start 기준점을 잡는 속성이다.
    - `row(default)`, `cloumn`, `row-reverse`, `column-reverse`

**writing mode & direction**

- flex는 기본적으로 writing mode와 direction의 논리적 흐름을 따라간다.
- 기본적으로
    - writing-mode는 `horizontal-tb` 위에서 아래로
    - direction은 `ltr` 왼쪽에서 오른쪽으로다.

```css
.container {
	display: flex;
	writing-mode: horizontal-tb; /* default */
	direction: ltr; /* default */
}
```

- direction을 `rtl` 오른쪽에서 왼쪽으로 바꾸면 flex가 `row`로 되어있어서 `row-reverse`처럼 동작한다.
- writing-mode를 `vertical-lr`로 변경하면 flex가 `row`로 되어있어도 `column` 방향으로 배치된다.

**flex-wrap**

- **컨테이너의 영역을 overflow** 했을 때, item들을 어떻게 배치할 것인지 결정
    - `nowrap(default)`, `wrap`, `wrap-reverse`
- `nowrap`
    - flex요소들이 부모너비를 overflow 하더라도 한 개의 라인을 유지한다.
- `wrap`
    - `wrap`속성을 부여한다면, flex-item들이 새로운 줄로 배치된다.

**justify-content**

- **main-axis를 기준**으로 item들을 정렬한다.
    - `flex-start(default)`, `center`, `space-around`, `flex-end`, `space-between`, `space-evenly`
- `center`
    - item들이 main축을 기준으로 중앙 정렬된다.
- `space-between`
    - 각 item들이 동일한 공간을 유지시킨다.
    

**align-items**

- **cross-axis를 기준**으로 item들을 정렬한다.
    - `stretch(default)`, `center`, `flex-start`, `flex-end`, `baseline`
- `stretch`
    - item들의 부모 높이를 전부 차지한다.
- `center`
    - corss축을 기준으로 중앙정렬 된다.

**수평, 수직 중앙 정렬하기**

flex 이전 방법

```css
.container {
	position: relative;
}

.item {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

flex 도입

```css
.container {
	display: flex;
	justify-content: center;
	align-items: center;	
}
```

### for Flex Item

**order**

- **main-axis를 기준**으로 flex-item의 **시각적 순서**를 변경하는 속성
    - 반응형 헤더에 사용할 수 있다.
- 정수 값을 가진다.
    - 음수: main-start쪽 (순서상 앞)
    - 0: default
    - 양수: main-end쪽 (순서상 뒤)

**크기 조절**

- flex-item의 크기를 조절하는 속성이다.
    - `flex-grow`, `flex-shrink`, `flex-basis`, `flex`
    - **기본 크기** 또는 **늘리거나 줄일 비율**을 설정한다.

**flex-basis**

- item의 **기본 크기**를 설정한다.
    - auto: default, 컨텐츠 크기만큼 차지하는 영역
    - 값: px, %, rem, em

**flex-grow**

- item이 **늘어날 비율**을 결정하는 속성
- flex-container의 빈 공간을 비율에 따라 분배하는 방식
    - 0: default, 빈 영역을 채우지 x, item크기가 늘어나지 x
    - 숫자: 비율
- 빈 영역을 채우는 순서
    1. **컨테이너** 영역의 **빈 영역**의 크기를 구한다. (container 영역 - 각 item의 `flex-basis` 크기의 합)
        - `flex-basis` 값이 0이면 빈 공간에 계산에는 포함되지 않는다.
        - `flex-basis`가 0이더라도 최소한의 content 영역은 보장된다.
    2. 아이템 들의 **flex-grow 합**을 구한다.
    3. **(빈 영역의 크기) / (flex-grow 합)**을 적절하게 분배한다.

**flex-shrink**

- flex-item이 **줄어드는 비율**을 결정하는 속성
- flex-item이 컨테이너 영역을 overflow했을 때
    - 0: item크기가 줄어들지 x
    - 숫자: 비율, 1 - default

**flex**

- `flex-grow`, `flex-shrink`, `flex-basis`의 **축약형** 속성이다.
    - ex) `flex: 1 1 auto`, `flex: 2 0 100px`
    - `flex: 1` === `flex: 1 1 0`
    - `flex: auto` === `flex: 1 1 auto`
    - `flex: none` === `flex: 0 0 auto`
    

**gap**

- **flex-item 사이의 간격**을 설정하는 속성 **from grid**
    - `gap`, `column-gap`, `row-gap`
- 아이템 간의 여백을 손쉽게 설정할 수 있다.

## Q & A

> Q: flex-basis와 width중 뭐가 더 우선순위가 높나요?
> 

**flex-basis: auto** ⇒ width > flex-basis

**flex-basis: auto가 아닌 값** ⇒ flex-basis

**min(max)-width가 존재한다면** 우선순위 제일 높음

> Q: flex는 어떤 박스 형태를 따르나요?
> 

**외부 환경 (컨테이너) block 배치**를 따르고 **내부 영역은 flex formatting context**를 따른다.

- display: inline-flex를 활용하면
    - 외부 영역은 inline context를
    - 내부 영역은 flex formatting context를 따른다.

> Q: flex는 언제 사용하면 좋을까요?
> 

**간단한 레이아웃**에 좋음. **복잡한 레이아웃은 grid를 사용**하는 것이 적합

flex의 배치, 정렬, 크기 변경, 순서 변경 등과 같은 특징을 활용하기 좋은 곳