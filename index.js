const express = require('express')
const path = require('path');
const config = require('./config/keys')
const app = express()
const port = process.env.PORT || 2022;
const mongoose = require('mongoose')
app.use(express.json());
require('./engine/database')

//DB CONNECTION


if(process.env.NODE_ENV === 'production'){

    app.use(express.static('zeekportfolio/build'));// handler front end files(css,js,html)

     // handler for front unhandled routes
    app.get('/api-req', (req,res) =>{
        res.send('route set')
        res.sendFile(path.resolve(__dirname, 'zeekportfolio', 'build', 'index.html'))
    })

}

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})