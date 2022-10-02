export let admin = {
    name: "John"
};

export function sayHi(){
    console.log(`${admin.name}, sayHi function`);
} // 세미콜론은 지양 붙이지 않는다.;

export class TestClass {
    constructor(name){
        this.name = name;
    }
}

function test1(name){
    console.log(`${name}, 이름을 출력하는 예제`)
}

function test2(name){
    console.log(`${name}, 이름을 출력하는 예제`)
}

export {test1, test2}; // 이후에 export로 한번에 선언도 가능


// default 사용시 해당 모듈의 객체는 하나로 지정됨
// default 는 import  시 import User from './testModule.js'; 같이 {} 없이 사용 가능
//import 시 이름을 마음대로 설정 가능
export default class User {
    constructor(name){
        this.name =name
    }
}

// default는 이름 없어도 됨
// export default class {...} 식으로 사용 가능   


// 기초 종료