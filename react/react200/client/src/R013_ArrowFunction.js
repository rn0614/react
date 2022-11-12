import React, {Component} from "react";

// 실행 순서 constructor -> static function -> render
class R013_ArrowFunction extends Component{
    constructor(props){
        super(props);
        this.state ={
            arrowFuc : 'React200',
            num:3
        };
    }

    // 모든 화면 처리후 초기화로 많이 사용됨
    componentDidMount(){
        Function1(1);
        this.Function5(1,1,1)
        function Function1(num1){
            return console.log(num1 + '. Es5 Function');
        }
    }

    Function2 = (num1, num2)=>{
        let num3 = num1 + num2;
        console.log(num3 + '. Arrow Function : '+this.state.arrowFuc);  // constructor의 state를 꺼내 쓸 수 있음.
    }
    

    Function4(){
        setTimeout(function(){
            console.log('4. Es5 Callback Function bine : '+this.state.arrowFuc);
        }.bind(this), 100);
    }

    Function5 = (num1, num2, num3)=>{
        const num4 = num1+num2+num3;
        setTimeout(()=>{
            console.log(num4+'.Arrow Callback Function : '+this.state.arrowFuc);
        }, 100);
    }

    render(){
        return(
            <h2> [this is ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;