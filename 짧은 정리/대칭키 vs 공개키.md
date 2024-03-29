# 대칭키 vs 공개키

### 대표적인 차이

- 대칭키 암호화 : 암호화, 복호화에 사용하는 키가 동일한 암호화 방식
- 공개키 암호화 : 암호화, 복호화에 사용하는 키가 서로 다르다. (개인키, 공개키)

### 대칭키

> 암호화, 복호화에 사용하는 키가 동일한(1개의 키) 암호화 방식
> 

**특징**

- 속도가 빠르다 (공개키 암호화에 비해서)
- 미리 약속된 키를 사용해야 한다.
    - 미리 약속된 키를 사용하지 않고 키를 전달할 경우에는 “대칭키 교환(키 교환)”을 해야한다.
    - 암호문과 키를 같은 경로로 전송하면 위험하기 때문에 보안을 위해서는 서로 다른 경로로 전송해야 한다.
    - 키를 전송하는 중에 키 탈취를 당하면 암호문이 그대로 노출될 수 있다.
- 사람이 증가할 수록 키 관리에 복잡성이 증가한다.

### 공개키

> 암호화(공개키), 복호화(개인키)에 사용하는 키가 서로 다른 방식
> 

**특징**

- “공개” 키 라는 이름 그대로 키가 공개 되어있어 키를 교환할 필요가 없다.
- 공개키 암호화 방식에는 두 가지 키가 존재한다.
    - 공개키는 **암호화**에 사용되는 키로 모든 사람이 접근 가능하다.
    - 개인키는 **복호화**에 사용되는 키로 각 사용자들이 가지고 있는 키다.
- 공개키는 탈취당해도 암호문을 복호화 할 수 없기 때문에 특별한 주의를 하지 않고 전송 가능하다.
- 개인키는 탈취당하면 암호문을 복호화 할 수 있기 때문에 안된다.

**공개키 흐름**

- A가 공개키/개인키 쌍을 생성한다.
- 공개키를 공개(등록) 하고, 개인키는 본인이 소유한다.
- B가 A의 공개키를 받아온다.
- B가 A의 공개키를 사용해 데이터를 암호화한다.
- 암호화된 데이터를 A에게 전송한다.
- A는 암호화된 데이터를 A가 생성한 개인키로 복호화한다.

---

## 참고자료

[[암호학] 대칭키 vs 공개키(비대칭키) 암호화 차이](https://liveyourit.tistory.com/183)