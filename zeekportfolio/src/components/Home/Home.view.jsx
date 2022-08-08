import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.style.css'
import Drawer from "../Drawer/Drawer.view";
import {AiFillGithub, AiFillLinkedin, AiOutlineDribbble, AiOutlineTwitter} from "react-icons/ai";
import NavigationView from "../Navigation/Navigation.view";




function Home() {
    const navigate = useNavigate();
  return (

      <div className="home">
          <div className="drawercomp">
              <Drawer/>
          </div>


          <div className="wrapper">
                <NavigationView/>
          </div>

          <Container>
              <Row>
                  <div className="content">
                    <Col  md={12}  lg={7} >
                      <h2>Isaac Isewede</h2>
                      <div className="intro">
                          <h1>I'm a </h1>
                          <h1 id="typing"> Developer
                          </h1>
                      </div>
                    </Col>

                    <Col  md={12} lg={5} className='social-links'>

                        <div className="social-link-box">
                            <a href="https://github.com/zeek00">
                                <AiFillGithub className='social-icons'/>
                            </a>
                            <a href="https://www.linkedin.com/in/isaacisewede/">
                                <AiFillLinkedin className='social-icons'/>
                            </a>
                            <a href="https://twitter.com/datboy_zeek">
                                <AiOutlineTwitter className='social-icons'/>
                            </a>
                            <a href="https://dribbble.com/swirl_xx">
                                <AiOutlineDribbble className='social-icons'/>
                            </a>
                        </div>
                    </Col>
                  </div>
              </Row>
          </Container>
      </div>

  );
}

export default Home;
