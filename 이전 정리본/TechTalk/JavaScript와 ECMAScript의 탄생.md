# JavaScript와 ECMAScript의 탄생

[[10분 테코톡] 해리의 JavaScript와 ECMAScript의 탄생](https://www.youtube.com/watch?v=uyt-B_SDo9k&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=153&t=8s)

## 1993

### MOSAIC

- 최초로 널리 인기를 얻은 브라우저 등장

## 1994

### Netscape Navigator

- MOSAIC의 개발자 중 한 명인 마크 앤드리슨이 Netscape를 공동 창립하고 Netscape Navigator를 공개
- 마크 앤드리슨은 동적인 웹사이트를 위한 스크립트 언어가 필요하다고 느낌
    - 브랜든 아이크를 고용해서 스크립트 언어의 제작 요청

## 1995

### JavaScript의 탄생

- 여러가지 언어에서 아이디어를 얻어 시제품을 완성
    - 10일 만에 만들어진 Mocha의 완성
    - Mocha의 이름이 LiveScript로 바뀜
    - LiveScript에서 JavaScript로 이름을 바꿈

## 1995~2001

### 1996 - 1차 브라우저 전쟁

- 1996년 3월 Netscape는 Netscape Navigator 2.0 버전에서 JavaScript를 지원
- 1996년 8월 Internet Explorer 3.0에서 JavaScript와 적당히 호환되는 JScript를 지원
    - JScript는 말 그대로 적당히 호환되어서 이때 웹사이트들에서는 ‘Netscpae’에서 가장 잘 표시됨, ‘Internet Explorer에서 가장 잘 표시됨’ 로고를 웹사이트에 박아 놓는다.

### 1996 - Netscape의 표준화 시도

- 호환성 문제를 해결하기 위해서 Netscape는 표준화 단체인 Ecma International에 JavaScript의 표준화를 요청하게 된다.

### 1997 - ECMAScript의 탄생

- ECMA - 262 명세에 의해 표준화된 언어 ECMAScript
- 썬(오라클)이 “Java”라는 이름을 상표로 소유하고 있어 “JavaScript”를 공식 명칭으로 할 수 없었다.

- 이런 노력에도 불구하고 IE(Internet Explorer)가 1차 브라우저 전쟁에서 승리하게 된다.
    - Window OS에 IE를 기본적으로 탑재했다.
    - Netscape와 달리 IE는 브라우저 전면 무료화를 선언했다.
    - 비표준 IE 전용 웹 규격을 사용해서 다른 브라우저에서는 웹사이트가 제대로 보여지지 않도록 했다.
- IE는 2001년 브라우저 점유율 96%를 달성했다.
- 이후로도 IE는 점유율을 유지하기 위해서 웹 표준을 무시하고, activeX같은 IE에서만 호환되는 비표준 웹 기술들을 적극적으로 사용했다.

**개발자들은 각각의 다른 브라우저에서 동작하는 코드를 다 따로 작성했다.**

### 2006 - jQuery의 등장

- 존 레식이란 개발자가 JQuery를 발표했다.
- JQuery는 JQuery API를 통해서 작성한 코드들을 모든 브라우저에서 분석할 수 있도록 해줘서 크로스 브라우징 이슈를 해결했다.
- DOM 조작, Ajax 요청 등을 바닐라 자바스크립트보다 편하게 작성할 수 있게 해주었다.

### 2008 - IE에 대항할 Chrome의 등장

- Chrome 브라우저는 Just In Time 컴파일러가 포함된 V8엔진이 포함되어 있었고, 이로 인해서 다른 브라우저들 보다 훨씬 빠른 성능을 갖게 되었다.
- 빠른 성능에도 불구하고 MS와 달리 google은 웹 표준을 준수했다.

- 2009년 ECMAScript 5 표준화 진행되었다.
- Chrome 등장 이후 웹 기술의 표준화로 크로스 브라우징 이슈가 많이 해결되었다.

### 2018 - JQuery에서 React로

- React가 JQuery의 점유율을 추월하게 된다.

### React가 대세가 된 이유

1. 모던 자바스크립트 (ES6+) 환경
    - ES5 ~ 6, HTML5 등 웹 표준의 발전을 통한 크로스 브라우징 이슈 해결
        - 더 이상 JQuery를 사용하지 않아도 될 이유 중 하나
    - 바닐라 자바스크립트로도 DOM 조작과 Ajax 요청이 간편해졌다.
2. 성능상의 문제
    - 모든 브라우저에서 동작하기 위해 여러 코드로 wrapping
        - 개발자가 원하는 동작을 하기 위해서 매우 오래걸린다.
    - 특히, DOM조작을 할때는 JS보다 수십 배 느린 성능을 보여주었다.
3. 복잡한 웹페이지와 DOM API
    - 현대 웹페이지는 이전보다 복잡해 졌고, 다루어야 할 데이터가 많아졌다.
    - 다루어야 할 데이터가 많아질수록 더 많은 DOM을 선택해야한다.
        - 이는 코드의 증가, 코드 관리의 어려움, 에러 핸들링과 유지 보수의 어려움으로 이어진다.
        - React는 개발자가 DOM API를 사용해 직접 DOM을 조작하지 않아도 되도록 한다.
        - 개발자는 변하는 State만 관리하면 React가 알아서 처리해 DOM을 렌더링 한다.