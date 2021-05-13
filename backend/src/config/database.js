const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/h-vet'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(console.log('MongoDb Conectado com Sucesso !'))
.catch((error)=>

console.log(error)
)

module.exports = mongoose