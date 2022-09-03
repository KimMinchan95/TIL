# Caching

[[10분 테코톡] 🏖 파피의 Caching(캐싱)](https://www.youtube.com/watch?v=JBFT4KyEvoY&list=PLkfxusmKmLsMS8X3GACy77sAPpPYf8j2P&index=34&t=269s)

## Intro

- 오늘날 캐싱은 하드웨어 수준에서 그치는 게 아니라
- 운영체제, CDN, DNS 등의 네트워킹 계층, 그리고 웹 애플리케이션 및 데이터베이스를 비롯한 다양한 기술 계층에 걸쳐 적용되고 활용되고 있다.
- **이 주제에서는 캐시의 대표격인 캐시 메모리를 위주로 캐싱을 다룬다.**

## Cache란

> Caching ⇒ Cache + ing : 캐시를 사용하는 것을 캐싱이라고 한다.
> 
- Cache의 어원
    - Cache는 프랑스어롤 “숨기다”라는 뜻을 가진 단어인 “Cacher”에서 파생된 단어로, “물건을 일시적으로 저장, 보관하기 위해 사용하는 곳”을 의미한다.
- 기술적 Cache
    - 자주 필요한 데이터나 값의 복사본을 일시적으로 저장, 보관하기 위해 사용하는 곳

## 캐시 메모리의 도입

- RAM은 하드 디스크에서 데이터를 불러오고, CPU는 RAM에 저장되어 있는 데이터를 이용하여 연산 작업을 수행하는 구조이다.

|  | CPU | RAM | Hard Drive |
| --- | --- | --- | --- |
| 종류 | 중앙처리장치 | 주기억장치 | 보조기억장치 |
| 속도 | 매우 빠름 | 빠름 | 매우느림 |
| 데이터 | 기억장치에서 데이터를 받아들여 연산작업 | 전원이 꺼지면 데이터가 지워짐 | 전원이 꺼져도 데이터가 지워지지 않음 |
- 발전을 거듭하면서 CPU와 메모리간의 성능 차이가 점점 더 벌어짐 (CPU > 메모리)
    - CPU는 연산 속도를 늘리는데 치중
    - 메모리는 용량을 늘리는데 치중
- 성능차이로 인해 다음과 같은 현상이 일어난다.
    - CPU는 데이터를 처리하기 위해 메모리와 끊임없이 데이터를 주고 받는 구조
    - 메모리가 CPU의 데이터 처리 속도를 쫓아가지 못함
    - CPU가 메모리를 기다려야 하는 병목현상 발생
- 해결방법
    - 이 병목 현상을 완화하기 위해 CPU와 메인 메모리 사이에 크기는 **작지만 속도가 빠른 캐시 메모리**를 둔다.
    - 이 캐시 메모리에 향후 재사용할 가능성이 클 것으로 예상되는 데이터의 복사본을 저장해둔 후
    - CPU가 요청하는 데이터를 바로바로 전달할 수 있도록 한다.
- 캐시메모리를 메인 메모리로 사용하거나, 용량을 크게 늘리지 못하는 이유
    - 가격이 매우 비싸다.
        - 메인 메모리보다 캐시 메모리가 한 셀당 트랜지스터가 6배(메인 1개 캐시 6개)에 달한다.
        - 물리적으로 차지하는 면적 또한 SRAM이 훨씬 크다.
- 메모리 계층: CPU Registers → Cache Memory → Main Memory(RAM) → Secondary Memory
    - 캐싱는 CPU와 RAM 사이에서만 사용되는 것은 아니다.
    - 한 계층은 바로 아래 계층에 대해서 캐싱 작업을 수행한다.

**캐싱을 이용하여 빠르고 작은 메모리와 크고 느린 메모리의 장점을 조합해서, 크고 빠른 메모리처럼 행동하도록 만드는 것이 목적**

## 캐시 동작 원리

> 데이터 지역성의 원리: 데이터 접근이 시간적 혹은 공간적으로 가깝게 일어나는 것을 의미
> 
- 한 번 참조된 변수는 잠시 후에 또 참조될 가능성이 높다.
- 어떤 데이터에 접근할 때, 그 데이터 근처에 있는 다른 데이터도 참조될 가능성이 높다.

### 시간 지역성

- 특정 데이터가 한번 접근되었을 경우, 가까운 미래에 또 한번 데이터에 접근할 가능성이 높은 것
- 메모리 상의 같은 주소에 여러 차례 읽기 쓰기를 수행할 경우 상대적으로 작은 크기의 캐시를 사용해도 효율성을 높일 수 있다.
- ex) `for`나 `while`문의 조건변수 `i`

### 공간 지역성

- 특정 데이터와 가까운 주소가 순서대로 접근되는 경우
- 한 메모리 주소에 접근할 때 그 주소뿐 아니라 해당 블록을 전부 캐시에 가져옴
- 이때 메모리 주소를 오름차순이나 내림차순으로 접근하나면, 캐시에 이미 저장된 같은 블록의 데이터를 접근하게 되므로 캐시의 효율성이 크게 향상될 수 있다.
- ex) 배열은 순서대로 접근할 가능성이 크다.

### 캐시 히트와 캐시 미스

- 캐시 메모리가 해당 데이터를 가지고 있다면 캐시 히트(캐시 적중)
- 해당 데이터가 없어서 메인 메모리에서 가져와야 한다면 캐시 미스

### 캐시 메모리 쓰기 정책과 캐시 일관성

- 미스가 발생하면 캐싱을 한다.
- 히트 상태에서 데이터 쓰기 동작이 발생하면 두 가지 정책이 있다.
    - CPU에서 데이터를 읽는 동작이 아니라 입력하는 동작이 발생하고, 데이터를 변경할 주소가 캐싱된 상태라면 메모리의 데이터가 업데이트되는 대신 캐시의 데이터가 업데이트된다.
    - 따라서, 메인 메모리를 업데이트해주어야 하는데, 이 메인 메모리를 업데이트 하는 시점에 따라 정책이 두가지로 나뉜다.

- Write Through 정책
    - 메인 메모리를 바로 업데이트
    - 단순하고 캐시와 메인 메모리의 일관성을 유지할 수 있다.
    - 매번 바꿔줘야 되므로 느리다는 단점이 존재한다.
- Write Back 정책
    - 캐시만 업데이트 하다가, 업데이트된 데이터가 캐시에서 빠지게 될 때 메인 메모리를 업데이트 한다.
    - 속도가 빠르다.
    - 캐시와 메모리가 서로 값이 다른 경우가 발생할 수 있다는 단점이 있다.
    - 과정
        - 데이터가 변경됐는지 확인하기 위해 캐시 블록마다 dirty 비트를 추가해야 한다.
        - 데이터가 변경되었다면 dirty 비트를 1로 바뀐다.
        - 해당 블록이 교체될 때 dirty 비트가 1이라면 메모리의 데이터를 변경한다.

## 결론

> 캐싱: 캐시에 데이터나 계산된 결과 값의 복사본을 저장해 둠으로써 전체적인 처리 속도를 향상시킨다.
> 
- 데이터에 직접적으로 접근하는 데 걸리는 시간이 오래 걸리 때
- 필요한 값을 얻기 위해 계산하는 과정을 생략하고 싶을 때
- 반복적으로 동일한 결과를 돌려주는 경우(이미지나 썸네일 등)

- 캐싱은 복사본을 이용하는 것이다.
    - 복사본과 원본이 달라지는 경우가 생길 수 있으니 일관성 유지에 유의하자