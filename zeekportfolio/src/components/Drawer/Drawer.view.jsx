
import React, {useState} from "react";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {FaThList} from 'react-icons/fa'
import './Drawer.styles.css'
import './hamburger'
import { useNavigate } from 'react-router-dom';






 

function Drawer() {
 
  return (
    
            <nav class="navbar">
                <Header/>
              <h2>
            Isaac Isewede
          
          </h2>
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
