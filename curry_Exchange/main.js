// 1. 박스 2개
// 2. 드랍다운
// 3. 환율정보
// 4. 드랍다운 아이템에서 리스트 바꾸면 아이템 변경
// 5. 금액 입력시 환전

let currencyRatio = {
    USD:{
        KRW:1281.51,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40,
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.00044,
        VND:1,
        unit:"동"
    }
}

let fromCurrency ='USD'
document.querySelectorAll("#from-currency-list a")
.forEach((menu)=>menu.addEventListener("click",function(){
    document.querySelector("#from-btn").textContent = this.textContent;
    fromCurrency = this.textContent;
    convert("from-input");
}));

let toCurrency ='USD'
document.querySelectorAll("#to-currency-list a")
.forEach((menu)=>menu.addEventListener("click",function(){
    document.querySelector("#to-btn").textContent = this.textContent;
    toCurrency = this.textContent;
    convert("to-input");
}));


function convert(val){
    if(val=="from-input"){
        let amount = document.getElementById("from-input").value;
        let convertedAmount = amount*currencyRatio[fromCurrency][toCurrency];
        document.querySelector("#to-input").value = convertedAmount;
    }else{
        let amount = document.getElementById("to-input").value;
        let convertedAmount = amount*currencyRatio[toCurrency][fromCurrency];
        document.querySelector("#from-input").value = convertedAmount; 
    }
} 



function solution(want, number, discount) {
    var answer = 0;
    var wantObj ={};
    for(var i=0; i<want.length; i++){
        wantObj[want[i]]= number[i]
    }
    let obj={};
    let curr=discount.slice(0,10);
    for(c of curr){
        obj[c]=++obj[c]||1
    }
    // 초기 데이터로 한번 실행
    if(Object.entries(wantObj).every(w=>obj[w[0]]>=w[1])){
        answer+=1
    }
    // 하나씩 바꾸면서 실행
    for(var i=0; i<discount.length-10;i++){
        // 처음 것 제거 및 10번째 것 추가
        obj[discount[i]]=--obj[discount[i]]||0;
        obj[discount[i+10]]=++obj[discount[i+10]]||1;
        if(Object.entries(wantObj).every(w=>obj[w[0]]>=w[1])){
            answer+=1
        }
    }
    return answer;
}
