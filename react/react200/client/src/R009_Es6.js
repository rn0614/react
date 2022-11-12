import React, {Component} from "react";

// 실행 순서 constructor -> static function -> render
class R009_Es6 extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    // 모든 화면 처리후 초기화로 많이 사용됨
    componentDidMount(){
        var jsString1='자바스크립트'
        var jsString2='입니다.\n다음줄입니다.'
        console.log(jsString1+' 문자열'+ jsString2);

        var Es6String1 ='ES6';
        var Es6String2 ='입니다'
        console.log(`${Es6String1} 문자열 ${Es6String2}!
        --- 다음줄 입니다.`)

        var LongString ='ES6 에 추가된 String 함수들입니다.(startsWith, endsWith, includes)';
    }

    
    render(){
        return(
            <h2> [this is ES^ String]</h2>
        )
    }
}

export default R009_Es6;