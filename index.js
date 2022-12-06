const express = require('express')
const app = express()
const port = 2022

app.get('/api-req', (req,res) =>{
    res.send('route set')
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})