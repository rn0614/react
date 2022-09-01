// IIFE  (fun(){})(); 의 경우 선언 즉시 바로 실행하는 함수, 호출하지 않아도 실행된다.
// 또한 다른 함수와 변수를 공유하지 않는 특징을 가져 closure를 예방 가능
const f1fun1=
(function f1(){
    console.log("test");
})();


// front단은 일정하게 사용자로부터 변환 키나 값을 받는다.
// 연속해서 받는 값을 처리하는 방식에는 2가지가 있다.
// debounce (가장 마지막 함수를 호출), throttle(일정시간마다 호출)

// debounce(func, delay)는 실행되는 함수중 가장 마지막으로 실행된 함수가 delay보다 빠르면 그 함수가 실행됨 
const debounce = (func, delay)=>{
    let timeoutId = null;
    return (...args)=>{
        clearTimeout(timeoutId);
        timeoutId= setTimeout(func.bind(null, ...args), delay);
    }
};

// throttle은 일정 주기로 계속 실행이 됨
const throttle = (func, dealy)=>{
    let throttled = false;
    return (...args) =>{
        if(!throttled){
            throttled = true;
            setTimeout(()=>{
                func(...args);
                throttled=falsse;
            }, dealy);
        }
    }
}

//감시대상
const target =document.querySelector('#Btn1');

console.log(target);
const trigger = async ()=>{
    
}

// Intersection Observer를 통해 화면 보여지는 여부(view point) 판단
const observerObject = new IntersectionObserver(
    // entry의 isintersecting 등의 속성으로 판단
    entry =>{
        console.log(entry);
    },
    ([{isIntersecting}])=>{
        if(isIntersecting) trigger();    // interscting이 true면 trigger를 실행
    }

)

observerObject.observe(target);

