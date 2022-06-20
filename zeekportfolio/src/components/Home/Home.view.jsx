import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.style.css'
import Drawer from "../Drawer/Drawer.view";
import Social from "../Social/Social.view";


function Home() {
  
  return (

    <Container>

      <Row>
        <Col sm={12}>
          <Drawer/>
        </Col>
        
      </Row>
      

      <Row>
        <Col sm={12} md={12} lg={10} className='name'>
          
        </Col>
        <Col sm={12} md={12} lg={2} className='social-links'>
          <Social/>
        </Col>
      </Row>
    </Container>
   
  );
}

export default Home;
