# RESTful하게 자원을 명시하고 주고 받는 방법

[[10분 테코톡] 민초의 RESTful](https://www.youtube.com/watch?v=xWA1eTPSzDE&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=107)

## RESTful 등장

> REST + ful : REST의 제약을 준수한
> 

**REST : 웹에서 사용하는 아키텍처**

**초기의 웹**

- 단순함, 읽기만

**진화하는 웹**

- 복잡함
- CRUD (Create, Read, Update, Delete)
    - 서버와 클라이언트의 통신으로 이루어진다.
- 일관된 통신 방식이 없다면 모든 통신 방식을 알아야한다.
    - 일관된 통신 방식의 필요성

**SOAP (Simple Object Access Protocol)등장**

> 최초의 표준 프로토콜
> 
- 복잡성과 오버헤드를 증가시키는 빌트인 룰을 적용
    - 페이지 로드 시간이 길어질 수 있다.
- 어렵고, 느리고, 복잡해서 현재에는 많이 사용되고 있지 않다.

## REST

**Representational State Transfer**

- Roy Fielding
    - 2000년 박사학위 논문에서 제시한 개념
    
- 서버와 클라이언트 간 통신 방식 중 하나
- **자원을 이름으로 구분하여**
- **자원의 상태를 주고 받는다**

## 자원을 이름으로 구분하여

**자원의 표현**

- URI
    - Uniform Resource Identifiers
    - REST에서 자원을 구분하고 처리하기 위해 사용
    - URI를 잘 네이밍할수록 API가 직관적이고 사용하기 쉽다.
    - 예) /books, /customers
    
- Singleton and Collection Resources
    - URI는 singleton이나 collection을 표현
    - /customer (singleton resource)
    - /customers (collection resource)

- Collection and Sub-collection Resources
    - URI는 서브 컬렉션을 포함할 수 있다
    - 특정 고객의 계좌
        - /customers/{customerId}/accounts

### URI 네이밍 규칙

- 일관성이 없으면, URI의 의도 파악이 어렵다.
- 네이밍 규칙을 지키면 공용어 처럼 정할수 있다.

- Use nouns to represent resources
    - 명사를 사용해서 자원을 표현한다.
        - /crews: 크루들의 정보
    - 예외적으로 동사를 허용하는 경우 (controller)
        - 예) /game/play에 접근 시 게임이 시작된다면?
            - 게임의 시작 여부를 컨트롤하는 URI
            - 동사 play로 표현
- Use forward slash(/) to indicate hierarchical relationships
    - 자원 간 계층 관계를 표현하기 위해 슬래시(/)를 사용
        - /crews/frontend
        - /products
- Do not use trailing forward slash(/) in URIs
    - URI 경로 마지막에는 슬래시(/)를 붙이지 않는다.
        - /crews/ (X)
        - /crews (O)
- Use hyphens(-) to improve the readability of URIs
    - 하이픈(-) 기호를 사용하여 URI의 가독성을 향상할 수 있다.
        - /profilemanagement (X)
        - /profileManagement (X)
        - /profile-management (O)
- Do not use underscores(_)
    - URI에는 가급적 밑줄을 사용하지 않는다.
        - /frontend_crews (X)
        - /crews/frontend (O)
    - 일부 브라우저나 화면에서 글꼴에 따라 (_)문자가 가려지거나 숨겨질 수 있다.
- Use lowercase letters in URIs
    - URI에는 소문자를 사용한다.
        - /CREWS (X)
        - /crews (O)
- Do not use file extensions
    - URI에 파일 확장자를 표시하지 않는다.
    - /index.do (X)
- Never use CRUD function names in URIs
    - URI에 CRUD 함수의 이름을 사용하지 않는다.
        - /create/crews (X)
        - /add/crews (X)
        - /read/crews (X)
        - /update/crews (X)
        - /updateCrews (X)
    - CRUD는 HTTP 메서드로 구분한다.
- Use query component to filter URI collection
    - 자원의 필터링을 위해 새로운 API를 만들지 않는다.
    - 필터링을 위해 새로운 API를 만들지 않고 Query string을 이용한다.
        - Query string: 주소?속성=값&속성=값&…
    - Query string은 특정 주소로 접근할 때 페이지에 대한 옵션으로 활용
    - 프론트엔드 크루를 이름, 오름차순으로 보고 싶다면?
        - /crews/frontendAndSortByNameAscending (X)
        - /crews?type=frontend&sort=name,asc (O)

## **자원의 상태를 주고 받는다**

- 자원의 상태를 주고받는 기본적인 방식
    - 클라이언트가 서버에게 HTTP 메서드를 보낸다.
    - 서버는 HTTP 상태코드로 상태를 알려준다.

### HTTP메서드

- **CRUD 메서드의 이름을 URI에 표현하지 않을 수 있다.**
    - 유저 리스트를 얻어오고 싶다면?
        - /users + HTTP 메서드 GET
    - 유저 리스트에 등록하고 싶다면?
        - /users + HTTP 메서드 POST
    - 같은 URI 사용 + 다른 동작

- GET: 자원을 검색할 때 사용
    - GET + /crews: 크루들의 정보를 가져온다.
    - GET + /crews/5: 크루들중 id가 5번인 사람의 정보를 가져온다.
    
- POST: 자원을 생성할 때 사용
    - 보통 body와 함께 이루어진다.
        - POST + /crews
        - body: `{"name": "chan", "type": "frontend"}`
        

| id | name | type |
| --- | --- | --- |
| 1 | chan | frontend |
- PUT: 자원을 업데이트할 때 사용
    - 보내지 않은 정보는 `null` 값으로 업데이트
        - PUT + /crews/1
        - body: `{"type": "backend"}` ← name이 없다.
        

| id | name | type |
| --- | --- | --- |
| 1 | null | backend |

- PATCH: 자원을 업데이트할 때 사용
    - PUT과 다르게 보내지 않은 데이터는 기존 데이터를 유지한다.
        - PATCH + /crews/1
        - body: `{”type”:”backend”}` ← name이 없다.
        

| id | name | type |
| --- | --- | --- |
| 1 | chan | backend |

- DELETE: 자원을 삭제할 때 사용
    - DELETE + /crews/1

| id | name | type |
| --- | --- | --- |
|  |  |  |

### HTTP 상태코드

- 1xx: 조건부 응답
- 2xx: 성공
- 3xx: 리다이렉션
- 4xx: 클라이언트 오류
- 5xx: 서버오류