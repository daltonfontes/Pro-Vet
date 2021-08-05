const express = require('express');
const app = express();
const cors = require('cors');
require('./config/database');

const port = 5001 ||process.env.PORT 
const router = require ('./routes/router');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})