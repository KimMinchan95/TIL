# MVC (Model–View–Controller)

## 개요

- 유지보수성과 관심사 분리를 위한 아키텍처 패턴
- 사용자 입력 처리, 화면 표시, 도메인/데이터 로직을 역할별로 분리

## 구성 요소

- **Model**: 도메인 규칙과 데이터 접근. UI/프레임워크에 독립.
- **View**: 화면 표현. 비즈니스 로직 없음(표현과 포맷팅에 집중).
- **Controller**: 입력 해석과 흐름 제어. Model을 호출해 결과를 얻고 View가 쓸 데이터로 가공.

## 동작 흐름 (웹 예시)

1. 사용자가 검색 요청을 보냄
2. Controller가 파라미터 검증 → Model에 조회 요청
3. Model이 결과 반환
4. Controller가 ViewModel/DTO로 가공 후 View에 전달
5. View가 데이터를 렌더링

## 의존성 원칙

- **Model →** 아무것도 모름(Controller/View에 의존 금지)
- **View →** Model의 데이터 구조 또는 ViewModel에만 의존
  - Controller의 API를 직접 호출하지 않음
  - 전달받은 데이터만 표시 (데이터 가공 최소화)
- **Controller →** Model과 View 모두 사용 가능
  - 비즈니스 규칙은 Model로 위임(Controller 비대화 방지)
- **데이터 전달 경로**: Model ↔ Controller → View
  - View가 Model을 직접 호출하지 않음(웹 MVC 기준)

## 실전 팁

- Model을 순수한 도메인/서비스로 분리해 테스트 용이성 확보
- View에는 조건부 렌더링/포맷팅만 남기고, 데이터 가공은 Controller/Presenter에서 수행
- 입력 검증은 Controller에서 1차(형식), Model에서 2차(도메인 규칙)
- Controller는 얇게(thin): 트랜잭션, 에러 매핑, 흐름 제어 중심

## 자주 하는 오해

- “View가 Model을 직접 구독해야 한다”: 전통 GUI MVC에선 가능하나 웹 MVC에선 보통 Controller가 중개
- “Controller에 비즈니스 로직을 넣어도 된다”: 규칙은 Model로 이동해 변경 영향 범위를 축소

## 요약

- **목적**: 관심사 분리로 변경 비용 감소
- **경계**: Model(규칙/데이터) — Controller(입력/흐름) — View(표현)
- **규칙**: View는 표시, Controller는 조정, Model은 결정
