import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Burger from "./Burger";
import './Drawer.styles.css'
import logo from "../../assets/logo@4x.png"


const Nav = styled.nav`
    .wrapper{
      display: none;
    }
    position: fixed;
    top: 0;
    width: 100%;
    height: 55px;
    background-color: rgb(0,0,0,0.7);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    z-index: 50;
  
    .logo{
      padding: 15px 0;
      color: #fff;
      font-size: 1.5rem;
    }
    
`;

const Drawer = () => {

    const navigate = useNavigate();
  return (
            <Nav>
                <div className="logo">
                    <img onClick={()=>{navigate('/home')}} src={logo} alt=""/>
                </div>
                <Burger/>



            </Nav>
         
    
   
  );
}

export default Drawer;
