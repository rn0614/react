import React, {Component} from "react";

// 실행 순서 constructor -> static function -> render
class R008_LifeCycleEx extends Component{
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
        //state 의 변경을 실핸하는 setState함수  shouldComponentUpdate() 를 호출함
        this.setState({tmp_state2 : true});
    }

    // 생명주기에서 변경 발생시 실행되는 함수
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call /  tmps_state2 = '+ state.tmp_state2);
        return state.tmp_state2  // return 반환값이 true 일 때는 render 함수를 한번더 실행
    }

    render(){
        console.log('3. render call');
        return(
            <h2> [this is constructor function]</h2>
        )
    }
}

export default R008_LifeCycleEx;