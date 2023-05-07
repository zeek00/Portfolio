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
            <div className="design"onClick={handleShow} >
                <span><AiFillFolder /></span>
                <div className="title">
                    <a target={"_blank"} rel="noreferrer" href={props.link}>
                        <p>{props.name}</p>
                    </a>
                </div>
            </div>
               
            
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
                        link={props.link}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                
                </Modal.Footer>
            </Modal>
            
        </Container>
       
    );
};

export default File