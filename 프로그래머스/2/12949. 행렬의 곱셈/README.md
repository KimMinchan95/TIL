# [level 2] 행렬의 곱셈 - 12949 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12949?gad_source=1&gad_campaignid=22499034228&gbraid=0AAAAAC_c4nC1m0AABxNRRea3U4p75qeOI&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g6PcgyQwM69xvhJgjL-aL9ajW2F_lSWOSl-_KtfHHOhxmbdUiE0WlRoCnxEQAvD_BwE) 

### 성능 요약

메모리: 38.9 MB, 시간: 9.48 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 11월 20일 21:41:38

### 문제 설명

<p>2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.</li>
<li>행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.</li>
<li>곱할 수 있는 배열만 주어집니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr1</th>
<th>arr2</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1, 4], [3, 2], [4, 1]]</td>
<td>[[3, 3], [3, 3]]</td>
<td>[[15, 15], [15, 15], [15, 15]]</td>
</tr>
<tr>
<td>[[2, 3, 2], [4, 2, 4], [3, 1, 4]]</td>
<td>[[5, 4, 3], [2, 4, 1], [3, 1, 1]]</td>
<td>[[22, 22, 11], [36, 28, 18], [29, 20, 14]]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges