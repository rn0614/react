function sum(num1, num2){
    return num1+num2
}
console.log(sum(2,3));



function charCount(string1){
    var result={};
    var _result = string1.toLowerCase().split("");               // toLowerCase, toUpperCase

    for( w of _result){
        if(w.charCodeAt(0)<97 || w.charCodeAt(0)>122) continue;  // charAt , charCodeAt

        if (result[w]){
            result[w]=result[w]+1  // result[w]++                // 객체[parmeter] = value   / 
        }
        else{
            result[w]=1;
        }
    }
    
    return result;
}

console.log(charCount("aabbsdwaa!!!W$#@"));