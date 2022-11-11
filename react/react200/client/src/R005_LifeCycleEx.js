import React, {Component} from "react";

// render() 를 통해 해당 컴포넌트 호출시 나오는 return 값 설정
class R005_LifeCycleEx extends Component{
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

export default R005_LifeCycleEx;