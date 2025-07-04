# WebP란?

## 개요

WebP는 Google에서 개발한 현대적인 이미지 포맷으로, 웹에서 사용하기 위해 최적화되었다.

## 주요 특징

### 1. 압축 효율성

- **무손실 압축**: PNG와 유사한 품질 유지
- **손실 압축**: JPEG보다 25-35% 더 작은 파일 크기
- **투명도 지원**: PNG처럼 투명 배경 지원

### 2. 파일 크기 비교

- JPEG 대비 25-35% 작음
- PNG 대비 26% 작음
- GIF 대비 훨씬 효율적

### 3. 지원 기능

- 정적 이미지 (JPG, PNG 대체)
- 애니메이션 (GIF 대체)
- 투명도 (알파 채널)
- 메타데이터 (EXIF, XMP)

## 브라우저 지원

- Chrome, Firefox, Safari, Edge (모던 브라우저 대부분 지원)
- IE는 지원하지 않는다

## 사용 방법

### HTML에서

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="이미지 설명" />
</picture>
```

### CSS에서

```css
.background {
  background-image: url("image.webp");
}
```

## Next.js에서 최적화

```jsx
import Image from "next/image";

<Image src="/image.webp" alt="설명" width={500} height={300} priority />;
```

## 장점

- 빠른 웹사이트 로딩
- 대역폭 절약
- SEO 개선
- 사용자 경험 향상

## 단점

- 일부 구형 브라우저 미지원
- 편집 도구 지원 제한적
- 변환 과정 필요
