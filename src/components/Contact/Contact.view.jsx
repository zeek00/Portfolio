import React from 'react';
import './Contact.styles.css'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RiUserFill} from 'react-icons/ri'
import {FiShare2} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter,AiOutlineDribbble } from 'react-icons/ai';
import Form from 'react-bootstrap/Form'
import Drawer from "../Drawer/Drawer.view";
import NavigationView from "../Navigation/Navigation.view";


function Contact () {
    const navigate = useNavigate();
    return(

   <div className='contact'>

       <div className="drawercomp">
           <Drawer/>
       </div>

       <div className="wrapper">
           <NavigationView/>
       </div>

    <Container>
        <section className="contact-area">
            <Row>
                <Col sm={12} md={12} lg={12} >
                            <Container>

                                <h5>Contact   <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                    <span className='dot'>.</span>
                                </h5>
                                <h2 className='section-title'>
                                    CONTACT ME
                                </h2>
                                <Row>
                                    <Col md={12} lg={6} >
                                        <div className="d-flex align-items-stretch mb-4 info-area">
                                            <div className="content-area">
                                                <div className="icon-area">
                                                    <div className='icons-border'>
                                                        <RiUserFill className='icons'/>
                                                    </div>
                                                </div>

                                                <h3>Isaac Isewede</h3>
                                                <p>Hull, United Kingdom</p>

                                            </div>
                                        </div>
                                        <div className="d-flex align-items-stretch mb-4 info-area">
                                            <div className="content-area">
                                                <div className="icon-area">
                                                    <div className='icons-border'>
                                                        <FiShare2 className='icons'/>
                                                    </div>
                                                </div>
                                                <h3>Social Accounts</h3>
                                                <p>

                                                    <a href="https://github.com/zeek00">
                                                        <AiFillGithub className='social-acc-icons'/>
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/isaacisewede/">
                                                        <AiFillLinkedin className='social-acc-icons'/>
                                                    </a>
                                                    <a href="https://twitter.com/datboy_zeek">
                                                        <AiOutlineTwitter className='social-acc-icons'/>
                                                    </a>
                                                    <a href="https://dribbble.com/swirl_xx">
                                                        <AiOutlineDribbble className='social-acc-icons'/>
                                                    </a>
                                                </p>
                                            </div>


                                        </div>
                                        <div className="d-flex align-items-stretch mb-4 info-area">
                                            <div className="content-area">
                                                <div className="icon-area">
                                                    <div className='icons-border'>
                                                        <MdAlternateEmail className='icons'/>
                                                    </div>
                                                </div>
                                                <h3>Email</h3>
                                                <p>
                                                    isaac.isewede@gmail.com
                                                </p>
                                            </div>


                                        </div>
                                    </Col>
                                    <Col md={12} lg={6} >
                                        <div className="d-flex align-items-stretch mb-4 info-area h">
                                            <div className="content-area">
                                                <form method='' id='contact-form' className='contact-form'>
                                                    <Form>
                                                        <Row>
                                                            <Col md={12} lg={5} >
                                                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name *"/>
                                                                <div className="validate name-validate"></div>


                                                            </Col>

                                                            <Col md={12} lg={7} >
                                                                <input type="text" name="email" class="form-control" id="email" placeholder="Your Email *"/>
                                                                <div className="validate email-validate"></div>

                                                            </Col>

                                                        </Row>
                                                        <Form.Group className="message-area">
                                                            <textarea class="form-control" name="message" id="message" rows="5" placeholder="Message *"></textarea>

                                                        </Form.Group>

                                                        <div class="text-center mb-2">
                                                            <button class="send-message-btn" type="submit">Send Message
                                                            </button>
                                                        </div>


                                                    </Form>


                                                </form>


                                            </div>
                                        </div>

                                    </Col>

                                </Row>
                            </Container>
                </Col>
            </Row>
        </section>
    </Container>
   </div>

);
}

export default Contact
