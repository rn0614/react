// class 선언- 청사진
class Student {
    constructor(firstname, lastname,year){
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = year;
        this.tardies = 0;
        this.scores =[];
    }

    // 인스턴스 메서드 :개별 인스턴스 단위에서 작동하는 메서드
    fullName(){
        return `Your full name is ${this.firstname} ${this.lastname}`;
    } 

    markLate(){
        this.tardies +=1;
        if(this.tardies>=3){
            return `yoou are expelled!`;
        }
        return `${this.firstname} ${this.lastname} has been late ${this.tardies} times`;
    }

    addScroe(score){
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage(){
        let sum = this.scores.reduce((a,b)=>a+b,0);
        return sum/this.scores.length;
    }

    // static method는 인스턴트 객체 없이 사용함
    static EnrollStudents(){
        return "Enrooling Student!"
    }

}

// 하나의 인스턴트 생성
let firstStudent = new Student("Colt","Steele",2);
console.log(firstStudent);
let secondStudent = new Student("Blue","Steele",1);
firstStudent.grade=4;
console.log(firstStudent);

console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

console.log(firstStudent.addScroe(43));
console.log(firstStudent.addScroe(45));

console.log(firstStudent.calculateAverage());

console.log(Student.EnrollStudents())


// this는 인스턴스 객체를 참조함
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx,dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(Point.distance(p1,p2));



// 단방향 연결리스트
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    pop(){
        if(!this.head) return undefined;
        var current= this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head=current.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next= this.head;
            this.head = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

}

var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("POPRESULT");
console.log(list);     // console.log() 출력하는 시점이 이미 pop진행된 뒤임.

console.log(list.pop());
console.log(list);
console.log(list.shift());
console.log(list);