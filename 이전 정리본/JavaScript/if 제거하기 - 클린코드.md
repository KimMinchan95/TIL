# if 제거하기 - 클린코드

[if만 제거했을뿐인데.. 클린코드라니](https://www.youtube.com/watch?v=toUlXhTZZ8w&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=140)

## if 문 분기 변경

- if문의 분기처리를 다르게 보면 key-value로 된 쌍으로 볼 수 있다.

```jsx
function executePayment(paymentType) {
	if(paymentType === "KAKAO_PAYMENT") {
		return "카카오 결제 처리"
	} else if(paymentType === "NAVER_PAYMENT") {
		return "네이버 결제 처리"
	} else if(paymentType === "COUPANG_PAYMENT") {
		return "쿠팡 결제 처리"
	} else if(paymentType === "PAYCO_PAYMENT") {
		return "페이코 결제 처리"
	} else if(paymentType === "APPLE_PAYMENT") {
		return "애플 결제 처리"
	}
}
```

- 이 분기 처리를 object의 key-value로 옮겨 놓으면 다음과 같이 된다.

```jsx
const paymentMap = {
	"KAKAO_PAYMENT": "카카오 결제 처리",
	"NAVER_PAYMENT": "네이버 결제 처리",
	"COUPANG_PAYMENT": "쿠팡 결제 처리",
	"PAYCO_PAYMENT": "페이코 결제 처리",
	"APPLE_PAYMENT": "애플 결제 처리",
}

// business logic
function excutePayment(paymentType) {
	return paymentMap[paymentType];
}
```

- 이와 같이 변경하면 매핑 관계도 확실하게 보이고, 확장성이 좋아진다.
- 비즈니스 로직이 매우 간단해진다.
    - 비즈니스 로직(Business logic): **컴퓨터 프로그램에서 실세계의 규칙에 따라 데이터를 생성, 표시, 저장, 변경하는 부분**을 말한다.

### 함수가 있는 if문 분기처리

- if문 안에 함수로 된 서브 루틴들을 호출해야 할 때

```jsx
// 더미 함수들
function payOnKakako() {
	// 카카오 결제 로직
};
function payOnCoupang() {
	// 쿠팡 결제 로직
};
function payOnPayco() {
	// 페이코 결제 로직
}
function payOnApple() {
	// 애플 결제 로직
}

function executePayment(paymentType) {
	if(paymentType === "KAKAO_PAYMENT") {
		payOnKakao();
	} else if(paymentType === "COUPANG_PAYMENT") {
		sendLog();
		payOnCoupang();
	} else if(paymentType === "PAYCO_PAYMENT") {
		sendLog();
		payOnPayco();
	} else if(paymentType === "APPLE_PAYMENT") {
		sendLog();
		payOnApple();
	}
}
```

- 함수 분기처리도 Object로 할 수 있다.

```jsx
// 더미 함수들
function payOnKakako() {
	// 카카오 결제 로직
};
function payOnCoupang() {
	// 쿠팡 결제 로직
};
function payOnPayco() {
	// 페이코 결제 로직
}
function payOnApple() {
	// 애플 결제 로직
}

const paymentMap = {
	KAKAO_PAYMENT() {
		payOnKakao();
	},
	COUPANG_PAYMENT() {
		sendLog();
		payOnCoupang();
	},
	PAYCO_PAYMENT() {
		sendLog();
		payOnPayco();
	},
	APPLE_PAYMENT() {
		sendLog();
		payOnApple();
	}
}

// business logic
function executePayment(paymentType) {
	// paymentMap 에서 함수를 호출후 실행한다.
	paymentMap[paymentType]();
}
```