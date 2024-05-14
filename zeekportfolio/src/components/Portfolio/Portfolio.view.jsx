import {React} from 'react'
import style from './Portfolio.module.css'
import {useNavigate} from "react-router-dom";
import NavigationView from "../Navigation/Navigation.view";
import File from './File'


function Portfolio() {
    useNavigate();
    const content = [
        {id:1, name: 'Graphic Designs', link:'https://drive.google.com/drive/folders/1pZIW-rTXZBhxgW7v4qph4B6RPgQdqfYP?usp=sharing'},
        {id:2, name: 'Projects', link: 'https://github.com/zeek00'},
    ]

   
    
    
    return(
        <div className={style.portfolio}>
            
            <div className="wrapper">
                <NavigationView/>
                
            </div>
            
            <div className={style.portfolioarea}>
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