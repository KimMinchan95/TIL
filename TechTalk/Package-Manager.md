# Package Manager

[[10분 테코톡] 비녀의 Package Manager](https://www.youtube.com/watch?v=Ds7EjE8Rhjs&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=115&t=3s)

### JS의 import

```jsx
import React from 'react';
```

- 지금은 `import`가 익숙하지만 JS 초창기에는 `module`이라는 개념이 존재하지 않았다.
    - 브라우저에서 사용하는 보조도구로만 사용되어서 코드가 짧았다.
    - 그래서 코드를 분리할 필요가 없었다.

### Package란?

- module들을 뭉쳐놓은 덩어리 하나
    - `require`이라는 Node.js의 도구를 이용해서 불러올 수 있는 것을 module이라고 한다.
    - `Package.json`을 가지고 있는 moudle혹은 module의 뭉치를 Package라고 한다.

### NPM의 등장

**4 가지 기본 방식**

- 여러 버전의 동일한 패키지를 한 프로젝트에서 사용할 수 있게 하자
- 설치 방식을 통일하자
- 패키지 관련 정보가 들어있는 메타 데이터를 간소화 하자
- 누구나 배포할 수 있도록 하자

npm을 설치하면 기본적으로 4가지 파일이 설치된다.

- node_modules/
    - 설치를 하고자하는 Package들이 담겨있다.
- .npmrc
- package-lock.json
- package.json
    - Package들을 다룰 수 있는 CLI 명령어를 제공하고, 커스텀할 수 있다.
    - 메타 데이터를 제공한다.

### Yarn의 등장 (Yet Another Resource Negotiator)

- Facebook과 Google 개발자들이 2016년에 발표했다.
- NPM에서 개선하고자 하는 **4가지가** 있었다.

**NPM에서 4가지 개선점**

- 병렬화를 통한 속도 개선
    - NPM이 병렬화를 하지 않아서 매우 느린 다운로드 속도를 가지고 있었다.
- 자동화 된 lock 생성
    - NPM이 현재는 lock파일을 제공한다. (과거에는 CLI에 직접 입력해서 생성 했다.)
    - 자동화된 lock 파일 생성을 처음으로 도입했다.
- 의존성 트리 알고리즘 변경
    - 원래 NPM에서는 Package를 다운로드 받는 순서에 따라서 의존성이 조금식 변경될 수 있었다.
- 캐시 사용
    - Yarn은 캐시파일을 가지고 있어서 다운로드 받은 것을 기억할 수 있다.
    - 이미 다운로드 받은 Package들의 정보를 저장해서 더이상 다운 받지 않도록하여 속도를 개선하였다.

### NPM 계열의 한계

**비 효율적 의존성 검색**

- 부모 디렉토리에서 root 디렉토리까지 순차적으로 Node modules에서 Package를 찾아나간다.
- 중간에 잘못된 의존성을 가지고 있는 Node modules나 버전이 다른 의존성을 가지고 있어도 검색해서 사용한다.

**유령 의존성(호이스팅)**

- 평탄화를 하면서 중복되는 module을 끌어올린다.
- B라는 module이 A라는 module에 의존성을 가지고 있어도, 호이스팅되어 직접 사용할 수 있는 것처럼 구조가 되어버린다.
    - package.json에 명시가 되어있지 않은 문제
    - A를 삭제하면 B도 같이 삭제되어 의존성 관리에 문제가 된다.

**너무 무거운 node_modules**

- node_modules가 너무 무거워서 Yarn과 NPM은 node_modules가 다운 받아졌는지만 검사하고 잘 다운 받아졌는지는 검사하지 않는다.
    - 다운을 받았는데, 사용이 안되다가 다시 install 했을때 정상작동 하는 것이 이것때문에 발생한다.

### Pnpm

**NPM에서 명확하게 1가지만 변경했다.**

> NPM에 구조를 그대로 사용하지만 Flat(평탄화)되지 않은 node_modules를 사용한다.
> 
- Pnpm이 덜 효율적으로 보이지만 극복하기 위해 다른 알고리즘을 사용한다.
    - NPM과 Yarn으로 컴퓨터에 100개의 프로젝트를 다운받으면 node_modules도 100개가 다운받아 진다.
    - Pnpm을 설치하게 되면 root 디렉토리에 .pnpm store라는 registry를 자체적으로 생성하고, 단 한 번만 저장한다.
    - 중복과 디스크의 낭비를 막을 수 있다.
    - 실제 프로젝트의 node_modules에는 이를 연결해주는 **Symbolic link**만 연결된다.

### Yarn v2 (Yarn berry)

- `yarn set version berry`라는 명령어를 통해서 사용할 수 있다.
- node_modules와 Node에 내장된 의존성 관리 없이 의존성을 관리하고 싶어서 만들어졌다.
    - 디렉토리에 node_modules가 존재하지 않는다.
    - 대신 .pnp.cjs 라는 것이 생긴다.
    

**Cache 라는 폴더에 zip file이 저장된다. (Package가 zip file로 저장된다.)**

이런 방식은 3가지의 이점을 가지게 된다.

- Zero Install
    - Yarn install이 필요하지 않다.
- 오프라인시에 캐싱기능으로 사용가능하다.
- ci 배포시에 clone만 하면 의존성이 다 있기 때문에 배포속도를 줄일 수 있다.

**Plug’n’Play**

- pnp.cjs 파일을 보면 알 수 있다.
    - 일종의 지도이다.
    - 어떤 패키지인지, 어떤 버전인지, 어느 위치에 있는지, 어떤 의존을 참조하는지 명시되어 있다.

### 비교

Size : Yarn berry < Pnpm < Yarn < npm

File : Yarn berry < Yarn < npm < Pnpm 

**속도**

- Yarn berry가 압도적인 속도를 보여준다.
    - 나머지는 비슷하지만 pnpm이 근소하게 2등을 차지한다.

### 결론

- 작은 프로젝트를 진행하면서 고민하기 싫으면 NPM 사용
- Yarn 사용은 장기적인 프로젝트에 적합하지 않음 유지보수 수순을 밟고 있다.