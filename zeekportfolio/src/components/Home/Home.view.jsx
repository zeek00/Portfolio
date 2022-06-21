import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.style.css'
import Drawer from "../Drawer/Drawer.view";
import Social from "../Social/Social.view";
import {AiFillGithub, AiFillLinkedin, AiOutlineDribbble, AiOutlineTwitter} from "react-icons/ai";


function Home() {
    const navigate = useNavigate();
  return (

      <div className="home">
          <nav className="header-container">
              <Drawer/>
          </nav>

          <div className="wrapper">
              <ul className="nav-menu">
                  <div className="link-area">
                      <li className="nav-item">
                          <a onClick={()=>{navigate('/home')}}  className="nav-link">Home</a>
                      </li>

                      <li className="nav-item">
                          <a onClick={()=>{navigate('/about')}} className="nav-link">About</a>
                      </li>

                      <li className="nav-item">
                          <a onClick={()=>{navigate('/portfolio')}}  className="nav-link">Portolio</a>
                      </li>

                      <li className="nav-item">
                          <a onClick={()=>{navigate('/contact')}} className="nav-link">Contact</a>
                      </li>
                  </div>
              </ul>
          </div>

                <Container>
                  <Row>
                      <div className="content">
                        <Col   lg={7} >
                          <h2>Isaac Isewede</h2>
                        </Col>

                        <Col  lg={5} className='social-links'>

                            <div className="social-link-box">
                                <AiFillGithub className='social-icons'/>
                                <AiFillLinkedin className='social-icons'/>
                                <AiOutlineTwitter className='social-icons'/>
                                <AiOutlineDribbble className='social-icons'/>

                            </div>
                        </Col>
                      </div>


                  </Row>
                </Container>
      </div>

  );
}

export default Home;
