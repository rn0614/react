// 객체는 [[prototype]] 에 내용을 저장하고 사용함

// static 사용시  prototype 이 아닌 class 내부에 메서드 선언

class User {
    static staticMethod(){
        console.log(this); // this===User 
    }

    generalMethod(){
        console.log(this);
    }
}

User.staticMethod(); // true 즉 this가 User.prototype 이었던 기존과 달리 User에 바로 있음

User.prototype.generalMethod();


User.staticMethod2 = function(){console.log("static2")} // 이런 형태로 구현해도 static



class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    // static을 이용하여 클래스의 메서드들을 생성한다. 생성된 객체들에는 해당 메서드들이 없음
    // 물론 상속도 가능
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }

    static createTodays(){
        return new this("Today", new Date());
    }

    innerMethod(){
        console.log("inner~")
    }
}

let article = [
    new Article("HTML", new Date(2019,1,1)),
    new Article("CSS", new Date(2019,0,1)),
    new Article("Javascript", new Date(2019,1,1))
]

article.sort(Article.compare);

console.log(article);

// 오늘 날짜생성
let todayAtricle = Article.createTodays();

console.log(todayAtricle);


// 정적 프로퍼티
class Article2{
    static publisher ="출판사"
}

console.log(Article2.publisher);

// 정적 메서드는 특정 객체가 아닌 전체 클래스가 쓰는 메서드


class Rabbit extends Object{
    constructor(name){
        super();              // 상속받는 클래스 생성자는 super가 필수, 정의하지 않으면 this없음
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty("name"));

// 상속시 2가지 프로토 타입을 설정 생성자 함수 prototype, 
console.log(new Rabbit); // [[prototype]] 에 Rabbit 클래스 선언 그 안에 [[prototype]]에 Object 선언
console.log(Rabbit.prototype.__proto__ === Object.prototype);
console.log(Rabbit.__proto__ === Object);

