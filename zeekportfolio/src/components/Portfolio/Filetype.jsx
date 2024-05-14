import React from 'react'
import Item from './Item';

const Filetype = (props) =>{
    const id = props.id
    return(
        <div>
            {id === 1 && 
                (<div>
                <h1>Coming soon ..</h1>
                <a target='#' className='link' href={props.link}>visit this link for now:</a>
                </div>)
            }

            {id === 2 && (
                <Item/>
            )}
        </div>

    );

};
export default Filetype