import React, {Component} from "react";
import $ from 'jquery';

// 실행 순서 constructor -> static function -> render
class R016_Jquery extends Component{
    
    input_alert = (e)=>{
        var input_val = $('#inputId').val();
        alert(input_val);
    }

    
    render(){
        return(
            <div>
                <h2> [this is JQuery]</h2>
                <input id="inputId" name="inputName"/>
                <button id="buttonId" onClick={e => this.input_alert(e)}>
                    JqueryButton
                </button>
            </div>
        )
    }
}

export default R016_Jquery;