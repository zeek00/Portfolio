import React from 'react'
import './About.styles.css'
import Drawer from "../Drawer/Drawer.view";

import {GiTechnoHeart, GiSoccerBall, GiMountainRoad,GiBookCover} from "react-icons/gi"
// import {MdOutlineMenuBook} from "react-icons/md"
// import {TbAtomOff} from "react-icons/tb"
import aboutimage from "../../assets/zeek.JPG"
import {RiFolderMusicFill} from "react-icons/ri";
import {BiAtom} from "react-icons/bi";
import NavigationView from "../Navigation/Navigation.view";
import Skills from './Skills.view';
import styled from 'styled-components';

const Container = styled.div`
 width: 90%;
 margin: 0 auto;
 height: auto;
 
 .contact-area{
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 2rem;
 }
 
`;


function About() {
    return(
        <div className="about">
            <div className="drawercomp">
                <Drawer/>
            </div>
            <div className="wrapper">
                <NavigationView/>
            </div>
            <Container>
                <section className="contact-area">
                    <h5>About me <span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span><span className='dot'>.</span></h5>
                        <div className="bio">
                            <div className="img">
                                <img src={aboutimage} className="img-style" alt="img place"/>
                            </div>

                            <div className="experience">
                                <p>Innovative Full stack developer with a Master's degree In Advanced Computer Science. Fortified with knowledge and experience in the implementation, design and development of web applications and software systems using languages such as React JS, HTML, CSS, JavaScript. Organized, meticulous and resourceful with an innovative approach to the development and project lifecycle, an enthusiastic team player able to collaborate as part of a team or work individually and capable of learning new technologies. </p>
                            </div>
                        </div>

                            <section className="skills top">
                                <h5>Skills  
                                    <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                </h5>
                                <div className="skills-wrap">
                                    <Skills/>  
                                </div>
                            </section>

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
                                    <BiAtom style={{
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


                </section>

            </Container>

        </div>

    );

}
export  default About