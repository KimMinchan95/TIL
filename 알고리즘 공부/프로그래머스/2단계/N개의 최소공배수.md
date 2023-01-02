## N개의 최소공배수

프로그래머스 [N개의 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953) 풀이

#### 문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

#### 제한 사항
- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.

## 풀이

- 이 풀이는 직접 푼 방식은 아니고 문제 접근 방법을 배우고 싶어서 가져왔다.

```js
// 유클리드 호제법을 이용해서 최대공약수를 구한다.
const getGcd = (m, n) => {
    if (m % n === 0) return n;
    return getGcd(n, m % n);
}

function solution(arr) {
    // `a * b / 최대공약수 = 최소공배수` 공식을 이용한 방법이다.
    return arr.reduce((acc, cur) => acc * cur / getGcd(acc, cur));
}
```