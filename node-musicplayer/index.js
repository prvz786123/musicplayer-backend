const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const songs = require('./routes/songs');

const app = express();

app.use(cors());

app.use('/songs',songs);

app.get("/",(req,res)=>{
    console.log("Get Route")
    res.send("Fine")
})


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server Running on port : ",port);
})