class myClass1{
    constructor(){}
    method1(){}
    method2(){}
}

// 클래스는 함수의 한 종류이다.
class User {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();


console.log(User === User.prototype.constructor); // true

console.log(User.prototype.sayHi); // 객체에서 정의한 함수는 prototype 에 저장됨

// 함수식으로 객체 생성
function User2(name){
    this.name = name;    
}

User2.prototype.sayHi = function(){
    console.log(this.name);
}

let user2 = new User2("James");
user2.sayHi(); // 함수로 해도 별반 차이 없어보임.

let User3 = class {
    sayHi(){
        console.log("안녕하세요.")
    }
}

new User3().sayHi();

class User4{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length <4){
            console.log("이름이 너무 짧습니다");
            return;
        }
        this._name = value;
    }
}

let user4 = new User4("보라");
console.log(user.name);
user4 = new User4("");  //이름이 너무 짧습니다.



class User5 {
    name = "보라";
}
  
let user5 = new User5();
console.log(user5.name); // 보라      개별 객체에 클래스필드로 사용됨
console.log(User5.prototype.name); // undefined



class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {        // this 객체가 날라가기 때문에 화살표 함수로 사용한다. 객체의 this가 들어가게 됨
    console.log(this.value);
  }
}

let button = new Button("안녕하세요.");

//setTimeout(button.click, 1000); // 안녕하세요.

class MyClass2{
    //prop = value;

    constructor({value}){
        this.inputval = value;
    }

    method = ()=>{
        console.log("method 실행")
    }
    
    get some(){
        return this.inputval;
    }

    set some(value){
        this.inputval = value;
    }
}

let myClass2 = new MyClass2({inputval:24})
console.log(myClass2.some);


class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} 은 속도가 ${this.speed} 입니다`);
    }

    stop(){
        this.speed=0;
        console.log(`${this.name} 이 정지합니다.`);
    }
}

let animal = new Animal("동물");

class Rabbit extends Animal{  // 부모객체 상속
    hide(){
        console.log(`${this.name}이 숨습니다.`);
    }
}

let rabbit = new Rabbit("흰 토끼");
rabbit.run(20);  // 토끼 은 속도가 20 입니다. < 부모객체로부터 메서드를 가져오기 가능


// 조건에 따라 다른 값을 상속받고 싶을 때

function condition(inputval){
    if(inputval=== "animal"){
        return class Aniaml{
            constructor(){}
        }
    }
    if(inputval==="insect"){
        return class Insect{
            constructor(){}
        }
    }
}

class Who extends condition("animal"){}

let who = new Who();


// 오버라이딩
class Animal2{
    constructor(name){
        this.name=name;
        this.speed=100;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} 가 ${this.speed}로 달립니다.`);
    }

    stop(){
        this.speed=0;
        console.log(`멈춥니다.`);
    }
}

class Rabbit2 extends Animal2{
    value1='value'  // parameter

    constructor(name, length){
        super(name);
        this.length = length;
    }

    hide(){
        console.log("숨습니다.")
    }

    stop(){
        super.stop();  // 부모객체의 stop 사용
        this.hide();   // 본인의 hide 사용
    }

    stop2= ()=>{
        super.stop();
    }
}

let rabbit3 = new Rabbit2("토끼");

rabbit3.stop()   // 멈춥니다. 숨습니다.

rabbit3.stop2()   // 멈춥니다. 부모객체만 가져오는것을 알 수 있음.
console.log(rabbit3.speed)
rabbit3.run(30);
console.log(rabbit3.speed)


// 부모 생성자는 부모필드값을 사용함

class Animal4 {
    name ='animal'
    constructor(){
        console.log(this.name);
    }
}
class Rabbit4{
    name="rabbit"
}

new Animal4(); // animal;
new Rabbit4();  // animal  부모생성자는 부모필드값을 사용한다.



// rabbit6.__proto__ === animal6
// -----------------------오류 ----------------------
let animal6 = {
    name: "동물",
    eat() {
      console.log(`${this.name} 이/가 먹이를 먹습니다.`);
    }
  };
  
  let rabbit6 = {
    __proto__: animal,
    name: "토끼",
    eat() {
      // 예상대로라면 super.eat()이 동작해야 합니다.
      this.__proto__.eat.call(this); // (*)
    }
  };
  
  rabbit6.eat(); // 토끼 이/가 먹이를 먹습니다.

  // ----------------------오류 끝 ---------------------

 // 정답 [HomeObject]를 사용
  let animal7 = {
    name: "동물",
    eat() {         // animal.eat.[[HomeObject]] == animal
      console.log(`${this.name} 이/가 먹이를 먹습니다.`);
    }
  };
  
  let rabbit7 = {
    __proto__: animal,
    name: "토끼",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };
  
  let longEar = {
    __proto__: rabbit,
    name: "귀가 긴 토끼",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };
  
  // 이제 제대로 동작합니다
  longEar.eat();  // 귀가 긴 토끼 이/가 먹이를 먹습니다.

  // 단 homeObject 사용시 객체가 this를 기억함