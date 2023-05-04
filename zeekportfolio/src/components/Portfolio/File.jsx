import {React, useState} from "react";
import {AiFillFolder} from "react-icons/ai";
import './Portfolio.styles.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Filetype from "./Filetype";

const File = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <Container>
            <Row>
                <Col md={12} lg={4}>
                    <div className="design" onClick={()=>props.customClickEvent}>
                        
                        <span><AiFillFolder onClick={handleShow}/></span>
        
                        <div className="title">
                            <a target={"_blank"} href={props.link}>
                                <p>{props.name}</p>
                            </a>
                        </div>
                    </div>
                </Col>

            </Row>
            <div>
                <Modal 
                show={show} 
                onHide={handleClose}
                dialogClassName="modal-dialog modal-xl"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="file-container">
                            <Filetype
                            id={props.no}
                             />

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
        </div>
        </Container>
       
    );
};

export default File