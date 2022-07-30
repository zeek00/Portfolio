import React from 'react'
import './Portfolio.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";
import NavigationView from "../Navigation/Navigation.view";


function Portfolio() {
    const navigate = useNavigate();
    return(
        <div className="portfolio">
            <div className="drawercomp">
                <Drawer/>
            </div>
            <div className="wrapper">
                <NavigationView/>
            </div>
        </div>

    );

}
export  default Portfolio