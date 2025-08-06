# CORS (Cross-Origin Resource Sharing)

## 개요

CORS는 웹 브라우저에서 실행되는 JavaScript가 다른 출처(Origin)의 리소스에 접근할 때 적용되는 보안 정책이다. 동일 출처 정책(Same-Origin Policy)을 완화하여 안전한 크로스 오리진 요청을 가능하게 한다.

## CORS의 기본 개념

### 출처(Origin)란?

- 프로토콜 + 도메인 + 포트의 조합
- 예: `https://example.com:443`
- 동일 출처: 프로토콜, 도메인, 포트가 모두 동일

### 동일 출처 정책(Same-Origin Policy)

- 브라우저의 기본 보안 정책
- 다른 출처의 리소스 접근을 차단
- XSS, CSRF 등의 공격 방지

## CORS의 동작 방식

### 단순 요청 (Simple Request)

- GET, POST, HEAD 메서드
- 기본 헤더만 사용 (Accept, Accept-Language, Content-Language, Content-Type 등)
- 커스텀 헤더 없음
- Content-Type이 다음 중 하나: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`
- 사전 요청(Preflight) 없이 바로 요청

### 사전 요청 (Preflight Request)

- 복잡한 요청 전에 OPTIONS 메서드로 사전 검사
- 서버의 허용 여부를 먼저 확인
- 실제 요청 전에 브라우저가 자동으로 수행

### 인증 요청 (Credentialed Request)

- 쿠키, 인증 헤더 포함 요청
- `withCredentials: true` 설정 필요
- 서버에서 `Access-Control-Allow-Credentials: true` 설정 필요

## CORS 헤더

### 요청 헤더

- **Origin**: 요청하는 출처
- **Access-Control-Request-Method**: 실제 요청 메서드
- **Access-Control-Request-Headers**: 실제 요청 헤더

### 응답 헤더

- **Access-Control-Allow-Origin**: 허용할 출처
- **Access-Control-Allow-Methods**: 허용할 HTTP 메서드
- **Access-Control-Allow-Headers**: 허용할 헤더
- **Access-Control-Allow-Credentials**: 인증 정보 포함 허용
- **Access-Control-Max-Age**: 사전 요청 캐시 시간

## CORS 설정 방법

### 서버 측 설정

- 모든 출처 허용: `Access-Control-Allow-Origin: *`
- 특정 출처 허용: `Access-Control-Allow-Origin: https://example.com`
- 동적 설정: 요청의 Origin 헤더를 확인하여 응답

### 클라이언트 측 설정

- fetch API의 credentials 옵션
- XMLHttpRequest의 withCredentials 속성
- axios의 withCredentials 설정

## CORS 오류 해결

### 일반적인 오류

- **No 'Access-Control-Allow-Origin' header**: 서버에서 CORS 헤더 미설정
- **Method not allowed**: 허용되지 않은 HTTP 메서드 사용
- **Header not allowed**: 허용되지 않은 헤더 사용

### 해결 방법

- 서버에서 적절한 CORS 헤더 설정
- 프록시 서버 사용
- 브라우저 확장 프로그램 사용 (개발 시에만)

## 보안 고려사항

### CORS의 보안 역할

- 악의적인 사이트의 리소스 접근 차단
- 사용자 정보 보호
- 동일 출처 정책을 통한 기본적인 보안 강화

### 주의사항

- `Access-Control-Allow-Origin: *` 사용 시 주의
- 민감한 정보는 적절한 인증 필요
- 서버 측에서도 추가 검증 필요

## 개발 환경에서의 CORS

### 로컬 개발

- 개발 서버의 CORS 설정
- 프록시 설정을 통한 우회
- 브라우저 확장 프로그램 활용

### 테스트 환경

- 다양한 출처에서의 테스트
- 인증이 포함된 요청 테스트
- 에러 상황 시뮬레이션

## 웹 보안과 CORS

### XSS (Cross-Site Scripting)

- **정의**: 악성 스크립트를 웹 페이지에 삽입하여 사용자 정보를 탈취하는 공격
- **CORS와의 관계**: CORS는 XSS 공격을 직접적으로 방지하지는 않지만, 다른 출처의 리소스 접근을 제한하여 공격 범위를 줄임
- **예시**: 사용자 입력을 그대로 출력하는 게시판에서 악성 스크립트 실행
- **방어 방법**: 입력값 검증, 출력값 이스케이프, CSP(Content Security Policy) 설정

### CSRF (Cross-Site Request Forgery)

- **정의**: 사용자가 의도하지 않은 요청을 다른 사이트에서 대신 보내는 공격
- **CORS와의 관계**: CORS는 CSRF 공격을 방지하지 않음. CSRF는 같은 출처에서도 발생 가능하며, CORS는 다른 출처의 리소스 접근만 제한
- **예시**: 로그인된 사용자가 악성 사이트 방문 시 자동으로 계정 정보 변경 요청 발생
- **방어 방법**: CSRF 토큰 사용, SameSite 쿠키 설정, Referer 헤더 검증

## 결론

CORS는 웹 보안의 중요한 요소로, 안전한 크로스 오리진 통신을 가능하게 한다. 적절한 설정과 이해를 통해 안전하고 효율적인 웹 애플리케이션을 구축할 수 있다.
