import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import './Drawer.styles.css'
import './hamburger'



function Drawer() {
 
  return (
    
            <nav class="navbar">
              <a href="">ZeekDev</a>
                <ul class="nav-menu">
                  <div className="link-area">
                      <li class="nav-item">
                          <a class="nav-link">Home</a>
                      </li>
                      
                      <li class="nav-item">
                          <a class="nav-link">About</a>
                      </li>
                      
                      <li class="nav-item">
                          <a class="nav-link">Portolio</a>
                      </li>
                      
                      <li class="nav-item">
                          <a class="nav-link">Contact</a>
                      </li>
                    </div>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    
                </div>
            </nav>
         
    
   
  );
}

export default Drawer;
