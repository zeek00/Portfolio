import React from 'react'
import Skill from './Skill.view'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript, SiCss3, SiPython, SiGooglecloud, SiReact, SiAdobeillustrator, SiExpress, SiAdobephotoshop, SiMongodb, SiDialogflow, SiTypescript, SiCsharp, SiPostgresql} from 'react-icons/si'
import {FaNode, FaGitAlt} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'

import './Skill.styles.css'

const Skills = () => {
    const skills = [
        {id:1, icon:<AiFillHtml5 className='icons' />, name:'HTML'},
        {id:2, icon:<SiCss3 className='icons' />, name:'CSS'},
        {id:3, icon:<SiJavascript className='icons' />, name:'JavaScript'},
        {id:4, icon:<SiReact className='icons' />, name:'React'},
        {id:5, icon:<FaNode className='icons' />, name:'Node'},
        {id:6, icon:<SiExpress className='icons' />, name:'Express'},
        {id:7, icon:<SiMongodb className='icons' />, name:'MongoDB'},
        {id:8, icon:<SiTypescript className='icons' />, name:'TypeScript'},
        {id:9, icon:<SiPostgresql className='icons' />, name:'PostgreSQL'},
        {id:10, icon:<SiCsharp className='icons' />, name:'C#'},
        {id:11, icon:<SiDialogflow className='icons' />, name:'DialogFlow'},
        {id:12, icon:<SiAdobephotoshop className='icons' />, name:'Photoshop'},
        {id:13, icon:<SiAdobeillustrator className='icons' />, name:'Illustrator'},
        {id:14, icon:<FaGitAlt className='icons' />, name:'Git'},
        {id:15, icon:<SiPython className='icons' />, name:'Python'},
        {id:16, icon:<SiGooglecloud className='icons' />, name:'G-Cloud'},
        {id:17, icon:<FiFigma className='icons' />, name:'Figma'},
    ]
  return (
    <div className='skills-about'>
        
        {skills.map(skill=>{
           return  <Skill
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                />
            ;
        
        })}
    
   </div>
    

  )
}

export default Skills