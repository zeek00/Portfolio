import React from 'react';
import { projects } from './data';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    .project{
        position: relative;
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        img{
            position: relative;
            width: 150px;
            height: 100px;
            object-fit: cover;

            &::before {
                content: ''; 
                position: absolute; 
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: rgba(0, 0, 0, 0.3);
            }
        }

    }
    .btn{
        position: absolute;
        background: #000;
        color: #fff!important;
        padding: 0.4rem;
        top: 3rem;
        margin: 0;
        color: #000;
        border-style: none;
    }

`;

const Content = styled.div`
    
    width: 100%;
    height: auto;
    
`;

const Item = () => {

    return(
        <>
            <Container>
                {projects.map((item,index)=>(
                    <div className='project' key={index}>
                        <img src={item.image} alt="project image" />
                        <Link className='btn' to={item.route}>{item.name}</Link>

                    </div>
                ))}

            </Container>
            <Content>
                <Outlet/>
            </Content>
            
        </>

    );

}

export default Item;