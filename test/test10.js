// 믹스인
let sayHiMixin ={
    method1(){
        console.log("method1");
    },
    method2(){
        console.log("method2")
    }
}

class Person {
    method3(){
        console.log("method3")
    }
}


class User extends Person{
    constructor(name){
        super()
        this.name = name;
    }
}

// User.prototype에 sayMixin 을 복사합니다
Object.assign(User.prototype, sayHiMixin);

let Dude =new User("Dude")
Dude.method1();
Dude.method3();

console.log(Dude);

let extnedsclass ={
    method4(){
        console.log("method4");
    }
}

Object.assign(User.prototype, extnedsclass);

Dude= new User("Dede");

Dude.method4();



// mixin을 이용한 트리거
let eventMixin = {
    on(eventName, handler){
        if(!this._eventHandlers) this._eventHandlers ={};
        if(!this._eventHandlers[eventName]){
            this._eventHandlers[eventName]=[];
        }
        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler){
        let handlers = this._eventHandlers?.[eventName];
        if(!handlers) return;
        for (let i=0; i<handlers.length; i++){
            if(handlers[i] == handler){
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args){
        if(!this._eventHandlers?.[eventName]){
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

class Menu {
    chose(value){
        this.trigger("select", value);
    }
}
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", value => console.log(`선택된 값: ${value}`));

menu.chose("123");




/// try-catch ( 맞는 코드)
setTimeout(function(){
    try{
        setTimeout(function(){
            console.log("여기서 에러 발생시 에러 못잡음")
        })
        method()
        console.log("setTimeout이 안에 있으면 Try-catch 작동 안함")
    }catch(err){  // err는 에러가 담긴 객체
        console.log("에러 발생")
        console.log(`${err.name},  ${err.message}, ${err.stack}`);


    }
},1000);


// error 정의

let error1 = new Error("에러 발생");

try{
    let user = JSON.parse("{잘못된 형식의 json}");

    if(!user.name){
        throw new Error("이름이 없음");
    }
}catch(e){
    console.log(`${e.message} : 이름이 없음 에러가 들어있음`);
}



// 외부의 try-catch로 예상 못한 에러잡기
function readData(){
    let json ='{"age":10}';
    try {
        blable(); // 정의되지 않은 함수
    }catch(e){
        if (!e instanceof SyntaxError){
            throw e;
        }
    }finally{
        console.log("항상 실행하는 finally")
    }
}

try{
    readData();
}catch(e){
    console.log("예상못한 에러 :"+ e);
}

// finally 문은 return 시에도 동작함
function finallyfunc(){
    try{
        return 1
    }catch(e){

    }finally{
        console.log('언제나 실행되는 finally~');
    }
}
finallyfunc();