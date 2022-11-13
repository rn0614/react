import React, {PureComponent} from "react";


class R027_ComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            StateString : this.props.reactString,
            StateNumber:200,
        }
    }

    StateChange = (flag)=>{
        if(flag === 'direct') this.setState({StateString:'디엑트'});
        if(flag === 'setstate') this.setState({StateString : '셋액트'});
    }


    render(){
        return(
            <div style={{padding:"0px"}}>
                <button onClick={(e)=> this.StateChange('direct', e )}>direct</button>
                <button onClick={(e)=> this.StateChange('setstate', e )}>setstate</button>
                <br/>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}


export default R027_ComponentClass;