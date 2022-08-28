// dom 로드 후 작동하는 구문
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("dom 로드시 바로 발생하는 이벤트입니다")
    console.log(object1);
    console.log(object1.name)
    printperson();
});

// html 에 자바 스크립트 연결 확인
console.log("connect javaScript");


// dom 객체 선언하고 해당 객체에서 내부html 바꾸는 법
const $ul = document.querySelector('ul');
$ul.innerHTML =`<li>내용추가</li>`


// dom객체의 이벤트에 따른 css변경
const $btn = document.querySelector('#Btn1');
const $P = document.querySelector('#colorchanger');
$btn.addEventListener("click",(e)=>{
    if($btn===e.target){
        console.log("클릭한건 버튼입니다.")
        $P.classList.toggle("backgroundblue");
    }
})

// 객체 생성2
const object1 = {
    name: "KooSangmo",
    age : "12",
    fun1 : function(){
        console.log("object객체의 fun1 가장 추천되는 방식");
    }
}

// 객체 생성3
function object2(arg1,arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
    object2.prototype.fun2 = function(){
        console.log("object2 객체의 fun2")
    }
}


// forEach 사용 printperson 함수의 입력값은 ()로 출력 값은 return 을 사용
const printperson = 
()=>{["person1", "person2","person3"].forEach((person)=>{
    console.log(person);
})};


//async, await
// 함수의 return 값이 promise일 경우 보통 비동기함수 promise는 then, catch를 메서드로 가짐
//async로 정해진 함수는 return 값이 Pomise 객체이다.
// await로 비동기 처리되는 부분 앞에 붙으면 해당 프라미스가 처리될때까지 기다린다.
// 즉 async는 함수 자체를 promise로 만들고 안에 있는 await는 promise.then을 바로 반환받는다.

async function asyncfun(){
    let promisefunction = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("완료"), 1000);
    })
    console.log("testpoint1")

    let promisefun = await promisefunction;  // Promise 반환 함수에 await

    await new Promise((resolve,reject)=> {setTimeout(resolve,1000)});
    alert(promisefun);
    console.log("testpoint2")
}

asyncfun() // promise를 반환 Promise(return값) 형태



// api로부터 정보를 받아오는 fetch, axios
fetch('json형식 url')
    .then((response)=>response.json())   // json으로 가져옴
    .then((data) => console.log(data))
    .catch((e)=> console.log(e));

//axios 라이브러리을 통해 받은 정보 (callback 사용 )
axios.get('json형식 url')
    .then((data)=>{console.log(data)})
    .catch((e)=>{console.log(e)})


// async await 함수 사용시
try{
    const data = await axios.get('ulr');
}catch{
    
}


// 전송 파라미터가 있을 때
axios.get('json형식 url', {
    data:{
        id: 123,
        pw: 1234
    }
}).then(()=>{
    //response
}).catch(()=>{
    //error
})

// 보내기, 수정, 삭제 
axios.post().then(response=>{}).catch()
axios.put().then((response)=>{}).catch()
axios.delete().then(response=>{}).catch();