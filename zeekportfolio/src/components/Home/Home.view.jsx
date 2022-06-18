import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.style.css'
import Drawer from "../Drawer/Drawer.view";


function Home() {
  
  return (

    <Container>

      <Row>
        <Col sm={12}>
          <Drawer/>
        </Col>
        
      </Row>
      

      <Row>
        <Col sm={6} lg={10} class='name'>
          <h2>Isaac Isewede
          
          </h2>
        </Col>
        <Col sm={6} lg={2} class='social-links'>
          <h2>Zeek</h2>
        </Col>
      </Row>
    </Container>
   
  );
}

export default Home;
