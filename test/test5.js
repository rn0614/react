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
console.log(testNum); //2