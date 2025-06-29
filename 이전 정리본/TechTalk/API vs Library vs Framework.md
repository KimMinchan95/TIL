# API vs Library vs Framework

[[10분 테코톡] 🙆‍♀️티버의 API vs Library vs Framework](https://www.youtube.com/watch?v=We8JKbNQeLo&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=110&t=4s)

## API(Application Programming Interface)

> 응용 프로그램에서 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스
> 

- 구현과 독립적으로 사양만 정의되어 있다.
- API에 따라 접근 권한이 필요할 수 있다.
- 예) : Java API, 여러 기업들의 API등이 있다.

**구글 API**

[](https://console.cloud.google.com/apis/library?hl=ko&supportedpurview=project)

## Library

> 응용 프로그램 개발을 위해 필요한 기능(함수)을 모아 놓은 소프트웨어
> 

- 독립성을 가진다.
- 응용 프로그램이 **능동적**으로 라이브러리를 사용한다.
    - 능동적 : 자신이 필요할때 호출을 해서 사용한다.
- 예) : Apache Commons, Guava, Lombok, jQuery

## Framework

> 응용 프로그램이나 소프트웨어의 솔루션 개발을 수월하게 하기 위해 **제공된 소프트웨어 환경**
> 

- 상호협력하는 클래스와 인터페이스의 집합이다.
- 응용 프로그램이 **수동적**으로 프레임워크에 의해 사용된다.
    - 수동적 : 프레임워크가 할 일을 모두 진행후 개발자가 작성한 코드를 호출한다.
- 예) : Spring Framework, Junit, Ruby on Rails

## API vs Library vs Framework

- Library와 API의 차이점은 구현 로직의 유무이다.
- Library와 Framework의 차이점은 ‘응용 프로그램의 흐름 주도권을 누가 가지고 있느냐’ 이다.
    - 프레임워크가 가지고 있냐, 응용 프로그램이 가지고 있냐 차이