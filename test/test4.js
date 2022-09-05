let map = new Map();
let obj = {"name":"koo", "age":28};

map.set('1','str1');
map.set(1,'num1');   //map은 key 값으로 다양한 자료형을 사용할 수 있다.(심지어 객체도)
map.set(obj, "koo");

map.get('1');

//console.log(map.get('1'));

map.has("1"); // true;

map.delete(1) // 2번째 key 요소 삭제

//map.clear(); // 전체 제거
map.size;   // 요소의 개수 반환

map.keys(); // ['1', 1, obj ]
map.values(); // ['str1', 'num1','koo']
map.entries();  // [['1','str1'], [1,'num1'], [obj, 'koo']];

console.log(map)
// 보통 반복문에 사용
for (let entry of map.entries()){
    console.log(entry);
}


let map2 = new Map([['key1', 'value1'],['key2', 'value2']]); // 이중 배열로 map 생성
let map3 = new Map( Object.entries(obj));   // 오브젝트 => map 생성
let obj2 = Object.fromEntries(map3.entries());   // map(이중배열로 바꾼) => obj // map3.entries 대신 map3도 가능

map2.forEach((value, key, map)=>{
    console.log(`value: ${value}, key: ${key}`);
})



let set1 = new Set(['2','3']);

set1.add('1');
set1.has('1');
set1.delete('1');
set1.clear()


function unique(arr) {
  return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr){
  let map = new Map();

  for (let word of arr){
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted,word); // 뒤에걸로 덮어짐
  }

  return Array.from(map);
}


map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");


let john = { name: "John" };

let array = [ john ];

john = null; // 참조를 null로 덮어씀

// john을 나타내는 객체는 배열의 요소이기 때문에 가비지 컬렉터의 대상이 되지 않습니다.
// array[0]을 이용하면 해당 객체를 얻는 것도 가능합니다.
alert(JSON.stringify(array[0]));

let obj3 = {name:"John"}
// 위크맵은 키가 반드시 객체
let weakmap= new WeakMap();

weakmap.set(obj3,"obj"); 
console.log(weakmap.get(obj3));

obj3=null; //객체가 없어질 경우 weakmap에서 삭제

console.log(weakmap.get(obj3));




// weakSet으로 메세지 읽음 표시
let messages =[{text:"Hello", from:"John"},
               {test:"See you", from: "john" }]
let readMessage = new WeakSet();

readMessage.add(messages[0]);
readMessage.add(messages[1]);

readMessage.add(messages[0]);


messages.shift(); // readMessage의 1번째 요소도 사라진다.



let user = {
  name: "Violet",
  age: 30
};
console.log(Object.entries(user)); //  객체의 value 값들만 array형태로 나옴

// 값을 순회합니다.
for (let value of Object.values(user)) {
  console.log(value); // Violet과 30이 연속적으로 출력됨
  console.log(11);
}

let price = {
  banana:1,
  orange:2,
  meat:4,
};

let doublePrice = Object.fromEntries(Object.entries(price).map(([key,value])=>([key,value*2])));
console.log(doublePrice)

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries1(salaries) ); // 650

function sumSalaries(object){
//return Object.entries(object).reduce((result,[key,value])=>(result+value),0);
  return Object.values(object).reduce((result,value)=>result+value,0);
}

function sumSalaries1(object){
  let result=0;
  for (let person of Object.values(object)){
    result+=person;
  }
  return result;
}

user={
  name:"john",
  age:20,
};
let count=(obj)=>{
  return Object.keys(obj).length;
}
console.log(count(user));




let options ={
  title:"Menu",
  width:100,
  height:200
}

let {width:w, height:h,title} = options;

// date 함수
let testDate1=new Date(2011, 0, 1, 0, 0, 0, 0); 
let testDate2=new Date(); 


testDate1.getFullYear();
testDate1.getMonth();
testDate1.getDate();
testDate1.getHours();
testDate1.getDay(); // 요일반환

testDate1.setDate(1);
//setHours(hour, [min], [sec], [ms])

// 시간차
let timeDiff=testDate2.getTime()-testDate1.getTime();


function dateFormat(date) {
  let month = date.getMonth()+1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

console.log(dateFormat(testDate2));