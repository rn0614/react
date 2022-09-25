Promise.all([
    new Promise(resolve => setTimeout(()=>resolve(1),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),4000)),
    new Promise(resolve => setTimeout(()=>resolve(3),1000)),
    10 //단순 값도 전달 가능
]).then(result=>console.log(result));