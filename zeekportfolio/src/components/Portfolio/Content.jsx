import React from "react";
import { projects } from "./data";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    overflow-x: hidden;
    overflow: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    ::-webkit-scrollbar{
    width: 0.2rem;

    }
    ::-webkit-scrollbar-track{
    background: rgb(255,23,55);

    }
    ::-webkit-scrollbar-thumb{
    background: rgb(255,23,55);

    }
    ::-webkit-scrollbar-thumb:hover{
    background: rgb(255,23,55);

    }

    .image img{
        display: flex;
        margin: 0 auto;
        width: 400px;
        height: 300px;
        object-fit: contain;
    }

    .desc{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        p,h2{
            color: #000;

        }
    }
    .btn{
        color: rgb(255,23,55);
    }
    @media only screen and (max-width: 991px) {
        /* Styles for small screens */
        .image img{
            display: flex;
            margin: 0 auto;
            padding-top: 0.8rem;
            width: 200px;
            height: 100px;
            object-fit: contain;
        }
    
        .desc{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;
            h2{
                font-size: 1rem;
                padding-top: 0.8rem;

            }
            p{
                font-size: 0.9rem;
            }
            p,h2{
                color: #000;
    
            }
        }

        
    }
    
`;


const Content = (prop) => {
    const {route} = useParams();
    const data = projects.filter(item=> item.route === route)
    return(
        <Container>
            {data.map(item=>(
                <>
                    <div className="desc">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Link className="btn" to={item.link} target="_blank" rel="noopener noreferrer">Visit</Link>

                    </div>
                </>


            ))}
            

        
        </Container>
    );

}

export default Content;