import React from 'react'
import './Portfolio.styles.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filetype = (props) =>{
    const id = props.id
    return(
        <div>
            {id === 3 ? (<div>Hey</div>) : (<div>hi</div>)}
        </div>

    );

};
export default Filetype