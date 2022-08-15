# defer

> JavaScript를 처음 공부할때, `<script>` 태그를 배우면서 `<script>` 태그는 항상 `<body>` 태그의 최하단에 넣으라고 배웠다.
> 
- HTML을 [파싱](http://wiki.hash.kr/index.php/%ED%8C%8C%EC%8B%B1)하는 중에, `<script>` 태그를 만나면 중간에 HTML 파싱을 멈추고 JS파일을 로드, 파싱 한 후 HTML 코드를 파싱하기 떄문이다.
- 이는 아래와 같이 두 가지 문제를 발생시킨다.

## <script> 태그가 상당에 있을시 발생하는 두 가지 문제점

### 1. DOM 접근 문제

```jsx
<body>
  <script>
    const btn = document.querySelector("#sayHi");

    btn.addEventListener("click", () => {
      alert("Say Hi");
    });
  </script>
  <button id="sayHi">hi</button>
</body>
```

위의 코드를 보면 문제점을 바로 이해할 수 있을 것이다.

- 코드에서 `querySelector`로 sayHi라는 id를 찾은 시점에서는 sayHi라는 id를 갖고있는 button이 존재하지 않는다.
- 그래서 `document.querySelector("#sayHi");`는 `null`을 리턴한다.
- `null`에 event를 붙이려는 코드가 에러가 생길 수 밖에 없다.

이런 DOM 접근 문제가 발생하기 때문에 `<script>` 태그를 `<body>` 태그의 최하단에 위치시켜야 한다.

### 2. 사용자 경험

- 만약 `<script>` 태그가 `<body>` 태그의 상단이나 `<header>` 에 있으면 HTML 파싱보다 JS코드 파싱 한다.
- `<script>` 파일의 크기가 크면, 파일을 읽는 동안 렌더링이 지연되어 사용자는 빈 화면을 보고 있어야한다.

## defer

> `<script>` 태그의 `defer` 속성을 넣으면 `<body>` 태그 최하단에 `<script>`를 넣는 것은 더 이상 필수가 아니다.
> 
  
![defer](https://user-images.githubusercontent.com/83770790/184560141-497736d0-95c8-444e-b897-c7c9f1410ec3.png)

- `defer` 속성은 HTML 파싱도중 `<script>`태그를 만나면 HTML 파싱하는 동시에 `<script>`를 다운로드 한다.
- 그리고 HTML파싱이 완료되고 나서야 `<script>`를 실행시킨다.

**`<script>` 실행 시점이 HTML 파싱 이후이기 때문에 `<script>` 태그가 상단에 존재할 때 발생하는 문제점이 해결된다.**

추가적으로 JS파일을 `<body>`의 기타 태그들과 분리 할 수 있다는 소소한 장점이 있다.

### 추가

1. `defer` 속성을 추가하는 방법
    - `<script>` 태그에 `defer`만 추가하면 된다.
    - `defer` 가 없을때 기본적으로 false이고, 존재하면 true이다.

```jsx
<script src="scriptFile" defer></script>
```

1. defer의 단짝 src
    - `<script>` 태그에 src가 없으면 defer 속성은 무시된다.
    - 즉, 다음과 같이 코드를 작성하면 `defer` 속성이 적용되지 않는 것이다.

```jsx
<body>
  <script defer>
    const btn = document.querySelector("#sayHi");

    btn.addEventListener("click", () => {
      alert("Say Hi");
    });
  </script>
  <button id="sayHi">hi</button>
</body>
```
