const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require ('./routes/router')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})