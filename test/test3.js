const func1 = ()=>{console.log("test1")};

//const func2 = func1   //  func1 함수 자체가 복제되어 func2로 들어감
const func2 = func1()   //  실행하고 남은 반환값이 func2로 들어감

console.log(func2);  // undefined 