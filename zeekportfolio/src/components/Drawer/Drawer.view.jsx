import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import './Drawer.styles.css'
import './hamburger'
import { useNavigate } from 'react-router-dom';







 

function Drawer() {
    const navigate = useNavigate();
  return (
    
            <nav className="navbar">
                <ul className="nav-menu">
                  <div className="link-area">
                      <li className="nav-item">
                          <a onClick={()=>{navigate('/home')}}  className="nav-link">Home</a>
                      </li>

                      <li className="nav-item">
                          <a onClick={()=>{navigate('/about')}} className="nav-link">About</a>
                      </li>
                      
                      <li className="nav-item">
                          <a onClick={()=>{navigate('/portfolio')}}  className="nav-link">Portolio</a>
                      </li>
                      
                      <li className="nav-item">
                          <a onClick={()=>{navigate('/contact')}} className="nav-link">Contact</a>
                      </li>
                    </div>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
         
    
   
  );
}

export default Drawer;
