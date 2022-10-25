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


function getCombinations(arr, N) {
    const results = [];
    if (N === 1) return arr.map((value) => [value]);
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, N - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]);
      // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
    });
  
    return results;
  }


  function solution(balls, share) {
    return (
      Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
      Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
    );
  }



  // 소수구하기
function isPrinme(N){
    if(N==1) return false;
    for(var i=2; i< Math.sqrt(N); i++){
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

//list count  ['a','b','a']
for(s of list){
    obj[s]=++obj[s]||1;   // {'a':2 , 'b':1}
}