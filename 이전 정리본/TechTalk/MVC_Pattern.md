# MVC Pattern

[[10분 테코톡] 🐝범블비의 MVC Pattern](https://www.youtube.com/watch?v=es1ckjHOzTI&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=102)

## 역사

MVC의 탄생(1979)

- 데스크톱 어플리케이션 (웹 어플리케이션이 아닌)
- 사람 - 컴퓨터 간의 간극 해결을 위해 나옴
    - 도메인의 재사용
- GUI 설계
    - Input = 키보드 마우스

Small-Talk80(1988)

- 모델과 뷰의 분리
- 최근 MVC의 정의와 비슷
- Model과 View의 직접적인 결합 (우리가 아닌 패턴과 다른점)

JSP

- HTML + JAVA
- 동적 웹페이지를 생성하는 언어

JSP Model 1

- 로직 + 출력 코드가 한 페이지에 삽입
- 쉬운 코딩
- 어려운 유지보수

JSP Model2(1998)

- MVC 패턴을 웹에 적용
- 비지니스/출력 로직의 분리
- 유지보수가 용이
- 뷰, 로직에 대한 분업이 가능

Cocoa MVC(Apple MVC)

- Model과 View의 완전한 분리
- 현재 개발자들에게 가장 친숙

## 흐름

- 클라이언트는 필요한 기능을 컨트롤러에 요청
- 컨트롤러는 알맞은 모델에게 비즈니스 로직 수행을 맡김
- 알맞은 뷰 선택
- 결과 화면 출력

## MVC 컴포넌트

### Model

- 데이터와 행동을 갖는 객체
- 비즈니스 로직 수행
    - 상태 변화 처리
    - 상태 정보 반환

### View

- 데이터의 시각화
- 모델이 처리한 데이터를 받아서 사용
- 데이터, 로직 X

### Controller

- 사용자의 요청을 해석하여 처리하고 결과를 반환
- 모델과 뷰를 느슨하게 연결
- 데이터의 흐름 제어 (MVC 패턴 중 유일하게 다른 컴포넌트의 존재를 알고 있음)

### WHY?

- 구성요소들의 재사용
- 확장성 증가
- 중복 코딩 제거
- 각 요소들에 집중

### 5 - layer

**MVC 패턴의 단점**

- 비대한 컨트롤러
- 컨트롤러의 중복 로직
- DB

**이를 극복하기 위해 현대에는 5 가지 계층으로 나눈다.**

![5Layer](https://user-images.githubusercontent.com/83770790/181011314-9278668f-4aa8-4e6e-8883-750a2738110d.png)

- Presentation Layer - View와 동일
- Control Layer - Controller와 동일
- Service Logic
    - 클래스 간의 관계 관리
    - 상태 저장
    - 트랜잭션
    - Control - Persistance 계층의 연결
- Domain Object
    - 데이터와 행위를 갖는 객체 (Mdoel과 동일
    - 핵심 비즈니스 로직
    - 주요 검증
    - Persistance Layer에 맵핑
- Persistance Layer
    - 데이터 처리(CRUD)
    - DAO 패턴, ORM
- Domain Model Layer
    - 각 계층 사이에서 전달되는 객체
    - DTO 패턴
    - 대부분 도메인 모델을 DTO로 사용
    

## 유효성 검증

### View

- 간단한 검증
    - 비어있는 값
    - 적절하지 않은 타입(정수 등등)

### Controller

- 파라미터 존재 유무 검증
    - @PathVariable
    - @RequestBody

### Model

- 데이터 검증
    - @Valid
- 로직에 대한 검증

## MVC의 대안

- MVC - 컨트롤러와 뷰의 강한 결함
- MVP - Presenter를 사용하여 뷰의 인터페이스와 결함
- MVVM - View가 ViewModel을 구독
