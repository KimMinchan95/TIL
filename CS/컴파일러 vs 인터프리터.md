# 컴파일러 vs 인터프리터

> **컴파일러는 고급 언어 프로그램 전체를 한 번에 기계어로 변환하는 반면 인터프리터는 고급 언어 프로그램을 한 줄씩 기계어로 변환한다.**
> 

### 여기서 고급언어란?

- 여기서 고급언어는 저급 언어의 대조되는 말로 **사람 중심**의 언어 이다.
    - 저급언어(어셈블리 언어) 고급언어는 좋고 나쁜 언어가 아니라, 기계가 이해하기 쉬운가, 사람이 이해하기 쉬운가의 차이이다.
    - 저급언어는 컴퓨터가 직접 이해할 수 있는 기계어와 1 : 1로 대응되는 기호로 이루어진 언어로 **기호 코드**(Mnemonic Code)라고도 한다. 그리고 기계어로 번역하기 위해서는 어셈블러(Assembler)가 필요하다.
    - 고급언어는 실행하기 위해서 번역하는 과정이 필요하다.
    - 상이한 기계에서 소스 수정 없이 실행이 가능하다.

## 컴파일러란?

> 고급 프로그래밍 언어를 기계가 이해할 수 있는 기계어로 변환하는 언어 번역기 이다.
> 
- 기계어로 변환하는 과정에서 전체 프로그램을 한 번에 기계어 코드로 변환한다.
- 구문 또는 의미의 오류가 있는 경우 컴파일러에서 이를 표시한다.
- 전체 프로그램을 확인하고 모든 에러를 표시한다.
- 이러한 오류를 수정하지 않고는 프로그램을 실행할 수 없다.

대표로는 **JAVA, C언어, Go** 등이 있다.

## 인터프리터란?

> 고급 프로그래밍 언어를 기계어 코드로 변환하는 언어 변역기 이다.
> 
- 고급 프로그래밍 언어를 기계어 코드로 변환한다는 것 자체는 컴파일러와 똑같다.
- 컴파일러와 다르게 인터프리터는 소스 코드를 한 줄씩 기계어 코드로 변환한다.
- 한 줄씩 체크하므로 스캔 시간이 짧다.
- 하지만 전체 실행 시간은 더 오래걸린다.
- 만약 중간에 에러가 발생하면 이후 작성된 코드를 살펴보지 않고 해당 에러만 표시한다.

대표로는 **Python, SQL, JavaScript** 등이 있다.

### 컴파일러 언어와 인터프린터 언어는 완벽히 나눠져있나?

> 대답은 ‘NO’ 이다.
> 
- 자바스크립트로 살펴보면 자바스크립트의 태생은 웹 문서 구조를 동적으로 나타내기 위해서 인터프리터 언어로 설계되었다.
- 자바스크립트를 실행하는 환경인 V8엔진은 점점 유저 인터렉션이 증가함에 따라 **필요에 따라 컴파일 과정을 거쳐** 자바스크립트 실행 성능을 높이는 방식을 사용한다.

---

### 참고자료

[프로그램 언어의 종류 - 프로그래밍 입문](https://opentutorials.org/course/2471/13907)

[Difference Between Compiler Interpreter and Assembler - Pediaa.Com](https://pediaa.com/difference-between-compiler-interpreter-and-assembler/)

[컴파일이란 무엇이며, 자바스크립트는 인터프리터 언어인가?](https://devlog-of-yein.tistory.com/m/6)
