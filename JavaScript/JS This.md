# JS This

[자바스크립트 - This와 Bind | 멋진 개발자라면 꼭 알아야됨!! - 별코딩](https://youtu.be/j6VkGimAs-E) 공부

## this intro
| "`this`는 함수를 호출한 객체이다"

- JS에서 this는 어떤 객체를 가르키는 키워드
    - this가 가르키는 객체는 상황에 따라서 변한다.

### 전역 문맥에서 this
- 전역 문맥에서 this는 "Window 객체"이다.
    - "Window 객체"는 브라우저에 대한 정보를 가지고 있다.
    - `use strict` 모드에서의 `this`도 "Whindow 객체"이다.

### 함수 문맥에서 this
- 함수 내부에서의 `this`는 함수를 어떻게 호출하냐에 따라서 달라진다.
    - "this는 함수를 호출한 객체이다"

**ex)**
```js
function main() {
    console.log(this);
}
부
main(); // window

// 아래처럼 호출한 것과 같다.
window.main();
```
- `main`이란 함수는 `window`객체에 등록이 되어있다.
    - "`this`는 함수를 홀출한 객체"이므로, `main`함수를 호출한 `window`객체를 가르킨다.

**ex) - with 'use strict'**
```js
'use strict';

function main() {
    console.log(this);
}

main(); // undefined

window.main() // window
```
- `use stirct` 모드를 전역적으로나 함수 내부에서 선언하면 `window`객체를 이용해서 함수를 호출하지 않는 이상 `undefined`가 나온다.

### 객체 메서드에서 this
```js
const object = {
    name: '별코딩',
    main: function () {
        console.log(this);
    },
};

object.main(); // {name: '별코딩', main: f}

const main2 = object.main;
main2(); // window
```
- `object`를 이용해서 호출했으므로 `object`가 출력된다.
- `main2` 상수에 `object.main`을 할당하고, 호출하면 `this`는 `window`객체를 가르킨다.
    - `main2` 함수를 호출한 객체는 더이상 `object`가 아니기 때문이다.
    - `main2` 는 전역적으로 호출한 함수이다.

#### this와 함수 정의
```js
function main() {
    console.log(this);
}

const object = {
    name: '별코딩',
    main,
};

object.main(); // {name: '별코딩', main: f}
```
- `this`는 함수가 정의된 위치나 방법의 영향을 받지 않는다.
    - `main`함수가 `object`의 밖이나 안에 정의되어있는 것과 상관 없이, `this`를 호출한 객체가 `object`라면 `this`는 `object`가 된다.
    - 이는 `object`에 추후에 `main`을 추후에 추가해도 동일하다.

```js
function main() {
    console.log(this);
}

const object = {
    name: '별코딩',
    smallObject: {
        name: '작은 별코딩',
        main,
    },
};

object.smallObject.main(); // {name: '작은 별코딩', main: f}
```
- `this`를 직접적으로 호출한 객체는 `smallObject`이기 때문에 위와같이 출력된다.


#### Bind()
- `bind()` 메소드가 호출되면 새로운 함수를 생성한다.
- 첫 인자의 value로는 `this` 키워드를 설정하고, 이어지는 인자들은 바인된 함수의 인수에 제공된다.
```js
function main() {
    console.log(this);
}

const mainBind = main.bind({ name: 'hi' });

mainBind(); // {name: 'hi'};

const object = {
    mainBind,
};

object.mainBind(); // {name: 'hi'}
```
- `mainBind`라는 함수를 어떻게 호출하던 `this`값을 고정시킬 수 있다.
- 주의할 점은 이미 bind된 함수를 다시 bind할 수 없다.
    - 반복해서 bind해줘도 최초 bind된 객체를 유지한다.

```js
const object = {
    name: '별코딩',
    main: function () {
        console.log(this);
    }.bind({ name: '멋진 객체' }),
};

object.main(); // {name: '멋진 객체'}
```

### 이벤트 처리기에서 this
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <script defer src="./index.js"></script>
    </head>
    <body>
        <button id="btn">버튼</button>
    </body>
</html>
```
```js
// index.js
const button = document.getElementById('btn');

button.addEventListener('click', function () {
    console.log(this);
    console.log(event.target === this); // true
});
```
- 버튼을 클릭했을때 콘솔에 `<button id="btn">버튼</button>`이 출력된다.
    - 클릭 이벤트를 작동시킨 요소를 `this`가 가르킨다.

### 전통적인 함수 문법 vs 화살표 함수 문법 this
- 전통적인 함수 문법
```js
function main() {
    console.log(this);
}
```
- 호출 방법에 따른 this 변화
- this를 고정하기위해 bind() 사용
<br />
- 화살표 함수 문법

```js
const main = () => {
    console.log(this);
}
```
- 더 간결한 함수 선언 문법
- this가 호출에 따라 바뀌지 않음