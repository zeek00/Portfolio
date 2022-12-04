import React, {useEffect, useRef, useState} from 'react';
import './Contact.styles.css'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import id from '../../config/id'
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
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
    const form = useRef();
    const initValues = {user_name: "", user_email: "", message: ""};
    const [formValues, setValues] = useState(initValues);
    const [formErrors, setErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...formValues, [name]: value});
    }

    const contactValidation = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.user_name){
            errors.user_name = "Name is required";
            document.getElementById("name").style.border = "1px solid #ff1737";
        }
        if(!values.user_email){
            errors.user_email = "Email is required";
            document.getElementById("email").style.border = "1px solid #ff1737";
        }else if(!regex.test(values.user_email)){
            errors.user_email = "This is not a valid email format";
            document.getElementById("email").style.border = "1px solid #ff1737";
        }
        if(!values.message){
            errors.message = "message is required";
            document.getElementById("message").style.border = "1px solid #ff1737";
        }else {
            let m = document.getElementById("message");
            let e = document.getElementById("email");
            let n = document.getElementById("name");
            n.style.border = "none";
            e.style.border = "none";
            m.style.border = "none";
            n.value = " ";
            e.value = " ";
            m.value = " ";

        }
        return errors;

    }

    useEffect(() =>{
        const serviceID = id.serviceID
        const tempID = id.templateID
        const publicKey = id.publicKey

        if(Object.keys(formErrors).length === 0 && isSubmit){
            emailjs.sendForm(serviceID, tempID, form.current, publicKey).then((result) => {
                toast.success("sending successful!",{
                    position: toast.POSITION.TOP_RIGHT,

                })
                console.log(result.text);
                }, (error) => {
                    toast.error("sending failed!",{
                        position: toast.POSITION.TOP_RIGHT,

                    })
                    console.log(error.text);
                });
        }

    },[formErrors])

    function clearForm (){
        console.log('clicked');
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let msg = document.getElementById('message')

        name.value = "";
        email.value = "";
        msg.value = "";
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(contactValidation(formValues));
        setSubmit(true);
        clearForm();
    }

    return(

           <div className='contact'>
               <ToastContainer theme= "dark" autoClose={1000} />
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
                                                    <div className="info">
                                                        <h3>Isaac Isewede</h3>
                                                        <p>Hull, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-stretch mb-4 info-area">
                                                <div className="content-area">
                                                    <div className="icon-area">
                                                        <div className='icons-border'>
                                                            <FiShare2 className='icons'/>
                                                        </div>
                                                    </div>
                                                    <div className="info">
                                                        <h3>Social Accounts</h3>
                                                        <p>
                                                        <AiFillGithub className='social-acc-icons'/>
                                                        <AiFillLinkedin className='social-acc-icons'/>
                                                        <AiOutlineTwitter className='social-acc-icons'/>
                                                        <AiOutlineDribbble className='social-acc-icons'/>
                                                        </p>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="d-flex align-items-stretch mb-4 info-area">
                                                <div className="content-area">
                                                    <div className="icon-area">
                                                        <div className='icons-border'>
                                                            <MdAlternateEmail className='icons'/>
                                                        </div>
                                                    </div>
                                                    <div className="info">
                                                        <h3>Email</h3>
                                                        <p>isaac.isewede@gmail.com</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </Col>
                                        <Col md={12} lg={6} >
                                            <div className="d-flex align-items-stretch mb-4 info-area h">
                                                <div className="content-area">
                                                    <form method="post" ref={form} onSubmit={handleSubmit} id='contact-form' className='contact-form'>

                                                            <Row>
                                                                <Col md={12} lg={5} >
                                                                    <input type="text" name="user_name" value={formValues.user_name} onChange={handleChange} className="form-control" id="name" placeholder="Your Name *"/>
                                                                    <p className='error'>{formErrors.user_name}</p>
                                                                </Col>

                                                                <Col md={12} lg={7} >
                                                                    <input type="email" name="user_email" value={formValues.user_email} onChange={handleChange} className="form-control" id="email" placeholder="Your Email *"/>
                                                                    <p className='error'>{formErrors.user_email}</p>
                                                                </Col>
                                                            </Row>
                                                            <Form.Group className="message-area">
                                                                <textarea className="form-control" name="message" value={formValues.message} onChange={handleChange} id="message" rows="5" placeholder="Message *">
                                                                </textarea>
                                                                <p className='error'>{formErrors.message}</p>
                                                            </Form.Group>

                                                            <div className="text-center mb-2">
                                                                <input id="send-message-btn" type="submit" value="Send" />
                                                            </div>
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
