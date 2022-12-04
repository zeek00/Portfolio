import {React, useState} from 'react'
import './Portfolio.styles.css'
import {useNavigate} from "react-router-dom";
import Drawer from "../Drawer/Drawer.view";
import NavigationView from "../Navigation/Navigation.view";
import File from './File'

function Portfolio() {
    const navigate = useNavigate();
    const content =[
        {name: 'Graphic Designs', link:'https://drive.google.com/drive/folders/1pZIW-rTXZBhxgW7v4qph4B6RPgQdqfYP?usp=sharing'},
        {name: 'CV', link:'https://drive.google.com/drive/folders/1pZIW-rTXZBhxgW7v4qph4B6RPgQdqfYP?usp=share_link'},
        {name: 'Projects', link: 'https://github.com/zeek00'},
    ]
    const [click, setClicked] = useState(false);
    return(
        <div className="portfolio">
            <div className="drawercomp">
                <Drawer/>
            </div>
            <div className="wrapper">
                <NavigationView/>
            </div>

            <div className="portfolio-area">
                {content.map(files => (
                    <File name={files.name} link={files.link} />

                ))}
            </div>
        </div>

    );

}
export  default Portfolio