// 객체에서 사용하는 인터페이스는 내부 인터페이스와 외부 인터페이스 2개로 구분

// 내부 인터페이스는 객체 내부에서만 이용, 외부 인터페이스는 외부에서도 호출 가능

// protected : _값을 통해 보호
class CoffeeMachine {
    _waterAmount =0;

    set waterAmount(value){
        if(value<0) throw new Error("물의 양은 음수가 될 수 없습니다.");
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    get power(){
        return this._power
    }
    constructor(power){
        this._power = power;
        
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 200;

//coffeeMachine.waterAmount =-20;
//console.log("에러 다음 출력")
//if(true) throw new Error("에러테스트")

coffeeMachine._waterAmount=10;
console.log(coffeeMachine.waterAmount);


// private
class CoffeeMachine2{
    #waterLimit =200;

    #checkWater(value){
        if(value<0) throw new Error("물의 양은 음수가 될 수 없습니다");
        if(value>this.#waterLimit) throw new Error("물의 양이 용량을 초과합니다.")
    }
}

let coffeeMachine3 = new CoffeeMachine2();

//coffeeMachine.#checkWater();  // 에러 발생  protect 라 접근 불가


// 기본 클래스 확장
class ExtendedArray extends Array{
    isEmpty(){
        return this.length===0;
    }

    // 내장 메서드 반환값 선택하기
    static get [Symbol.species](){
        return Array;
    }
}

let array2 = new ExtendedArray();

array2.isEmpty() ; //사용가능

let filterArr = array2.filter(item=> item>10);  

//filterArr.isEmpty();  // Error; 반환값이 Array이므로 Error


// class의 포함 여부
class Rabbit{}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true

