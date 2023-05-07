import {React, useState} from 'react'
import './Portfolio.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";
import NavigationView from "../Navigation/Navigation.view";
import File from './File'


function Portfolio() {
    useNavigate();
    const content = [
        {id:1, name: 'Graphic Designs', link:'https://drive.google.com/drive/folders/1pZIW-rTXZBhxgW7v4qph4B6RPgQdqfYP?usp=sharing'},
        {id:2, name: 'Projects', link: 'https://github.com/zeek00'},
    ]

   
    
    
    return(
        <div className="portfolio">
            <div className="drawercomp">
                <Drawer/>
            </div>
            <div className="wrapper">
                <NavigationView/>
                
            </div>
            
            <div className="portfolio-area">
                {content.map((files) => (
                    <File 
                    name={files.name} 
                    key={files.id}
                    no={files.id}
                    link={files.link} />
                ))}
            </div>
        </div>

    );

}
export  default Portfolio