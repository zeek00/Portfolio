import React from 'react'
import './Portfolio.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";


function Portfolio() {
    const navigate = useNavigate();
    return(
        <div className="portfolio">
            <nav className="header-container">
                <Drawer/>
            </nav>
            <div className="wrapper">
                <ul className="nav-menu">
                    <div className="link-area">
                        <li className="nav-item">
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
                </ul>
            </div>
        </div>

    );

}
export  default Portfolio