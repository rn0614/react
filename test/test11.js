function loadScript(src){
    let script = document.createElement('script');
    script.src =src;
    document.head.append(script);
}

loadScript('./loadScript.js');

// loadScript 후 충분한 시간을 확보하지 못함
// testFunc(); Error


function loadScript2(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}


// 즉 1번 loadScript = > 2번 func 를 위해서는 callback을 사용해야함.
loadScript2('./loadScript.js', function(){
    testFunc(); // 실행이 제대로 되는 것을 확인 할 수 있음.
})


function loadScript3(src, callback){
    let script = document.createElement('script');
    script.src =src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러 발생`));

    document.head.append(script);
}


// 일반적인 사용법
loadScript3('./loadScript.js', function(error,script){
    if(error){
        console.log('에러발생');
    }else{
        console.log('loadScript3 실행');
    }
})


showCircle(150,150,100, div=>{
    div.classList.add('mssage-ball');
    div.append('안녕하세요');
})

function showCircle(cx,cy,radius, callback){
    // 원을 크게 만드는 로직
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx +'px';
    div.style.top = cy +'px';
    div.className ='circle';
    document.body.append(div);

    setTimeout(()=>{
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend',
            function handler(){
                div.removeEventListener('transitionend', handler);
                callback(div);
            }
        )
    },1000)
}


// promise

let promise = new Promise(function(resolve, reject){
    // 코드 executor (제작코드)
    // 코드에 따라 executor 는 resolev, reject 중 하나를 반환
    // resolve(value), reject(error)
    resolve("완료")
})

// promise 객체의 내부 프로퍼티
// state => 대기/성공/실패 : pending/ fulfilled/ rejected
// result => 대기/성공/실패 : undefined / value / error

// promise 객체는 바로실행됨
promise.then(console.log);


// promise 작성
function loadScript4(src){
    return new Promise(function(resolve, reject){
        let script = document.createElement('script');
        script.src = src;

        script.onload = ()=>resolve(script);
        script.onerror = ()=>reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

        document.head.append(script);
    });
}

let promise2 = loadScript4("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script =>console.log(`${script.src}를 불러왔습니다.`),
    error => console.log(`Error: ${error.message}를 불러왔습니다.`)
)

promise.then(script => console.log('또다른 핸들러'))


//

function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,ms);
    });
}
delay(3000).then(()=>alert('3초 후 실행'))