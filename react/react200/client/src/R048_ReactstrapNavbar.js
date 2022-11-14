import React, {Component} from "react";
import {
    
    TabContent, TabPane,
    Table,
    PopoverHeader, UncontrolledPopover, PopoverBody, Button,
    Pagination, PaginationItem, PaginationLink,
    Collapse, Navbar, NavbarToggler,NavbarBrand, Nav, NavItem, NavLink
    } 
    from 'reactstrap'; 


class R048_ReactstrapNavbar extends Component{
    constructor(props){
        super(props);
        this.state = {collapsed: false, TabState: 'React'}
    }

    pagination = (type) => {
        alert("Go "+type)
    }

    toggle = ()=>{
        this.setState({collapsed: !this.state.collapsed})
    }

    tabtoggle = (tabnum)=>{
        if(this.state.TabState !==tabnum) this.setState({TabState:tabnum})
    }


    render(){
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={()=>{this.tabtoggle('React');}}>First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>{this.tabtoggle('200');}}>Second Tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="200"><h3>200</h3></TabPane>
                </TabContent>
                <Table>
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>Book Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>React 100</td>
                            <td>\100000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>React 200</td>
                            <td>\200000</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>Popover contnet</PopoverBody>
                </UncontrolledPopover>
                <br/>
                <Pagination size="1g" aria-label="Pagenavigation example">
                    <PaginationItem>
                        <PaginationLink previous onClick={e=>this.pagination("previous")}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("1")}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("2")}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={e=>this.pagination("last")}/>
                    </PaginationItem>
                </Pagination>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://example.com">200</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}


export default R048_ReactstrapNavbar;