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