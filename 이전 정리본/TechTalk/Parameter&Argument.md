# Parameter&Argument

[[10분 테코톡] 포키의 Parameter와 Argument](https://www.youtube.com/watch?v=fW1WGmj10rA&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=110&t=5s)

## Parameter와 Argument의 정의

### **Parameter (매개변수)**

> 함수 등 서브루틴의 input으로 제공되는 여러 데이터 중 하나를 가리키기 위해 사용되는 **변수의 한 종류**
> 
- 서브루틴 : 하나 이상의 장소에서 필요할 때마다 반복해서 사용할 수 있는 부분적 프로그램

- 여러 데이터 중 하나를 가리킨다.
    - 함수 내부에서 각 값이 어떻게 사용되어야 할지 명확하게 해준다.
    - 해당 값이 함수 내에서 어떤 **역할**을 할 지 정의

### Argument (전달인자)

**일반적인 정의 -** 논거

- 주장의 타당성이나 정당성을 뒷받침하는 **근거**

**수학에서의 정의 -** 함수의 인수

- 함수의 결과를 얻기 위해 제공되어야만 하는 **값**

**프로그래밍에서의 정의 -** 전달인자

- 프로그램, 서브루틴 또는 함수 간 전달되는 **값**

### 정리

- Parameter: **역할**에 대한 정의를 위해 선언하는 **변수**
    - 함수와 메서드 **선언부**에서 정의한 **변수**
- Argument: 연산의 **근거**를 제공하기 위해 전달되는 **값**
    - 함수와 메서드 **호출부**에서 전달하는 **값**

예시)

```jsx
const divide = (dividend, divisor) => {
	return dividend / divisor;
}

divide(4, 2) // 2
```

`dividend`와 `divisor`는 **Parameter**

 `4`와 `2`는 **Argument**