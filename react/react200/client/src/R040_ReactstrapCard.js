import React, {Component} from "react";
import {
    Collapse, Navbar, NavbarToggler,NavbarBrand, Nav, NavItem,
    Modal, ModalHeader, ModalBody, ModalFooter,
    ListGroup, ListGroupItem, Badge,
    InputGroup, InputGroupText,
    Form,Label, Input, Row, Col, FormGroup,
    Fade,
    UncontrolledCollapse,
    UncontrolledCarousel,Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
        } 
    from 'reactstrap'; 

const items = [
    {
        src: 'https://han.gl/q6jDb',
        alteText : '슬라이드 1 대체문구',
        caption:'슬라이드 1 설명',
        header:'슬라이드 1 제목'
    },
    {
        src: 'https://han.gl/d4jbj',
        alteText : '슬라이드 2 대체문구',
        caption:'슬라이드 2 설명',
        header:'슬라이드 2 제목'
    },
    {
        src: 'https://han.gl/U7FFH',
        alteText : '슬라이드 3 대체문구',
        caption:'슬라이드 3 설명',
        header:'슬라이드 3 제목'
    },
]

class R040_ReactstrapCard extends Component{
    constructor(props){
        super(props);
        this.state = {fadeInOut: true, modal:false}
    }
    toggle = (e)=>{
        this.setState({fadeInOut: !this.state.fadeInOut})
    }
    modalToggle = (e)=>{
        this.setState({modal: !this.state.modal})
    }

    render(){
        return (
            <>
                <Button color="warning" onClick={this.modalToggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.modalToggle}>ModalHeader</ModalHeader>
                    <ModalBody>
                        The generated Lorem Ipsum is therefore alwayse free from repetition
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" onClick={this.modalToggle}>확인</button>
                        <button color="secondary" onClick={this.modalToggle}>닫기</button>
                    </ModalFooter>
                </Modal>

                <br/><br/><br/>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        Badge<Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#"></ListGroupItem>
                    <ListGroupItem tag="a" href="http://example.com">Link</ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e=>alert("button")}>Button</ListGroupItem>
                </ListGroup>
                <br/>

                <InputGroup>
                    <Input placeholder="userid"/>
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <Button>버튼</Button>
                </InputGroup>


                <Form>
                    <Label for="exampleGender">gender</Label>
                    <Input type="select" bsSize="sm">
                        <option>no select</option>
                        <option>woman</option>
                        <option>man</option>
                    </Input>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleAddress">address</Label>
                                <Input type="text" name="address" id="address"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleMobile">mobile</Label>
                                <Input type="text" name="mobile" id="mobile"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleAge">age</Label>
                                <Input type="text" name="age" id="age"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>


                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tage="h1">
                    <Card>
                        <CardBody>
                            REACT2000
                        </CardBody>
                    </Card>
                </Fade>

                <Button color="warning" id="toggle">
                    펼치기/ 접기
                </Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            REACT2000
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <UncontrolledCarousel items={items}/>
                <Card>
                    <CardImg top height="200px" src="http://asq.kr/4KkfRxZfR" alt="Card image"/>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}


export default R040_ReactstrapCard;