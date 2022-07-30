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
