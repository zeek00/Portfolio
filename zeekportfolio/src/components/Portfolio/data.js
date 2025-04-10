import shoopp from '../../assets/projects-img/shoopp.png'
import redditapp from '../../assets/projects-img/redditapp.png'
import doggoworld from '../../assets/projects-img/doggoworld.png'


export const projects = [
    {
        name: 'doggoworld',
        link: 'https://doggo-world.vercel.app',
        image: doggoworld,
        description: 'Doggo world is a fun and colorful web application designed to showcase a variety of dog breeds and relevant information in a playful way.',
        techstack:['next.js', 'typescript', 'restapi', 'vercel', 'tailwind'],
        route: 'doggoworld'
    },
    {
        name: 'SHOOPP',
        link: 'https://shoopps.netlify.app',
        image: shoopp,
        description: 'An e-commerce fullstack web application built using MERN stack deployed on railway and netlify',
        techstack:['javascript', 'react.js', 'node', 'mongodb', 'express'],
        route: 'shoopp',
    },
    {
        name: 'REDdit APP',
        link: 'https://redditapp.surge.sh/',
        image: redditapp,
        description: 'A web app utilising the Reddit API to showcase and search for posts',
        techstack: ['react.js'],
        route: 'redditapp'
    }
]