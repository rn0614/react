Promise.all([
    new Promise(resolve => setTimeout(()=>resolve(1),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),4000)),
    new Promise(resolve => setTimeout(()=>resolve(3),1000)),
    10 //단순 값도 전달 가능
]).then(result=>console.log(result));   // [1,2,3,10]

// Promise.all은 하나라도 reject 나오면 reject 처리, and 조건임

// promise.race 는 복수의 Promise를 받으며 가장 먼저 처리되는 결과를 반환함.

Promise.race([
    new Promise(resolve => setTimeout(()=>resolve(1),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),4000)),
    new Promise(resolve => setTimeout(()=>resolve(3),1000)),
    10 //단순 값도 전달 가능
]).then(result=>console.log(result));   // 3


//async 함수로 편하게 Promise 이용하기
async function f(){
    return 1; // Promise.resolve(1) 과 동일
}  


async function f2(){
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve("완료"),1000)
    });

    let result = await promise;  // await는 promise 객체 앞에 사용되어 해당 promise 가 끝날 때까지 기다림

    console.log(result); //  result 는 "완료"
}

async function f3(){
    try{
        await Promise.reject(new Error("에러 발생!"));  // throw new Error("에러발생") 과 동일
    }catch{
        console.log("await의 에러를 잡음")
    }
}


async function loadJson(url){
    try{
        let response = await fetch(url);
        if(response.status ==200) return response.json();
    }catch{
        throw new Error(response.status);
    } 
}
loadJson('no-such-user.json')
.catch(alert);   // 왜 이게 안되지?
console.log("qq")