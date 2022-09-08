let obj={
    name:"koo",
    age:28
};


let json = JSON.stringify(obj); //  obj => json (obj의 function은 json형태가 될 수 없음)

let jsonToObj = JSON.parse(json);  // json => obj

console.log(json);


let user = {
    name: "John Smith",
    age: 35
  };

let user2=JSON.parse(JSON.stringify(user));

console.log(user2);


// 재귀

function pow(x,n){
    return (n==1)? x: (x*pow(x,n-1));
}

console.log(pow(2,3));


let company = { // 동일한 객체(간결성을 위해 약간 압축함)
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  
// 깊이가 일정하지 않은 객체의 특정 키값을 전부 더하기
function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev,cur)=>(prev+cur.salary),0)
    }else{
        let sum=0;
        for (let subdep of Object.values(department)){
            sum+= sumSalaries(subdep);
        }
        return sum;
    }
}

console.log(sumSalaries(company));



//  연결리스트
let list ={
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:null
        }
    }
}

// 2개째에서 끊기
let secondList = list.next.next;
list.next.next=null;

// 다시 합치기
list.next.next =secondList;


let fibList=[1,1]
function fib(b){
    if (b===1 ||b===0){
        return 1;
    }
    
    for (let i=2; i<b+1; i++){
        fibList.push((fibList[i-1]+fibList[i-2]));
    }
    return fibList[b];
}

console.log(fib(4));


// ...args 여분인수
function sumAll(...args){
    let sum=0;
    for (let i in args)  sum+=+i;
    
    return sum;
}
console.log(sumAll(1,2,3,4,5));


// 일반 function 선언에서는 arguments를 사용할 수 있다.
function fun1(){
    console.log(arguments[0]);
}
fun1("arguments[0] 입니다.")

// 배열을 뿌려서 전달하려면
function fun2(arg1,arg2){
    console.log(`${arg1}과 ${arg2}가 있습니다.`);
}
let list1 = ["arg1", "arg2"];
let list2 = ["arg3", "arg4"]
fun2(...list1);
let sumList = [...list1, ...list2];


// 객체 복사법
let obj1 = {name:"jang", age:20};
let obj2 = {name:"kang", age:30};

let obj1Copy = {...obj1}

let testNum=1;
function fun12(){
    let testNum=2;
    console.log(testNum);//2
}
fun12()
console.log(testNum); //1

// 함수안에 함수는 함수가 살아있을 때까지만 유효하다.
// 렉시컬 환경 : 내부 환경
// * 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 저장한다.



// function
let sayHi = function(e){
    alert("HI");
};

console.log(sayHi.name);   // function 의 name 파라미터는 함수 이름을 반환함
console.log(sayHi.length);  // function 의 매개변수 개수를 반환


// 함수선언식으로 만들었을때 자기 자신을 안에서 호출 가능
let i=0;
let sayMe = function funName(){
    if(i===10) return;
    console.log(`${i++}번째 반복`);
    funName();
}
sayMe();


function sum(a){
    let currentSum=a;

    function f(b){
        currentSum+=b;
        return f;
    }
    f.toString =function(){
        return currentSum;
    };

    return f;
}
console.log(sum(1)(3)(5).toString());


//setTimeout
let timerId1 = setTimeout(()=> alert('hi'), 1000);
clearTimeout(timerId1);       // 대기 상태인 settimeout을 종료

//setInterval
let timerId2 = setInterval(() =>alert('hi'),1000);
clearInterval(timerId2);

//중첩 setTimeout (종료시점에서 시간을 판단하며, 중간에 조건문으로 인터벌 간격 변경 가능)
let timerId3 = setTimeout(function tick(){
    console.log('출력');
    timerId3 = setTimeout(tick,2000);
}, 2000);
clearTimeout(timerId3);

function printNumbers(from, to){
    let current =from;

    let timerId = setInterval(()=>{
        console.log(current);
        if(current==to){
            clearInterval(timerId);
        }
        current++
    },1000);
    
}
//printNumbers(3, 10);


function printNumberSetTimeout(from, to){
    let current = from;
    function go(){
        console.log(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
    }
    go();
    let timerId = setInterval(go,1000);
}


// 안정적인 함수 : 입력값이 같다면 늘 같은 결과값을 도출하는 함수
// 캐싱을 통해 결과값을 따로 저장해 두면 빠르게 재연산 가능


let worker ={
    slow(min,max){
        console.log(`min : ${min}, max : ${max}`)
        return min+max;
    }
}

function cachingDecorator(func, hash){
    let cache = new Map();
    return function(){
        let key =hash(arguments);
        if(cache.has(key)){
            console.log("cache에 값이 있습니다.");
            return cache.get(key);
        }

        // 해당 내용은 func.call(this, ...arguments) 도 사용가능
        let result = func.apply(this, arguments); // 위에 cache에 없는 경우 함수를 재호출
        cache.set(key,result);  
        return result;
    };
}

function hash(args){
    return [].json.call(arguments);
}

console.log(worker.slow(3,5));

console.log([1,2].join.call([1,2,3]))
// 유사 배열은 배열 메소드를 못 쓰는데 apply,call을 사용시 쓸 수 있음

//list = document.querySelector('li');   // 유사배열
function getElementId(element){
    return element.id;
}

//Array.prototype.map.call(list, getElementId);

// 일반 배열은 map 함수를 사용함
console.log([1,2,3,4].map(x=>x*2))

// console.log(list.map()) 유사배열은 map 함수를 사용 못함

// 유사배열인 list에 배열메서드인 map 을 적용할 수 있게됨. 이때 map 내부는 func1
//console.log(Array.prototype.map.apply(list, func1));


function f(x){
    console.log(x);
}

let f1000 = delay(f,1000);
let f1500 = delay(f,1500);
f1000("test");
f1500("test");

function delay(f,ms){
    return function(){     // 여기의 인자로 들어가는 "test"는 arguments에 있음
        setTimeout(()=>f.apply(this, arguments),ms)  // 반환되는 함수의 내용.  f의 요소로
    };
}

function f1000(){
    setTimeout(()=>f(argument),1000);
};

// 무조건 맨 마지막 호출부터 일정시간 뒤 함수 실행. 시간 전에 호출하면 다시 맨마지막거 시간 ㅇ신
function debounce(func, ms){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout =setTimeout(()=>func.apply(this, arguments),ms);
    };
}

function throttle(func, ms){       // 특정함수가 일정시간동안 한번만 실행됨
    let isThrotteld =false,        // 처음 설정 전부 null, false
        savedAges,
        savedThis;
    
    function wrapper(){
        if(isThrotteld){
            savedThis = this;       
            return;
        }
        
        func.apply(this, arguments);

        isThrotteld= true;

        setTimeout(function(){                // 시간내에 함수를 다시 실행하지 않으면 false반환 
            isThrotteld = false;
            if(savedAges){
                wrapper.apply(savedThis, savedAges);
                savedAges =savedThis = null;
            }
        }, ms);
    }
    return wrapper;        // return wrapper 로 내부 함수를 리턴
}

throttle(f,100)     // 