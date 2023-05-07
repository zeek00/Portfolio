import React from 'react'
import './Portfolio.styles.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filetype = (props) =>{
    const id = props.id
    return(
        <div>
            {id === 3 ? (<div>
               <h1>Coming soon ..</h1>
               <a target='#' className='link' href={props.link}>visit this link for now:</a>
               </div>) : (<div>
                <h1>Almost here ..</h1>
                <a target='#' className='link' href={props.link}>visit this link for now:</a>
                </div>)}
        </div>

    );

};
export default Filetype