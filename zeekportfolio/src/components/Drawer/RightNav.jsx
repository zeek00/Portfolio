import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row-reverse;
  padding: 0;
    
    li{
      margin: 70px auto;
      width: 50%;
      
        
    }
    @media (max-width: 999px){
      flex-flow: column nowrap;
      background-color: rgb(0,0,0,0.7);
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 230px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      
      .nav-link{
        color: #fff;
        cursor: pointer;
        
        
      }
      .nav-link:hover{
        background-color: #ff1737;
        
        
      }
      
    }
`;
const RightNav = ({open}) => {
    const navigate = useNavigate();
    return(
        <Ul open={open} >
            <div className="link-box" >
                <li >
                    <a onClick={()=>{navigate('/home')}}  className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                    <a onClick={()=>{navigate('/about')}} className="nav-link">About</a>
                </li>

                <li className="nav-item">
                    <a onClick={()=>{navigate('/portfolio')}}  className="nav-link">Portfolio</a>
                </li>

                <li className="nav-item">
                    <a onClick={()=>{navigate('/contact')}} className="nav-link">Contact</a>
                </li>
            </div>
        </Ul>
    )
}

export default RightNav