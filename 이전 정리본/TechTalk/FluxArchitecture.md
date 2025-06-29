# Flux Architecture

[[10분 테코톡] 우디의 Flux Architecture](https://www.youtube.com/watch?v=wQFBgKl1PYw&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=100&t=7s)

## Flux, 왜 필요할까?

> 단방향 데이터 흐름을 통해 보다 예측가능하게 상태를 관리할 수 있는 클라이언트 사이드 웹 어플리케이션 아키텍처
> 

**2014년에 페이스북에서는 MVC패턴을 사용하고 있었다.**

- MVC패턴은 애플리케이션을 Model, Controller, View 세 부분으로 나눠서 유연성과 재사용성을 증가 시킨다.
- 페이스북에서 클라이언트 사이드에서 MVC패턴은 Model과 View가 서로를 직접 업데이트하는 양방향 데이터 바인딩을 사용한다.
    - 페이스북에서는 이 양방향 애플리케이션이 복잡성을 만들어서 확장성을 저해한다고 생각했다.
- 이 양방향 데이터 바인딩을 해결하기 위해 데이터가 단 방향으로  흐르는 디자인 패턴을 만들었다.
- 이것이 바로 **Flux Architecture**다.

![Flux Architecture](https://user-images.githubusercontent.com/83770790/179978720-7dcbca88-d0c1-4bdf-8bde-6a9ff4b056d4.png)


## Flux의 핵심 컨셉과 개념들

- **Action** - 상태 변경 요청을 담은 JS 객체
    - 액션 이름 (type)
    - 데이터 (payload)
    - Action 생성자 (Action을 쉽게 만들어주는 도우미 함수)
    
- **Dispatcher** - 모든 데이터 변경 요청이 경유하는 중앙 허브
    - View로부터 Action을 받아 모든 Store들에게 전송
    - 내부에 상태 변경 로직이 존재하지 않음
    - Store 간 의존성 관리 (Store A의 상태 변경 순서를 Store B 다음으로 미룰 수 있음)
    
- **Store** - 애플리케이션 상태 및 로직 컨테이너
    - Dispatcher에서 전달된 Action을 통해서만 상태 변경
    - 상태가 변경되면 View에게 통지
    
- **View** - 상태에 따라 화면을 출력하는 로봇
    - Controller-View (React)
        - Store가 통지하는 상태 변경을 수신, 받은 상태에 따라 View를 새로 렌더링
    - Dispatcher에게 Action 전달

## 장점과 한계점들

### 장점

- 엄격한 단방향 데이터 흐름을 통해 애플리케이션을 단순하게 유지하고, 한상 최신의 상태를 View를 통해 보여줄 수 있다.
- 데이터 흐름의 구조화 - 각각의 액션을 따라가면 어떤 변경이 발생하는지 알 수 있다. 이를 통해 유지 보수성이 증가하고, 새로운 기능 확장에 어려움이 줄어든다.
- 유닛 테스트가 쉬워진다. - Dispather는 액션을 받아 상태를 변경하는 순수함수이다. 외부의 상태에 영향을 받지 않아서 격리된 환경에서 쉽게 테스트할 수 있다.

### 한계점

- 높은 학습 곡선 - 상대적으로 많은 코드가 필요해서 러닝 코브를 높이고, 개발시 불필요한 프로그래밍 오버헤드를 발생할 수 있다.

---

### 용어

- 아키텍처 : 소프트웨어 구조(software architecture)는 소프트웨어의 구성요소들 사이에서 유기적 관계를 표현하고 소프트웨어의 설계와 업그레이드를 통제하는 지침과 원칙이다.
- 오버헤드 : 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간, 메모리 등을 말한다.
