import {React, useState} from "react";
import {AiFillFolder} from "react-icons/ai";
import style from './Portfolio.module.css'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Filetype from "./Filetype";

const File = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <Container>
            <div className={style.design} onClick={handleShow} >
                <span><AiFillFolder /></span>
                <div className={style.title}>
                    <a target={"_blank"} rel="noreferrer" href={props.link}>
                        <p>{props.name}</p>
                    </a>
                </div>
            </div>
               
            
            <Modal 
            show={show} 
            onHide={handleClose}
            dialogClassName="custom-modal modal-xl"
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={style.modalBody} >
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