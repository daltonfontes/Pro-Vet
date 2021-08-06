const express = require('express');
const cors = require('cors')
const app = express();
require("dotenv").config()
require('./config/database');

const { handler } = require('./scripts')
handler();
const port = 5001 ||process.env.PORT 
const router = require ('./routes/router');

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(router);


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})