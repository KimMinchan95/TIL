문서 : https://www.maeil-mail.kr/question/125

### Node

- **DOM을 구성하는 가장 기본적인 구성 단위**이다.
- Node에는 여러 가지 타입이 존재한다. - Node는 DOM 트리의 모든 구성 요소를 포함하는 포괄적인 개념이다.
    - **Document Node**는 HTML 문서 전체를 나타내는 **루트 노드**
    - **Element Node**는 **HTML 태그**
    - **Text Node**는 **텍스트 내용**
    - **Comment Node**는 **주석**

### Element

- **HTML이나 XML 태그로 표현되는 객체**
- 모든 Element는 Node이지만 모든 Node가 Element인 것은 아니다.
- Element는 `id`, `class`,  `style`과 같은 HTML 속성을 가질 수 있다.
- `querySelector()`나 `getElementsByClassName()` 과 같은 메서드를 사용할 수 있다.

### 구분

- `<div>Hello<!--주석-->World</div>`
    - div 태그는 Element Node이면서 Node 이다.
    - ‘Hello’ 와 ‘World’ 라는 텍스트는 Text Node 이다.
    - 주석은 Comment Node 이다.

### Node와 Element의 차이와 관련된 구체적인 예시

- `textContent`와 `innerHTML`
    - `textContent`라는 속성은 Node의 속성이므로 모든 종류의 Node에서 사용할 수 있다.
    - `innerHTML`은 Element의 속성이라서 Element에서만 사용할 수 있다.
- `childNodes`와 `children`
    - Node의 속성인 `childNodes`는 주어진 요소의 모든 자식 Node를 포함하는 `NodeList`를 반환한다. 여기에는 Element뿐만 아니라 모든 종류의 Node가 포함된다.
    - Element의 속성인 `children`은, Element 타입의 자식 노드만을 포함하는 `HTMLCollection`을 반환한다. 여기에는 텍스트 노드나 주석 노드는 제외되고 HTML 요소 노드만 포함된다.