yo# **********Babel**********

[[10분 테코톡] 나인의 Babel](https://www.youtube.com/watch?v=o-5K5Sc7L1k)

## Babel

> Babel is toolchain that is mainly used to convert ECMAScript 2015+ code into a **backwards compatible version of JavaScript** in current and older browsers or environments.
> 
- 바벨은 구형 브라우저나 환경에서 ES6 이상의 기능들을 사용하기 위해서 이전 버전의 자바 스크립트 버전으로 변환해주는 도구를 의미한다.
    - ES6는 2015년 6월에 출시가 되었는데, 각 브라우저들은 ES6의 새로운 기능들을 지원하기 위해서 약 1년에서 2년 정도의 기간이 소요되었다.
    - 개발자들은 바벨을 통해서 각 브라우저 환경에 맞게 ES6를 ES5로 다운그래이드 시켜서 언제든 ES6의 새로운 기능들을 사용할 수 있었다.

## Babel 사용법

- 간단한 예시 : 화살표 함수 transpiling

```jsx
const fn = () => "바벨은 대단해";
```

**이를 트랜스파일링하기 위해서는 세 가지가 필요하다**

- `@babel/core` : 바벨의 핵심적인 기능
- `@babel/cli` : 터미널로 바벨을 사용
- `@babel/plugin-transform-arrow-functions` : 화살표 함수를 transform하는 플러그인

```bash
./node_modules/.bin/babel [변환할 파일] --out-dir [변환될 위치] --plugins=@babel/plugin-transform-arrow-functions
```

- 명령을 입력할 때 플러그인에 설치했던 플러그인을 넣어주게 되면, 아래와 같이 변환된다.

```jsx
var fn = function fn() {
	return "바벨은 대단해";
}
```

**플러그인을 하나씩 설치하고, 설치할 때 마다 명령어 옵션에 하나씩 추가해야될까?**

- 설정 파일에 미리 설정해 준다. (config 파일)

```jsx
{
	"presets": [
		[
			"@babel/preset-env",
				{
					"targets": {
						"edge": "17",
						"firefox": "60".
						"chrome": "67",
						"safari": "11.1"
				},
				"useBuiltIns": "usage",
				"corejs": "3.6.5"
			}
		]
	]
}
```

- config 파일 활용! `babel.config.json` 혹은 `.babelrc.json` 파일
- Preset 활용!
    - 프리셋은 다양한 플러그인들을 한데 모아서 만들어준 집합 관계같은 프리셋
    - 매번 번거롭게 플러그인을 설치할 필요 없이 한번에 바벨 트랜스파일링을 진행할 수 있다.

## Polyfill

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide **modern functionality on older browsers that do not natively support it.**
> 
- 구형 브라우저에서 자체적으로 지원하지 않는 최신 기능들을 지원하고자 가져오는 코드 뭉치

- Promise(빌트인 객체), Array.prototype.includes(인스턴스 메서드) 들은 트랜스파일링을 진행하더라도 코드가 변하지 않고 남아 있는 경우가 있다.
- 타겟 환경에서 빌트인 메서드들이 존재하지 않으면 에러를 발생시킨다.
- 폴리필은 타깃 환경에서 빌트인이나 메서드가 존재하지 않으면 이를 확인하고 ECMA 최신 환경을 맞춰주기 위해서 코드들을 삽입한다.

`**@babel/polyfill`을 사용했었지만 Babel 7.4.0 부터는 사용하지 않는다.**

- 대신에 `core-js`가 생겼다.
    - `core-js`가 타깃 환경에서 메서드가 존재하지 않으면 코드들을 import한다.

- `useBuiltIns` 옵션도 추가되었다.
    - `useBuiltIns` 옵션과 `core-js`의 버전명시를 같이 해주게 되면, import할 때 좀더 효과를 볼 수 있다.
    - 옵션에는 `entry`와 `usage`가 있다.
        - `entry` : `core-js/stable`과 `regenerator-runtime/runtime` 모듈을 전역 스코프에 직접 삽입한 경우 이를 타깃 환경에 필요한 폴리필만 전역 스코프에 추가되도록 변경
        - `usage` : 실제 필요한 폴리필만 삽입한다.

**core-js를 단독으로 사용한다고 해서 원하는 것을 다 이룰수 있지는 않다.**

- 전역 스코프가 오염될 수 있다는 단점이 존재한다.
- `core-js` 는 전역에 존재하지 않는 메서드들이나 빌트인들을 바로 주입해서 사용하기 때문에 전역스코프가 오염될 수 있다.
    - 전역스코프가 오염되면 이름 충돌도 발생할 수 있고, 외부에서 사용하는 라이브러리같은 경우에 전역스코프를 오염시키면 개발자는 예상치 못한 에러를 마주할 수 있다.
    - `@babel/plugin-transform-runtime` 이라는 것을 `core-js`와 사용해 준다.

```jsx
{
	"presets: [[
		"@babel/preset-env"
	}},
		"plugins": [
			["@babel/plugin-transform-runtime", {
			"core-js": 3
			}]
		]
}
```

- 플러그인을 설치하고 `core-js`의 버전을 명시해주면, `core-js-pure` 패키지에서 가져오게 된다. (promise, symbol, includes, …)
    - pure라는 이름처럼 전역 스코프를 오염시키지 않는다.
- 하지만 이도 문제가 생길 수 있다.
    - 프로젝트 내 패키지 중 전역 스코프에 의존하는 패키지가 존재한다면 문제가 된다.
        - Axios같은 경우에는 전역에 존재하는 Promise에 의존하고 있다.
        - node modules에 있는 Axios가 트랜스파일링 되지 않는다면 문제가 발생할 수 있다.
        - 타깃 환경에서 빌트인으로 Promise가 없으면 에러가 발생한다.
    - 해당 패키지를 포함해서 트랜스파일링울 진행해야 한다.

**이때 필요한 것이 Babel 설정 파일들이다.**

- babel.config.json (Axios 같은 경우)
    - 여러 패키지 디렉토리를 가진 프로젝트에서 하나의 바벨 설정을 적용하고 싶을 때
    - Node_modules도 적용하고 싶을 때
- babelrc.json
    - 프로젝트 내에 서드 파티 라이브러리가 바벨에 의해 트랜스폼되기를 바라지 않는 경우
    - 특정 부분만 적용하고 싶은 경우