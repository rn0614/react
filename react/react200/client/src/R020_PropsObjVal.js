import React, {Component} from "react";
import datatype from "prop-types";


class R020_PropsObjVal extends Component{
    render(){
        let{
            ObjectJson
        } = this.props
        return(
            <div style={{padding:"0px"}}>
                <p>ObjectProps: {JSON.stringify(ObjectJson)}</p>
            </div>
        )
    }
}

// 초기값 세팅 안들어올 시 default 값으로 들어감
R020_PropsObjVal.defaultProps ={
    ObjectJson:{react:"리액트", twohundred:200}
}


R020_PropsObjVal.propTypes ={
    ObjectJson : datatype.any.isRequired, //필수로 지정하기 R021 *  any 추가 해야함

    // ObjectJson : datatype.shape({
    //     react:datatype.string,   
    //     twohundred:datatype.number
    // })
}


export default R020_PropsObjVal;