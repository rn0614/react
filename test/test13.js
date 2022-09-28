async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
function f() {

    wait().then(result => console.log(result));
// ...코드...
// async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
// f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
}
f()


// generator  제너레이터
// 제너레이터 함수 표기법 * // 반환은 제너레이터 객체가 반환됨
function* generateSequence(){
    yield 1;
    yield 2;
    //return 3;
    yield 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(one);         //{value: 1, done: false}

let two = generator.next();
console.log(two.value);

let three = generator.next();
console.log(three);       //{value: 3, done: true}


generator = generateSequence();

for(let value of generator){
    console.log(value);  // 1,2,3
}

let sequence = [0, ...generateSequence()];  // 0,1,2,3


// import는 한 js에서 한번만가능함
//import {sayHi, admin} from './testModule.js';

sayHi();  //sayHi function   html 에 <script type="module"> 필요

console.log(admin);
console.log(import.meta);

// webpack 같이 번들링 과정을 거치면 type="module" 없이도 사용 가능

import { sayHi as hi } from "./testModule.js";
hi('John') // 약어 사용가능