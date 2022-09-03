const func1 = ()=>{console.log("test1")};

//const func2 = func1   //  func1 함수 자체가 복제되어 func2로 들어감
const func2 = func1()   //  실행하고 남은 반환값이 func2로 들어감

console.log(func2);  // undefined 


//const user ={}
//user.name="john"
//delete user.name;



function isEmpty(obj){
    for (i in obj){
        return false
    }
}

const a={}
const b={}
const c=a

console.log(a===b);
a.name="a";

console.log(a);
console.log(b);
console.log(c);  // c는 a를 참조하므로 a와 동일함.

const clone ={}

for (let i in a){
    clone[i]= a[i];
}

console.log(clone);

a.att = "b";

console.log(a);
console.log(c);      // a와동일
console.log(clone);  // 복제 이후에 추가된 객체 att에 대해서는 없음

// 객체 합치기
let user = {name:"John"};
let permission1 = {cnaView: true};
let permission2 = {canEdit: true};

Object.assign(user, permission1, permission2);

console.log(user); // 첫번째 객체에 나머지 객체들의 속성이 부여됨, 겹칠시 뒤에 객체로 덮어쓰기

let clone2 = Object.assign({}, user); // 반복문 없이 간단하게 복제하는법
user.age =30;

user.sayHi = function(){
    alert("안녕하세요");
}


//user.sayHi();

const user2 ={
    name:"koosang",
    age:28,
    sayHi(){
        console.log(this.name);
    }
}

user2.sayHi();

function Calculator(){
    this.read=function(){
        this.a=+prompt("a를 입력하시오");
        this.b=+prompt("b를 입력하시오");
    };
    this.sum= function(){
        let tempSum=this.a+this.b;
        return tempSum;
    };
    this.mul=function (){
        let tempMul = this.a*this.b;
        return tempMul;
    };
}

let calculator = new Calculator();
//calculator.read();

//alert( "Sum=" + calculator.sum() );
//alert( "Mul=" + calculator.mul() );

///----
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

//alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함

function Accumulator(init){
    this.value=init ;
    this.read= function(){
        
        this.value+=+prompt("값을 입력하시오");
    };
}

// 옵셔널 체이닝


let user3 ={};

console.log(user3?.address?.value);

//Symbol은 외부에서 가져온 객체를 다룰때 인식하게 하기 쉽다.
let id =Symbol('id');
user[id]="유일한 구분값";

// 배열처리
let list1 =new Array();
let list2 = ['text1','text2','text3'];

list2.shift();
console.log(list2);

list2.push('text4');
console.log(list2);

list2.pop();
console.log(list2);

list2.unshift('text1');
console.log(list2);

list1=['1','2','3']

// 리스트 통채로 list에 포함됨
list2.push(list1);
console.log(list2);

// 따로 추가하려면 ... 필요
list2.push(...list1);
console.log(list2);


let fruits=['사과','오랜지','자두'];

for (let fruit of fruits){
    console.log( fruit);   // 사과, 오랜지, 자두
}

// 권장하지 않음. 속도 느림 객체사용에 특화
for (let fruit in fruits){
    console.log(fruit);    // 0,1,2
}


fruits.length=2 // 길이 2개만남기고 짜름
fruits.length=3 // 빈 값이 3번째에 넣어짐. 즉 간단하게 배열을 비울 수 있음


let arr = ["a", "b"];

arr.push(function() {
  console.log( "확인" );
})

arr[2](); // a,b,function(){...}


function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum<0) partialSum=0;
    }
    return maxSum;
}

let arr1 = ["가","나","다","라" ]
let firstIndex =0;
let lastIndex =1;
let count =1;
let arr2=["마","바"]
arr1.splice(firstIndex, count);

arr1.slice(firstIndex, lastIndex);

arr1.concat(arr2)

arr1.forEach((item)=>{
    console.log(item);
})

arr1 = ["가","나","다","라" ]
arr1.indexOf("가"); // 0
arr1.indexOf("카"); // -1
arr1.includes("가"); // true


let result = arr1.find(function(item,idex,array){
    return true;

});
console.log(result); // 조건에 부합하는 가장 빠른 "가" 없으면 undefined

result = arr.filter(function(item,idex,arry){
                        return true;
                    });
console.log(result); // 조건에 만족하는 ["가","나","다"...] 다 반환함. 없으면 빈배열 반환

result = arr1.map(function(item, index, array){
                        return item=item+"추가";
                    });

console.log(result);


// sort 방법
arr2=[1,12,2,3,4,15];


console.log(arr2.sort((a,b)=>a-b));

arr2.reverse(); // 15 , 12, 4, 3, 2, 1

let strings = "hi,my,name,is,koo";

console.log(strings.split(','));

arr1.join('.'); //"가.나.다.라.마..."

// 배열을 통해 반환값이 하나일 때 reduce 사용

arr2=[1,2,3,4]
let value1 = arr2.reduce(function(accumulator,item){
    return accumulator+item // accumulator로 저장됨
}, 0);

console.log(value1);


let army ={
    minAge: 18,
    maxAge: 27,
    canJoin(user){
        return user.age>this.minAge && user.age<this.maxAge;
    }
}

let users = [{age:25}, {age:5}];

let soldiers = users.filter(army.canJoin, army)//함수 본문안에 this 판정이 달라짐
console.log(soldiers);



let arr9=["background-color","list-style-image","-webkit-transition"];

arr9.forEach(item=>{
    let tempArr = item.split('-');
    console.log(tempArr);
    let camelString=tempArr.reduce((result1,temp,index)=>{
        
        return (index!==0)?result1+ temp.charAt(0).toUpperCase() + temp.slice(1): temp;
    },"")
    console.log(camelString);
})
let result2="";
arr9.forEach(item=>{item.split('-').reduce((result2,str,index)=>{(index===0)?str:str.charAt(0)+str.slice(0) })},"");
console.log(result2)

arr9.forEach(
    item=>{
        item.split('-').map((word,index)=>{index==0?word:word[0].toUpperCase()+word.slice(1)}).join('');
        console.log(item);
    });

let arr5=[5,3,8,1];

let filterd = filterRange(arr5,1,4);

console.log(filterd);
function filterRange(arr,minNum,maxNum){
    return arr.filter((item)=>{return (item>=minNum && item<=maxNum)});
}