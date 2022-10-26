var array= [1,2,3,4,5]

//정수 만들기
parseInt(1.2)   // 1
Number(1.2)     // 1.2

Math.ceil(1.2)   // 올림 2
Math.floor(1.2)  // 내림 1
Math.round(1.2)  // 반올림 1
Math.max(1,2,3,4,5) // 최대값 5
Math.min(...array)  // 최소값 1
 

// 소수점에서 반올림 하려면
Math.round(1.4329 * 10)/10 // 1.4 


// 배열에서 특정한 조건을 만족하는 값만 배열화
[1,2,3,4,5,6,7].filter((w)=>w>3)   // [4,5,6,7]

// 단어 뒤집기
"string".split("").reverse().join("")  // gnirts

// 문자열 안에 문자열이 있는지 확인
"abcdefghi".includes("def")      // true
array.includes(1)                // 1

// 결과값이 하나인 합산 공식
[1,2,3,4,5].reduce((a,b)=>a+b,0)  // 15

// 특정한 기준으로 정렬
[3,4,2,5,1,10].sort((a,b)=> a-b)    // [1,2,3,4,5,10]

// 특정한 함수를 배열의 모든 값에 적용
array.map((w)=>w**2)     // [1,4,9,16,25]

// 배열의 전부 혹은 하나라도 성립하는지 여부 확인
array.every(w => w>3)     // false
array.some(w => w>3)     // true
