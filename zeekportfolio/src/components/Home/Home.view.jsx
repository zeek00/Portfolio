import {React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.style.css'
import Drawer from "../Drawer/Drawer.view";
import {AiFillGithub, AiFillLinkedin, AiOutlineDribbble, AiOutlineTwitter} from "react-icons/ai";
import NavigationView from "../Navigation/Navigation.view";
import doodle from "../../assets/svg/portfoliodoodle.svg"
import Typewriter from "typewriter-effect";



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
                  <Col md={12}  lg={7}>
                      <div className="doodle-container">
                          <img src={doodle}  alt="SVG logo image"/>
                          {/*<img src={man} className="man" alt="SVG logo image"/>*/}
                      </div>
                  </Col>

                  <div className="content">
                    <Col  md={12}  lg={7} >
                      <h2>Isaac Isewede</h2>
                      <div className="intro">
                          <h1>I'm a </h1>
                          <div className='auto-type'>
                              <Typewriter
                                  style={{color: 'red'}}
                                  options={{
                                      strings: ["Developer", "Creative", "Freelancer" ],
                                      autoStart: true,
                                      loop: true,

                                  }}
                                 />
                              </div>
                      </div>
                    </Col>

                    <Col  md={12} lg={5} className='social-links'>

                        <div className="social-link-box">
                            <a target={"_blank"} href="https://github.com/zeek00">
                                <AiFillGithub className='social-icons'/>
                            </a>
                            <a target={"_blank"} href="https://www.linkedin.com/in/isaacisewede/">
                                <AiFillLinkedin className='social-icons'/>
                            </a>
                            <a target={"_blank"} href="https://twitter.com/datboy_zeek">
                                <AiOutlineTwitter className='social-icons'/>
                            </a>
                            <a target={"_blank"} href="https://dribbble.com/swirl_xx">
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
