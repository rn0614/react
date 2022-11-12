import React, {Component} from "react";
import datatype from 'prop-types';   // propTypes 쓰기 위해 임포트


// 실행 순서 constructor -> static function -> render
class R018_PropsDatatype extends Component{
    render(){
        let{
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return(
            <div style={{padding:"0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <p>BooleanProps: {Boolean.toString()}</p>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

// 맞지 않으면 화면단 호출할 때 에러 나옴
R018_PropsDatatype.propTypes ={
    String: datatype.string,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson : datatype.object,
    Function : datatype.func,
}

export default R018_PropsDatatype;