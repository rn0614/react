const array=[1,2,3,4];
const stringNum="1234";
const stringALpha = "abcd";
const number=1234;

// reduce(func, initialVal)
// func의 return 값이 cur 값으로 다시 들어감
array.reduce((pre,cur, idx)=>{
    cur=pre+cur;
    return cur;
}, 0);//nitialValue


// array.map((item)=>ite+1)
array.map((item)=>item+1);


// number to string
number.toString();


// string 대문자, 소문자 만들기
stringALpha.toUpperCase();
stringALpha.toLowerCase();


// number길이 0으로 채운 배열
Array(number).fill(0);

// map((item,idx)=>{})
array.map((item,idx)=>{[item,idx]});

// array.indexOf()
array.indexOf(3)   // array에서 3의 위치

// 문자열/배열의 특정 위치부터 뒤까지 자르기
array.slice(1);
stringALpha.slice(stringALpha.length-2); // 뒤에서 2개


// filter((item,idx)=>{return true||false})로 해당되는 값만 가져오기
array.filter((w,idx)=> idx>1);

// Math.min(...array), Math.max(...array)


// array.splice(startIdx, count, *replaceValue)     // array.slice(startIdx, endIdx)
// splice(-2,1)는 idx 음수사용 가능
array.splice(1,1);
array.slice(1);


// array to Set  : new Set(array)
let set1 = new Set(array);
set1.has(1) ;               // true

// Set to array  : [...set]
[...set1];

//Math.ceil, Math.floor, Math.round
Math.round(number*100)/100

//isNaN(string)
//내부값이 NaN인지 확인

// 2중 배열 생성
const twoDeptArray = Array.from(Array(3), () => new Array(2)); // 3열 2행

// String to array
stringALpha.split("");

// array to String
array.join("");

// array 끼리 비교하기
if([1,2,3].toString()===[1,2,3].toString()){
    console.log(true);
}

// 10진법 -> N진법   number.toString(N)
number.toString(3);

// N진법 -> 10진법 parseInt(string,N);
parseInt(stringNum,3);


// 문자열 특정 구간 자르기 (빈공백이고 해당 인덱스가 없으면 빈공백 반환
stringALpha.substring(1,2);

stringALpha.charAt(0);  //s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");


// 로그함수
var k = Math.log(10)/ Math.log(2); // log2(10)


var array2=[5,6,7,8]
console.log(array.filter(w=>w>2));
console.log(...array2,...array.filter(w=>w>2));  // 앞에 배열에다가 뒤에 필터를 더하게 된다

// value값만 array 형태 뽑기
Object.values(obj);

// Object to array
Object.entries(obj);

var answer = [0];
var restDay = progresses.map((w,idx)=>Math.ceil((100-w)/speeds[idx]));
var tempcur=restDay[0];
for(var i=0, j=0; i<restDay.length; i++){
    if(tempcur>=restDay[i]){
        answer[j]+=1;
    }else{
        tempcur=restDay[i];
        answer[++j]=1;
    }
}