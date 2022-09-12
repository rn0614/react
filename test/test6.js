let user ={
    name: "John",
    surname: "Smith",

    get fullName(){
        return `${this.name} ${this.surname}`;
    },
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
};

Object.defineProperty(user, 'birthDay', {
    value:'950614'
    //writable : true, //값 변경 가능
    //enumerable : true  // 열거 가능 여부
    // configurable : true // 객체에서 지우기 가능 여부
})

console.log(user.fullName);

user.fullName = "Alice Cooper";

console.log(user.fullName);

console.log(user.birthDay);
//user.birthDay='930614'; 자동으로 "writable": false
console.log(user.birthDay);


// prototype 에 추가하기

let animal ={
    name:"animal",
    eats: true,
    walk(){
        console.log(`${this.name}가 걷습니다.`)
    }
};
let rabbit ={
    name:"rabbit",
    jumps: true
};
console.log(rabbit);

rabbit.__proto__ = animal;
// 요새는 rabbit.getPrototypeOf , rabbit.setPrototypeOf 를 사용하는 추세

console.log(rabbit);

let dog ={
    name:"dog",
    smell : true,
    __proto__ : animal
}

let insect ={
    name:"insect"
}

dog.walk();
dog.__proto__ = insect;

console.log(dog) // __proto__ 에는 하나만 들어올 수 있음. insect로 바뀜