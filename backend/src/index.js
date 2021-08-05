const express = require('express');

const app = express();
require("dotenv").config()
require('./config/database');

const { handler } = require('./scripts')
handler();
const port = 5001 ||process.env.PORT 
const router = require ('./routes/router');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(router);


console.log(process.env.NAME_ANDREWS)
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})