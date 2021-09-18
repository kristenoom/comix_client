import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login'
import Signup from './Signup';

const Auth = (props) => {
    return(
        <Container className='master-container'>
            <Row>
                <Col md='5'>
                   <Signup />
                </Col>
                <Col md='4'>
                    <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;