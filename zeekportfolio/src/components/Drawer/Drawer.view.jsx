import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import './Drawer.styles.css'
import './hamburger'
import Header from "../Header/Header.view";






 

function Drawer() {

  return (
    
            <nav className="navbar">
                <ul className="nav-menu">
                  <div className="link-area">
                      <li className="nav-item">
                          <a className="nav-link">Home</a>
                      </li>
                      
                      <li className="nav-item">
                          <a className="nav-link">About</a>
                      </li>
                      
                      <li className="nav-item">
                          <a className="nav-link">Portolio</a>
                      </li>
                      
                      <li className="nav-item">
                          <a className="nav-link">Contact</a>
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
