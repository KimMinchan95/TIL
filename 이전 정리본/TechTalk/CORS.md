# CORS

[[10분 테코톡] 🌳 나봄의 CORS](https://www.youtube.com/watch?v=-2TgkKYmJt4&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=72&t=13s)

### SOP (Same Origin Policy)

> 다른 출처의 리소스를 사용하는 것에 제한하는 보안 방식
> 
- CSRF와 XSS를 대응해 사용자를 보호한다.

**출처(origin)란?**

- URL의 다음 3가지를 통해 같은 출처인지 다른 출처인지 판단할 수 있다. (3가지가 모두 같아야 한다.)
    - Protocol
    - Host
    - Port
- IE에서는 Port가 달라도 같은 포트로 판단한다.

**문제**

> http://localhost 와 동일 출처인 url은?
> 
1. https://localhost
    - **다른 출처이다.** protocol이 https로 달르다.
2. http://localhost:80
    - **같은 출처이다.** (http 기본 포트가 80)
3. http://127.0.0.1
    - **다른 출처이다.** 127.0.0.1이 localhost가 맞지만 브라우저는 string value를 비교한다. 그래서 브라우저는 다른 출처로 판단한다.
4. http://localhost/api/cors
    - **같은 출처이다.** api와 cors는 추가적으로 붙는 location이다. 그래서 브라우저는 http://localhost 까지만 비교한다.
    

## CORS(Cross-Origin Resource Sharing)

> 교차 출처 리소스 공유(CORS)는 추가 HTTP 헤더를 사용하여, 한 **출처**에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 **브라우저**에 알려주는 체제이다. - MOZILLA
> 

### **CORS 접근제어 시나리오**

- 단순 요청 (Simple Request)
- 프리플라이트 요청 (Preflight Request)
- 인증정보 포함 요청 (Credentialed Request)

### 프리플라이트 요청 (Preflight request)

> Preflight는 CORS spec이 생기기 이전에 만들어진 서버들은 브라우저의 SOP request만 가능하다는 가정하에 만들어졌는데, CORS로 인해 cross-site request가 가능해지면서 이런 서버들은 cross-site request에 대한 보안 메카니즘이 없기 때문에 보안적으로 문제가 생길 수 있어서 이런 서버들을 보호하기 위해 만들어졌다.
Preflight request로 서버가 CORS를 인식하고 핸들할 수 있는지 먼저 확인함으로써 CORS를 인식하지 못하는 서버들을 보호한다.
> 
1. OPTIONS 메서드를 통해 다른 도메인의 리소스에 요청이 가능한 지 확인 작업
2. 요청이 가능하다면 실제 요청 (Actual Request)을 보낸다.
    - 1번에서 거부되면 2번 요청은 보내지 않는다.

**Preflight request**

- Origin : 요청 출처
- Access-Control-Request-Method : 실제 요청의 메서드
- Access-Control-Request-Headers : 실제 요청의 추가 헤더

**Preflight Response**

- Access-Control-Allow-origin : 서버 측 허가 출처
- Access-Control-Allow-Methods : 서버 측 허가 메서드
- Access-Control-Allow-Headers : 서버 측 허가 헤더
- Access-Control-Max-Age : Preflight 응답 캐시 기간
    - Preflight를 보내게 되면 사전요청과, 실제 요청 두 번이 보내진다.
    - 이는 리소스 낭비이므로 브라우저는 캐싱을 해두고 똑같은 요청을 보낼때 이를 확인하고 바로 본 요청을 보낸다.
    - 86400 (86400초 동안 저장)

**Preflight Response가 가져야 하는 특징**

- 응답 코드는 200대여야 한다.
- 응답 바디는 비어있는 것이 좋다.

### 단순 요청 (Simple Request)

- Preflight 요청 없이 바로 요청을 날린다.
- 다음 조건을 모두 만족해야 한다.
    - GET, POST, HEAD 메서드
    - Content-Type
        - application/x-www-form-urlencoded
        - multipart/form-data
        - text
    - 헤더는 Accept, Accept-Language, Content-Language, Content-Type 만 허용된다.

- Server에서 응답 헤더에 Access-Control-Allow-Origin에 해당 사이트가 `*` (와일드카드, 모든 사이트 허용) 이거나 해당 사이트가 들어있을 때

### Credentialed Request

- 인증 관련 헤더를 포함할 때 사용하는 요청이다.
- Client측
    - credentilas : incluede
- Server측
    - Access-Control-Allow-Credentials : true
    - Access-Control-Allow-Origin : *은 안된다. 에러가 발생한다.