import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navigation.styles.css'




function Navigation(){
    const navigate = useNavigate();
    return(
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




    );
}

export default Navigation