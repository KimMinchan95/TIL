# React Native View

## 개요

View는 React Native에서 가장 기본적인 컴포넌트로, 웹의 div와 유사한 역할을 한다. 모든 UI 요소의 컨테이너 역할을 하며, 레이아웃과 스타일링의 기본 단위가 된다.

## View의 특징

### 기본 컨테이너

- 모든 React Native 컴포넌트의 부모 요소 역할
- 웹의 div와 달리 기본적으로 flexbox 레이아웃 사용
- 자식 요소들을 감싸는 컨테이너로 동작

### 스타일링

- StyleSheet API를 통한 스타일 적용
- 웹의 CSS와 유사하지만 플랫폼별 차이 존재
- backgroundColor, border, padding, margin 등 기본 스타일 속성 지원

### 이벤트 속성

- **onPress**: 터치 이벤트 처리
- **onLayout**: 레이아웃 변경 시 호출
- **onTouchStart, onTouchEnd**: 터치 시작/종료 이벤트

## View 사용 시 주의사항

### 성능 고려사항

- 불필요한 중첩 View는 성능 저하 초래
- 복잡한 레이아웃은 FlatList나 SectionList 사용 권장
- 스크롤이 필요한 경우 ScrollView 사용

### 플랫폼 차이

- iOS와 Android에서 일부 스타일 속성 동작 방식 다름
- shadow 속성은 iOS에서만 지원
- elevation 속성은 Android에서만 지원

## View vs 다른 컴포넌트

### View vs ScrollView

- View: 고정 크기 컨테이너
- ScrollView: 스크롤 가능한 컨테이너

### View vs SafeAreaView

- View: 전체 화면 사용
- SafeAreaView: 안전 영역만 사용 (노치, 상태바 등 제외)

## 최적화 팁

### 불필요한 View 제거

- 단순한 스타일링을 위해 View를 추가하는 것 지양
- 조건부 렌더링 시 Fragment 사용 고려

### 레이아웃 최적화

- 복잡한 계산은 useMemo 사용
- 자주 변경되는 스타일은 별도 컴포넌트로 분리

### 메모리 관리

- 큰 리스트는 FlatList 사용
- 이미지나 무거운 컴포넌트는 lazy loading 고려

## 결론

View는 React Native의 기본 빌딩 블록으로, 모든 UI 구성의 시작점이다. 적절한 사용으로 깔끔하고 성능 좋은 레이아웃을 만들 수 있으며, 플랫폼별 특성과 접근성을 고려한 사용이 중요하다.
