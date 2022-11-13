import React, {Component} from "react";

class R033_ReturnMap extends Component{
    render(){
        const element_Array = [
            <li key="test1">react</li>
            ,<li key="test2">200</li>
            ,<li key="test3">ArrayMap</li>
            ,<li key="test4">test</li>
        ]

        return (
            <ul>
                {element_Array.map((array_val)=> array_val)}
            </ul>
        )
    }
}


export default R033_ReturnMap;