const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./config/db');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors({origin:true,credentials:true}))

app.get("/", (req,res)=> res.send("HELLO"))

app.listen(process.env.PORT ,async ()=>{
    await connect()
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
})