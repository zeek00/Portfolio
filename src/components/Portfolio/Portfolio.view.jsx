import React from 'react'
import './Portfolio.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";
import NavigationView from "../Navigation/Navigation.view";
import {AiFillFolder} from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio() {
    const navigate = useNavigate();
    return(
        <div className="portfolio">
            <div className="drawercomp">
                <Drawer/>
            </div>
            <div className="wrapper">
                <NavigationView/>
            </div>

            <div className="portfolio-area">
                <Container>
                    <Row>
                        <Col md={12} lg={4}>
                            <div className="design">
                                <AiFillFolder/>
                                <div className="title">
                                    <a target={"_blank"} href="https://drive.google.com/drive/folders/1pz-ukXQ2zpQDaz_p8pVG_RQUB8xYeX0G?usp=sharing">
                                        <p>GRAPHIC DESIGNS</p>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col md={12} lg={4}>
                            <div className="design">
                                <AiFillFolder/>
                                <div className="title">
                                    <a target={"_blank"} href="https://drive.google.com/drive/folders/1pZIW-rTXZBhxgW7v4qph4B6RPgQdqfYP?usp=sharing">
                                        <p>CVs</p>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col md={12} lg={4}>
                            <div className="design">
                                <AiFillFolder/>
                                <div className="title">
                                    <a target={"_blank"} href="https://github.com/zeek00">
                                        <p>PROJECTS</p>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>

    );

}
export  default Portfolio