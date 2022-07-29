# Virtual DOM

[[10분 테코톡] 돔하디의 Virtual DOM](https://www.youtube.com/watch?v=6rDBqVHSbgM&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=110)

## 브라우저 렌더링 과정

1. DOM tree 생성
2. Render tree 생성
3. Layout
4. Painting

## DOM 조작의 비효율성

- 이전에는 SSR (Server Side Rendering)에서는 정적인 페이지를 렌더링해서 DOM의 동적인 변화가 큰 문제가 되지 않았었다.
- SPA(Single Page Application)이 등장하면서 CSR(Client Side Rendering) 방식이 많이 사용되면서 DOM 업데이트가 상당히 많이 발생하는 경우가 발생하였다.
    - 이러한 최적화 과정에서 등장한게 Virtual DOM 이다.

## Virtual DOM

- Virtual DOM은 DOM의 가벼운 버전이다.
- DOM 노드 트리를 복제한 자바스크립트 객체이다.
    - class, style등 속성을 지니고 있다.
    - DOM api 메서드는 가지고 있지 않다.

## Virtual DOM의 동작

- 최초의 브라우저가 실제 DOM 트리를 생성하고 브라우저 화면에 애플리케이션 UI가 렌더된다.
- Virtual DOM은 실제 DOM 트리를 가벼운 버전으로 복사한다.
- DOM 노드에 변화가 생기면 Virtual DOM은 다시 새로운 트리를 재생성 한다.
    - Virtual DOM은 재생성하는게 너무 비효율적이라고 생각할 수 있는데, 렌더 과정에서 비싼 비용을 사용하는 것이지, Virtual DOM은 메모리상에서 동작해서 빠르다.
- Virtual DOM의 내부 구현을 살펴보면 diff 함수에서 이전 트리와 현재 트리를 비교한다.
    - 이를 통해 변경된 부분만 확인한다.
    - Virtual DOM에서 DOM에 변경된 부분만 변경한다.
- 이를 통해 한 번만 렌더링 함으로써 최적화를 시킨다.

## 재조정

> Virtual DOM은 UI의 이상적인 또는 가상적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 실제 DOM과 동기화하는 프로그래밍 개념이다.
> 

### 위의 과정을 **재조정**이라고 한다.

- Virtual DOM과 실제 DOM을 비교하고 일치시키는 과정이다.
- React는 변경 이전의 Virtaul DOM과 변경 이후의 Virtual DOM을 비교해서 실제 DOM에 적용된다.
- 이 과정에서 Diffing 알고리즘이 사용된다.

**JSX는 다음과 같이 이루어져 있다.**

```tsx
const element = {
	type: "hi",
	props: {
		title: "foo",
		children: "Hello"
	}
}
```

변경전과 변경 후를 비교

1. `type === type` (element type이 같을 때) **속성**만 변경하다.
2. `type !== type` (element type이 다를 때) 이전 트리를 삭제하고 트리가 **재생성**된다.

## key prop

```tsx
// before
<ul>
	<li>first</li>
	<li>second</li>
</ul>
// after
<ul>
	<li>first</li>
	<li>second</li>
	<li>third</li>
</ul>
```

- 마지막에 하나의 노드를 추가하는 경우이다.
- 마지막 노드만 추가 되었기 때문에 하나만 추가적으로 새로 그려진다.

```tsx
// before
<ul>
	<li>second</li>
	<li>third</li>
</ul>
// after
<ul>
	<li>first</li>
	<li>second</li>
	<li>third</li>
</ul>
```

- 새로운 `li`태그 엘리먼트 첫 번째 위치에 추가된 경우이다.
- 리액트는 이럴 때 모든 엘리먼트가 새로 그려졌다고 생각해서 모두 새로 그리게 된다.
- 이때 리액트에 식별자로써 key prop을 제공한다.
- 이렇게 key prop을 넘기면 리액트가 새로 생긴 노드만 인식해서 새롭게 생성된 노드만 그려진다.

### 배열의 index를 사용했을 때

> key prop은 변경되지 않는 유일한 값이어야 한다.
> 

**배열의 index를 key prop으로 넘기면 다음과 같은 문제가 발생한다.**

- 리액트는 key prop으로 어떤 노드에 어떤 값이 들어가는지 판단한다.
- 만약 배열에 첫 번째에 값이 추가되면서 다른 배열의 요소가 뒤로 밀리는 상황이라면 리액트는 기존의 key값을 읽고 기존의 key값의 있던 value들을 유지한다.