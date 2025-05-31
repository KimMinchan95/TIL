# npm ci

## npm install 과 npm ci

### npm install
- `package.json` 과 `package-lock.json`을 기반으로 **의존성을 설치 한다.
- `package-lock.json`이 변경될 수도 있다.
- 로컬 `node_modules` 디렉토리가 없으면 새로 설치하고, 있으면 비교 후 필요한 패키지만 추가로 설치한다.
- **개발 환경** 에서 주로 사용한다.

### npm ci (Clean Install)
- CI (지속적 통합) 환경을 위한 명령어다.
- 반드시 `package-lock.json`이 존재해야한다.
- `node_modules`폴더를 완전히 삭제하고, `package-lock.json`에 명시된 버전 그대로 설치한다.
- 더 빠르고 일관성 있는 설치를 제공한다.
- `package.json`과 `package-lock.json`이 일치하지 않으면 에러를 발생 시킨다.
- **배포 전 빌드, 테스트 자동화 환경(CI/CD)** 에서 주로 사용된다.

### 주요 차이점

|항목|`npm install`|`npm ci`|
|:---|:---:|:---:|
|속도|느릴 수 있음|더 빠름|
|`node_modlues`|그대로 두거나 일부 변경|항상 삭제 후 재설치|
|`package-lock.json`|변경될 수 있음|변경 안됨|
|일관성|낮음|높음|
|사용 용도|개발 중 패키지 추가|자동화된 테스트, 빌드 환경 등|
|오류 처리|유연하게 처리|엄격하게 오류 발생|