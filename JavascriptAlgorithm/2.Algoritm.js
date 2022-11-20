// 소수 구하기 N 값이 소수인지 확인
// Math.sqrt(N)까지 나눴을 때 0이 되는 값이 없다면 소수
function isPrime(N){
    if(N==1) return false;
    for(var i=2; i<Math.sqrt(N); i++){
        if(N%i===0) return false;
    }
    return true;
}

// 최대공약수 구하기  => 최소공배수= (두수 곱 /최대공약수)
function gcd(a,b){
    return b ? gcd(b,a%b) : a;
}

// 약수 리스트 구하기
// Math.sqrt 까지 약수 구하고 그 약수에 곱해서 N이 되는 값도 추가
function getDivision(N){
    var division =[];
    for(let i=1; i<=Math.sqrt(N);i++){
        if(N%i==0){
            division.push(i);
            if(N/i!=i) division.push(N/i);
        }
    }
    division.sort((a,b)=> a-b);
    return division;
}


// 배열에서 특정 요소 개수 object 리턴
function countReturn(array){
    var tempObj={};
    for(w of array){
        tempObj= ++tempObj||1;
    }
    return tempObj;
}

)