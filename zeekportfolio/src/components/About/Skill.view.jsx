import React from 'react'
import './Skill.styles.css'


const Skill = (props) => {
    
  return (
    <div className="content">
        <p className='item'>{props.icon}</p>
        <p className='item'>{props.name}</p>
        

    </div>
    
  )
}

export default Skill