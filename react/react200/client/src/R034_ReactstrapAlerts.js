import React, {Component} from "react";
// Breadcrumb, BreadcrumbItem : 해당 위치로 이동하는 기능
// Badge, Button : 표시 배지 및 버튼
// Alert, UncontrolledAlert : 알람 목록
// ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem : 선택상자
// ButtonGroup : 버튼 그룹
import {ButtonGroup,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem, Badge, Button, Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAlerts extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen : false
            ,number : 10
        }
    }

    move = (type, e)=>{
        if(type ==='Left'){
            this.setState({number:this.state.number - 1})
        }else if(type==='Right'){
            this.setState({number:this.state.number + 1})
        }
    }

    toggle = (e)=>{
        this.setState({dropdownOpen: !this.state.dropdownOpen});
    }


    render(){
        return(
            <div style={{padding:"0px"}}>
                <ButtonGroup style={{padding:"0px"}}>
                    <Button color="primary" onClick={e=>this.move('Left')}>Left</Button>
                    <Button color="success" onClick={e=>this.move('Middle')}>Middle</Button>
                    <Button color="dark" onClick={e=>this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br/>{this.state.number}




                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret> 버튼 Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>헤더</DropdownItem>
                        <DropdownItem disabled>비활성화 버튼</DropdownItem>
                        <a href="http://example.com/">
                            <DropdownItem>example 웹 사이트로 이동</DropdownItem>
                        </a>
                        <DropdownItem onClick={e=>alert("Alert버튼")}>Alert 버튼</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>





                <div id="top">
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
                    </Breadcrumb>
                    <div id="bottom" style={{marginTop:"1000px"}}>
                        <span>bottom</span>
                    </div>
                </div>



                <h1> Product Name<Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://example.com" color="light">GoLink</Badge>
                <br/>
                <br/>
                <br/>
                <br/>
                <Alert color="light">
                    Simple Alert [color:light]
                </Alert>
                <UncontrolledAlert color="warning">
                    Uncontrolled Alert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }
}


export default R034_ReactstrapAlerts;