# WebP란?

## 개요

WebP는 Google이 개발한 현대적인 이미지 포맷으로, 기존의 JPEG, PNG, GIF보다 더 효율적인 압축을 제공하기 위해 만들어졌다. 웹에서 사용하기 위해 최적화되었다.

## 주요 특징

### 1. 압축 효율성

- **손실 압축 & 무손실 압축 지원**: JPEG처럼 손실 압축도 되고, PNG처럼 무손실 압축도 가능
- **투명도(알파 채널) 지원**: PNG처럼 투명한 배경을 표현할 수 있다
- **애니메이션 지원**: GIF처럼 움직이는 이미지를 만들 수 있다
- **파일 크기 감소**: 같은 품질 기준으로 JPEG보다 최대 25~34% 더 작다
- **빠른 로딩**: 웹에서 이미지 로딩 속도를 빠르게 할 수 있다

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
- Safari 13 이상에서 지원
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

## 변환 도구

### 온라인 도구

- Squoosh (Google 제공)

### CLI 도구

- cwebp: Google에서 제공하는 CLI 도구

```bash
cwebp input.png -o output.webp
```

### 라이브러리

- Node.js: sharp

## 주의사항

- 일부 오래된 브라우저나 앱에서는 지원이 되지 않을 수 있다
- 이미지 호환성을 넓게 가져가야 하는 경우, WebP 외에도 fallback 이미지(JPEG, PNG)를 함께 제공해야 한다
