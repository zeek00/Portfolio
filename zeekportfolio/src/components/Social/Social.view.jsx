import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Social.style.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter,AiOutlineDribbble } from 'react-icons/ai';


const Social = () =>(
    <Container>
        <Row>
            <Col lg={2}></Col>
            <Col sm={12} md={12} lg={2}>
                
          
                <div className="social-link-box">
                    <AiFillGithub className='social-icons'/>
                    <AiFillLinkedin className='social-icons'/>
                    <AiOutlineTwitter className='social-icons'/>
                    <AiOutlineDribbble className='social-icons'/>
                    
                </div>
            </Col>
        </Row>
    </Container>

);

export default Social