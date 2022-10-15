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
        // 줄임형 있으면 ++ 없으면 1
        //result[w] = ++result[w] || 1; 
    }
    
    return result;
} 

console.log(charCount("aabbsdwaa!!!W$#@"));


function charCount2(str){
    var obj={};
    for (var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char]= ++obj[char] || 1;
        }
    }
    return obj;
}


Array.from({length:n}, (_,i)=>i+1);