import React, {Component} from "react";

// 실행 순서 constructor -> static function -> render
class R006_LifeCycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps call :'+props.prop_value);
        return {};
    }
    
    constructor(props){
        super(props);
        this.state ={};
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render call');
        return(
            <h2> [this is constructor function]</h2>
        )
    }
}

export default R006_LifeCycleEx;