import React, {Component} from "react";

// render() 를 통해 해당 컴포넌트 호출시 나오는 return 값 설정
class R004_LifeCycleEx extends Component{
    render(){
        console.log('3. rendercall');
        return (
            <h2>[this is Render function]</h2>
        )
    }
}

export default R004_LifeCycleEx;