# Flex vs Grid

## 기본 개념

### Flexbox

- **1차원 레이아웃**: 행(row) 또는 열(column) 중 하나의 방향으로만 배치
- **주축(Main Axis)과 교차축(Cross Axis)** 개념
- **컨텐츠 기반**: 아이템의 크기에 따라 유연하게 조정

### Grid

- **2차원 레이아웃**: 행과 열을 동시에 제어
- **명시적 그리드**: 미리 정의된 격자 시스템
- **레이아웃 기반**: 컨테이너가 전체 레이아웃을 결정

## 언제 사용할까?

### Flexbox 사용 시기

- 네비게이션 바
- 카드 목록 (한 줄에 여러 개) - `flex-wrap`
- 폼 요소 정렬
- 버튼 그룹

### Grid 사용 시기

```css
/* ✅ Grid가 적합한 경우 */

/* 1. 전체 페이지 레이아웃 */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* 2. 갤러리/갤러리 그리드 */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* 3. 대시보드 위젯 */
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 1rem;
}

/* 4. 복잡한 폼 레이아웃 */
.complex-form {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
}
```

## 실무에서의 선택 기준

### Flexbox 선택

- **단순한 정렬**: 버튼, 아이콘, 텍스트 정렬
- **반응형 네비게이션**: 모바일 햄버거 메뉴
- **카드 레이아웃**: 유연한 크기의 카드들
- **폼 요소**: 라벨과 입력 필드 정렬

### Grid 선택

- **전체 페이지 구조**: 헤더, 사이드바, 메인, 푸터
- **복잡한 레이아웃**: 대시보드, 갤러리
- **정확한 위치 지정**: 특정 셀에 요소 배치
- **반응형 그리드**: 다양한 화면 크기 대응

## 반응형 처리

### Flexbox 반응형

```css
/* 모바일: 세로 배치 */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 데스크톱: 가로 배치 */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

### Grid 반응형

```css
/* 자동 반응형 그리드 */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* 미디어 쿼리로 그리드 변경 */
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .dashboard {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 성능 고려사항

### Flexbox

- **장점**: 간단한 레이아웃에서 빠름
- **단점**: 복잡한 중첩 시 성능 저하 가능

### Grid

- **장점**: 복잡한 레이아웃에서도 안정적
- **단점**: 초기 설정이 복잡할 수 있음

## 브라우저 지원

### Flexbox

- **모던 브라우저**: 완전 지원
- **IE10+**: 부분 지원 (prefix 필요)

### Grid

- **모던 브라우저**: 완전 지원
- **IE11**: 부분 지원 (구버전 문법)
- **IE10 이하**: 미지원

## 둘 다 사용한는 시기

- Grid로 전체 구조 잡고
- Flexbox로 세부 요소 정렬
- 각각의 장점을 조합해서 사용
