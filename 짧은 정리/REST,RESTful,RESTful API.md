# REST,RESTful,RESTful API

## REST
- REST(Representational State Transfer)는 네트워크를 통해 컴퓨터들끼리 통신할 수 있게 해주는 웹 아키텍처 스타일 이다.
- **자원을 URL로 표현하고, 그 자원을 HTTP 메서드(GET, POST, PUT, PATCH, DELETE 등)로 조작하는 방식이 핵심이다.**
    - REST는 웹 서비스 설계를 위한 철학 또는 원칙이라고 할 수 있다.

### 기본 원칙 6가지
1. Client-Server (클라이언트-서버 구조)
    - 클라이언트와 서버는 역할을 분리하고, 서로 독립적으로 개발/운영할 수 있어야 한다.
2. Stateless (무상태)
    - 서버는 요청 간의 상태를 저장하지 않고, 매 요청은 독립적이어야 한다.
3. Cacheable (캐시 처리 가능)
    - 응답은 캐시 가능해야 하며, 캐시 여부를 명확히 지정할 수 있어야 한다.
4. Uniform Interface (인터페이스 일관성)
    - 일관된 URI, 메서드, 표현 방식 등으로 인터페이스가 단순하고 일관돼야 한다.
5. Layered System (계층 구조)
    - 클라이언트는 중간 서버(프록시, 로드밸런서 등)의 존재를 알지 못한 채 요청해야 한다.
6. Code on Demend (optional)
    - 클라이언트는 서버로부터 코드(JS 등)를 다운 받아 실행할 수 있어야 한다.

## RESTful
- **REST의 6가지 제약 조건 중 선택 항목인 6번(Code on Demand)을 제외한 모든 조건을 지킨 설계 상태를 의미한다.**
- "RESTful 하다" = "REST 원칙을 엄격히 지킨 설계다."

## RESTful API
- REST 원칙을 엄격하게 지켜서 만든 API (=RESTful하게 만든 API)
- **자원을 중심**으로 설계하고, **HTTP 메서드와 상태코드**를 활용해 **명확하고 일관된 방식**으로 클라이언트와 통신한다.
    - 이를 통해 API는 **예측 가능하고 일관적인 설계**를 가지며, 유지보수와 확장에 강해진다.


## 추가 설계 가이드
1. 리소스는 복수형 명사로 표현
    - `/users`, `/posts`, `/comments`
    - API는 자원 중심이어야지, 동작 중심이면 안된다.
2. HTTP 메서드는 행위를 표현
    - URL은 "무엇"이고, HTTP 메서드는 "어떻게"
3. 계층적 구조로 리소스 간 관계 표현
    - `/users/:userId/playlists/:playlistId/songs`
    - 자원 간 포함 관계가 있을 때 계층적으로 설계
4. 경로에 파일 확장자, 버전, 동사 사용 X
5. 소문자 + 하이픈(-) 사용, 언더스코어(_) 지양
6. 마지막 슬래시 `/`는 사용하지 않음 (일관성 중요)
    - REST 관점에서는 `/users`와 `/users/`는 다른 리소스로 해석될 수 있음
7. 쿼리 파라미터는 필터링/정렬/페이징 등 비필수 조건에만 사용

## 주요 HTTP 메서드
- GET - 데이터를 조회할 때 사용
    - 서버 리소스 변경 X
    - 읽기 전용
- POST
    - 데이터를 생성할 때 사용
    - 데이터 전달 위치 -> body
- PUT
    - 전체 수정, 해당 리소스를 통채로 덮어쓴다. 없으면 새로 생성한다.
    - 데이터 전달 위치 -> body
- PATCH
    - 부분 수정, 리소스의 일부 속성만 수정할 때
    - 데이터 전달 위치 -> body
- DELETE
    - 데이터를 삭제할 때
    - 데이터 전달 위치 -> 경로

---
자료 : [REST / RESTful / RESTful API](https://velog.io/@chlruddlf73/REST-RESTful-RESTful-API)