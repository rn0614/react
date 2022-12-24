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