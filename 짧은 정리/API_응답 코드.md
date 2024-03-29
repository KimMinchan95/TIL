# HTTP 응답 코드
>HTTP 통신 시, 클라이언트(웹 브라우저가 서버에 어떠한 요청(request)를 하면 서버는 응답(response)를 보내준다. 
**서버에서 클라이언트가 보낸 요청이 어떻게 되었는지 알려주는 것이 응답 코드 이다.**

**현재 [IANA](https://ko.wikipedia.org/wiki/IANA)가 공식 [HHTP 상태 코드 레지스트리](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)를 관리하고 있다.**

- 모든 HTTP 응답 코드는 5개의 클래스(분류)로 구분된다. 상태 코드의 첫 번째 숫자는 응답의 클래스를 정의 한다.
- 첫 자리에 대한 5가지 값들은 다음과 같다.
    - 1xx (정보): 요청을 받았으며 프로세스를 계속한다
    - 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다
    - 3xx (리다이렉션): 요청 완료를 위해 추가 작업 조치가 필요하다
    - 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다
    - 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패했다

---
## 자주 사용하는 API 상태 코드
> `200 OK`는 GET, PUT 혹은 POST 요청이 성공했음을 표현합니다.
> 

> `201 Created`는 새로운 인스턴스가 생성되었을 때 보냅니다. POST 메소드를 이용해 새로운 인스턴스를 생성하면 201 상태 코드를 반환합니다.
> 

> `304 Not Modified` 응답은 수신자가 캐시 데이터를 가지고 있을 때 정보 교환을 최소화하기 위해서 사용됩니다.
> 

> `400 Bad Request` 응답은 요청이 처리되지 않았을 때, 서버가 클라이언트가 요청하는 게 무엇인지 알 수 없을 때 사용합니다.
> 

> `401 Unauthorized`는 요청에 유효한 자격증명이 없을 때, 필요한 자격증명으로 다시 요청해야하는 경우 사용합니다.
> 

> `403 Forbidden`는 서버가 요청을 이해했으나, 승인은 거절한다는 의미입니다.
> 

> `404 Not Found`는 요청한 리소스를 찾을 수 없음을 나타냅니다.
> 

> `500 Internal Server Error`는 요청이 유효하나, 서버가 예상치 못한 상황으로 인해 요청을 실행하지 못했음을 나타냅니다.
>

---
## 참고 자료
[HTTP 상태 코드 - 위키 백과](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)
[HTTP 응답 코드 - bellah](https://hees-dev.tistory.com/44)