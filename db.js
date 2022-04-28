const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inote?readPreference=primary&ssl=false&directConnection=true";

const connectToMongo =  ()=>{
    mongoose.connect(mongoURI, (req, res)=>{
        console.log("Connected to moongoose successfully");
    })
}

module.exports = connectToMongo;