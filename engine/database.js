//calls to mongo
const config = require('../config/keys') // configuration file
const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if (!err){
        console.log("database connection successful!!")
    }else {
        console.log('ERROR DETECTED... connection unsuccessful!!')
    }
})

module.exports = mongoose;