function sum(num1, num2){
    return num1+num2
}
console.log(sum(2,3));



function charCount(string1){
    var result={};
    var _result = string1.toLowerCase().split("");               // toLowerCase, toUpperCase

    for( w of _result){
        if(w.charCodeAt(0)<97 || w.charCodeAt(0)>122) continue;  // charAt , charCodeAt

        if (result[w]){
            result[w]=result[w]+1  // result[w]++                // 객체[parmeter] = value   / 
        }
        else{
            result[w]=1;
        }
        // 줄임형 있으면 ++ 없으면 1
        //result[w] = ++result[w] || 1; 
    }
    
    return result;
} 

console.log(charCount("aabbsdwaa!!!W$#@"));


function charCount2(str){
    var obj={};
    for (var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char]= ++obj[char] || 1;
        }
    }
    return obj;
}


Array.from({length:n}, (_,i)=>i+1);
Array(n).fill(1).map((v,i)=> v+i);


function solution(my_string) {
    var answer = [];
    answer=my_string.match(/[0-9]/g).map(Number).sort()
    return answer;
}


function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}


function solution(array) {
    return array.join('').split('7').length-1;
}

function solution(array) {
    return array.join("").match(/7/g)?.length || 0;
}

function gcd(a,b){ 
    return b ? gcd(b, a%b) : a; 
  }


  function solution(num_list, n) {
    var answer = [];
    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }
    return answer;
}


function isPrime(N) {
    // 1은 소수가 아니다.
    if (N === 1) return false;
    // 2부터 N제곱근까지의 수로 N을 나눴을 때
    for (let i = 2; i <= Math.sqrt(N); i++) {
      // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
      if (N % i === 0) return false;
    }
    // 모두 나누어 떨어지지 않으면 N은 소수이다.
    return true;
  }


  function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}


var solution=s=>[...s].filter(c=>s.match(new RegExp(c,'g')).length==1).sort().join('')

function solution(array, n) {
    var answer = [];
    answer = array.map(a=> [Math.abs(n-a),a]).sort((a,b)=>a[0]-b[0]||a[1]-b[1])[0][1]
    return answer;
}



function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}


function getCombinations(arr,N){
    const results=[];
    if (N === 1) return arr.map((value) => [value]);
    for(const [index,fixed] of arr.entries()){
      const rest = arr.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, N - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]);
      // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
    }
    return results;
}


  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}


  function solution(balls, share) {
    return (
      Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
      Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
    );
  }

  // 떨어진 값 순서 중복제거 배열 [1,2,3,3,3,1,1,1]  => [1,2,3,1]
function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}

// 진수변환 toString(n) : 10진수 -> n진수
//          parseInt(number,n)  : n진수 -> 10진수
function solution(n) {
    var answer = parseInt(n.toString(3).split("").reverse().join(""),3)
    return answer;
}

// '문자'.charCoddeAt(0),  String.fromCharCode(코드)
function solution(s, n) {
    var answer = '';
    var tempCharCode=0;
    for(w of s){
        tempCharCode = w.charCodeAt(0)
        if(w===' '){
            answer+=' '
        }else if(tempCharCode<=90&&tempCharCode>=65){
            answer+=String.fromCharCode((tempCharCode+n<=90)?w.charCodeAt(0)+n:w.charCodeAt(0)+n-26)
        }else{
            answer+=String.fromCharCode((tempCharCode+n<=122)?w.charCodeAt(0)+n:w.charCodeAt(0)+n-26)
        }
    }
    return answer;
}

// 2중배열 arr1, arr2 중 하나라도 1인경우 찾기
function solution(n, arr1, arr2) {
    var answer = arr1.map((a,i)=> (a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
    
    return answer;
}




  // 소수구하기
function isPrime(N){
    if(N==1) return false;
    for(var i=2; i<= Math.sqrt(N); i++){
        if(N%i==0) return false;
    }
    return true;
}

// 최대공약수
function gcd(a,b){
    return b ? gcd(b, a%b):a
}

// 약수 리스트
function getDivision(N){
    var divisions=[];
    for(let i=1 ; i<=Math.sqrt(N);i++){
        if(N%i==0){
            divisions.push(i);
            if(N/i !=i) divisions.push(N/i);
        }
    }
    divisions.sort((a,b)=>a-b)
    return divisions;
}

//object to list
Object.entries(list)

// list to Object ['a','b','c']
Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}

// list to Object [[key,value],[key,value]]
for(entry of list){
    obj[entry[0]]=entry[1]
}

// list to Set
var set1 = new Set(list);

// Set to list
[...set1]


//list count  ['a','b','a']
for(s of list){
    obj[s]=++obj[s]||1;   // {'a':2 , 'b':1}
}

// 이중배열 생성
var answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length));

// 재귀함수
// 종료조건. return 입력값의 변화


// 정규식
string1.match(/\d/g)
string1.test(/\d/g)
string1.split(/\d/g)