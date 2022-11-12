import React, {Component} from "react";

// 실행 순서 constructor -> static function -> render
class R007_LifeCycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps call :'+props.prop_value);
        return {temp_state:props.prop_value};
    }
    
    constructor(props){
        super(props);
        this.state ={};
        console.log('1. constructor Call');
    }

    // 모든 화면 처리후 초기화로 많이 사용됨
    componentDidMount(){
        console.log('4. componentDidMount call');
        console.log('5. temp_state : '+ this.state.temp_state);

    }

    render(){
        console.log('3. render call');
        return(
            <h2> [this is constructor function]</h2>
        )
    }
}

export default R007_LifeCycleEx;