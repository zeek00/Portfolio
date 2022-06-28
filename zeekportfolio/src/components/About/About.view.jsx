import React from 'react'
import './About.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {GiTechnoHeart, GiSoccerBall, GiMountainRoad,GiBookCover} from "react-icons/gi"
import {MdOutlineMenuBook} from "react-icons/md"
import {TbAtomOff} from "react-icons/tb"
import aboutimage from "../../assets/zeek.JPG"
import {COLOR} from "rsuite/utils";
import {RiFolderMusicFill} from "react-icons/ri";


function About() {
    const navigate = useNavigate();
    return(
        <div className="about">
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
                            <a onClick={()=>{navigate('/portfolio')}}  className="nav-link">Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={()=>{navigate('/contact')}} className="nav-link">Contact</a>
                        </li>
                    </div>
                </ul>
            </div>
            <Container>
                <section className="contact-area">
                    <h5>About me <span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span></h5>
                <Row>
                        <Col md={12} lg={4} >
                            <div className="img bio">
                                <img src={aboutimage} className="img-style" alt="img place"/>
                            </div>
                        </Col>

                    <Col md={12} lg={8}>
                        <div className="experience">
                            Experience
                        </div>
                    </Col>

                    <Col md={12} lg={12}>
                        <section className="skills top">
                            <h5>Skills   <span className='dot'>.</span>
                                <span className='dot'>.</span>
                                <span className='dot'>.</span>
                                <span className='dot'>.</span>
                            </h5>
                            <div className="skills-wrap">
                                <h6>Javascript/React/Node</h6>
                            </div>
                            <div className="skills-wrap">
                                <h6>.NET/C#/C++</h6>
                            </div>
                            <div className="skills-wrap">
                                <h6>Illustrator/Photoshop/XD</h6>

                            </div>
                            <div className="skills-wrap">
                                <h6>MySql/Mongodb</h6>
                            </div>
                            <div className="skills-wrap">
                                <h6>HTML/CSS/Bootstrap</h6>
                            </div>
                            <div className="skills-wrap">
                                <h6>Figma</h6>
                            </div>
                        </section>
                    </Col>

                    <Col md={12} lg={12}>
                        <section className="interests top">
                            <h5>Interests   <span className='dot'>.</span>
                                            <span className='dot'>.</span>
                                            <span className='dot'>.</span>
                                            <span className='dot'>.</span>
                            </h5>
                            <div className="interests-wrap">
                                <GiTechnoHeart style={{
                                    color: '#edf060',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Technology
                                </h6>
                            </div>
                            <div className="interests-wrap">

                                <RiFolderMusicFill style={{
                                    color: '#ff4242',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Music
                                </h6>
                            </div>
                            <div className="interests-wrap">
                                <GiSoccerBall style={{
                                    color: '#FF6600',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Soccer
                                </h6>
                            </div>
                            <div className="interests-wrap">
                                <GiMountainRoad style={{
                                    color: '#42ab34',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Tourism
                                </h6>
                            </div>
                            <div className="interests-wrap">
                                <TbAtomOff style={{
                                    color: '#2b3ff2',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Sci-Fi
                                </h6>
                            </div>
                            <div className="interests-wrap">
                                <GiBookCover style={{
                                    color: '#af0c32',
                                    margin: '0 auto',
                                }
                                } className="skills-icon"/>
                                <h6>
                                    Lore
                                </h6>
                            </div>




                        </section>

                    </Col>

                </Row>
                </section>

            </Container>

        </div>

    );

}
export  default About